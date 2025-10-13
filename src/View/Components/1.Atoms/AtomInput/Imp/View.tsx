import type Model from "./Model.ts";
import Style from "./Style.ts";
import type { NFC } from "./../../../../../Logic/Libs/Util/TypesUtils";
import Text from "../../../0.Cores/Text";
import type { TAtomInputIcon } from "../index.tsx";
import Image from "../../../0.Cores/Image";

const View: NFC<typeof Model> = (props) => {
	const { textObj, onClick, handleChange, text, name, type, icons, isTextExist, disabled, placeholder, isValid, onValid } = props;

	function images(icons?: TAtomInputIcon) {
		return (
			icons && (
				<div css={[Style.imageWrap, icons.groupStyle]}>
					{icons?.value.map((el) => (
						<Image {...el} />
					))}
				</div>
			)
		);
	}

	return (
		<div css={[Style.wrapper, Style.valid(isValid)]}>
			{images(icons?.left)}

			<div css={Style.inputWrap}>
				<Text extStyle={Style.place(isTextExist)} color={"TYPO_2"} font={textObj.font} text={placeholder} />

				<input
					type={type}
					name={name}
					defaultValue={String(text)}
					css={[Style.input, Style.inputContent, Style.text(textObj)]}
					onClick={onClick}
					onInput={handleChange}
					disabled={disabled}
					onChange={onValid}
				/>
			</div>

			{images(icons?.right)}
		</div>
	);
};

export default View;
