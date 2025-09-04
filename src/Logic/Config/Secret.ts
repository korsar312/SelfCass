export const Secret = {
	tokenTg: ((import.meta.env.IS_DEV ? import.meta.env.TOKEN_TG_TEST : import.meta.env.TOKEN_TG) || "").trim(),
	openAiToken: getArr("OPENAI_TOKEN"),
	addressWalletPidor: (import.meta.env.ADDRESS_WALLET_PIDOR || "").trim(),
	addressWalletSuper: (import.meta.env.ADDRESS_WALLET_SUPER || "").trim(),
	addressWalletWork: getArr("ADDRESS_WALLET_WORK"),
	tokenWalletWork: (import.meta.env.TOKEN_WALLET_WORK || "").trim(),
	usdtContract: "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t".trim()
};

function getArr(name: string): string[] {
	const result: string[] = [];
	let index = 1;

	while (true) {
		const value = import.meta.env[`${name}_${index}`];
		if (!value) break;
		result.push((value || "").trim());
		index++;
	}

	return result;
}
