#!/usr/bin/env ts-node
/// <reference types="node" />

import * as fs from "fs";
import * as path from "path";
import * as readline from "readline";
import * as process from "node:process";
import { fileURLToPath } from "node:url";

type DirKey = 0 | 1 | 2 | 3;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CATALOGS: Record<DirKey, string> = {
	0: "0.Cores",
	1: "1.Atoms",
	2: "2.Molecules",
	3: "3.Substances",
};

function withPrefix(dirKey: DirKey, baseName: string): string {
	if (dirKey === 0) return baseName;
	if (dirKey === 1) return `Atoms${baseName}`;
	if (dirKey === 2) return `Molecule${baseName}`;
	return `Substance${baseName}`;
}

async function prompt(question: string): Promise<string> {
	const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
	const answer = await new Promise<string>((resolve) => rl.question(question, resolve));
	rl.close();
	return answer.trim();
}

async function main() {
	// 1) Выбор каталога
	const dirAnswer = await prompt("Выберите каталог:\n0 → 0.Cores\n1 → 1.Atoms\n2 → 2.Molecules\n3 → 3.Substances\n> ");
	if (!/^[0-3]$/.test(dirAnswer)) {
		console.error("Ошибка: нужно ввести 0, 1, 2 или 3.");
		process.exit(1);
	}
	const dirKey = Number(dirAnswer) as DirKey;
	const targetCatalogName = CATALOGS[dirKey];

	// 2) Имя компонента
	const baseName = await prompt("Укажите имя компонента (например, Grid): ");
	if (!baseName || !/^[A-Za-z][A-Za-z0-9_]*$/.test(baseName)) {
		console.error("Ошибка: имя должно начинаться с буквы и содержать только A-Z, a-z, 0-9, _");
		process.exit(1);
	}
	const finalName = withPrefix(dirKey, baseName[0].toUpperCase() + baseName.slice(1));

	// 3) Проверка наличия целевого каталога
	const targetCatalogPath = path.join(__dirname, targetCatalogName);
	if (!fs.existsSync(targetCatalogPath) || !fs.statSync(targetCatalogPath).isDirectory()) {
		console.error(`Ошибка: каталог "${targetCatalogName}" не найден рядом со скриптом: ${targetCatalogPath}`);
		process.exit(1);
	}

	// 4) Папка компонента
	const componentRoot = path.join(targetCatalogPath, finalName);
	if (fs.existsSync(componentRoot)) {
		console.error(`Ошибка: папка уже существует: ${componentRoot}`);
		process.exit(1);
	}
	fs.mkdirSync(componentRoot, { recursive: true });

	// 5) Разворачиваем структуру
	const archiveTree = getArchiveTree(finalName);
	for (const entry of archiveTree) {
		const abs = path.join(targetCatalogPath, entry.relPath);
		const dir = path.dirname(abs);
		fs.mkdirSync(dir, { recursive: true });
		fs.writeFileSync(abs, entry.content, { encoding: "utf8" });
	}

	console.log("Готово.");
	console.log(`Каталог: ${targetCatalogName}`);
	console.log(`Компонент: ${finalName}`);
	console.log(`Путь: ${componentRoot}`);
}

function getArchiveTree(finalName: string): Array<{ relPath: string; content: string }> {
	return [
		{
			relPath: `${finalName}/index.tsx`,
			content: TemplateIndex(),
		},
		{
			relPath: `${finalName}/Imp/Model.ts`,
			content: TemplateModel(),
		},
		{
			relPath: `${finalName}/Imp/Style.ts`,
			content: TemplateStyle(),
		},
		{
			relPath: `${finalName}/Imp/View.tsx`,
			content: TemplateView(),
		},
	];
}

main().catch((e) => {
	console.error("Неожиданная ошибка:", e?.message ?? e);
	process.exit(1);
});

function TemplateIndex() {
	return `
import Model from "./Imp/Model.ts";
import View from "./Imp/View.tsx";

export interface IComponent {}

const Index = (props: IComponent) => {
  const model = Model(props);
  return <View {...model} />;
};

export default Index;
`;
}

function TemplateModel() {
	return `
import type { IComponent } from "../index";

function Model(props: IComponent) {
  const {} = props;

  return {};
}

export default Model;
`;
}

function TemplateStyle() {
	return `
import Styles from "../../../../../Styles/Styles.ts";
import { css, type CSSObject } from "@emotion/react";

class Style extends Styles {
  public form: CSSObject = css\`\`;
}

export default new Style();
`;
}

function TemplateView() {
	return `
import type Model from "./Model.ts";
import Style from "./Style.ts";
import type { NFC } from "./../../../../../Logic/Libs/Util/TypesUtils";

const View: NFC<typeof Model> = (props) => {
  const {} = props;

  return <div css={Style.wrapper}></div>;
};

export default View;
`;
}
