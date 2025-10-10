import type Model from "./Model.ts";
import Style from "./Style.ts";
import type { NFC } from "./../../../../../Logic/Libs/Util/TypesUtils";
import Text from "../../../0.Cores/Text";

const View: NFC<typeof Model> = (props) => {
	const { textObj, onClick, handleChange, text, name, type } = props;

	function images() {
		return <></>;
	}

	return (
		<div css={Style.wrapper}>
			{images()}

			<div css={Style.inputWrap}>
				<Text extStyle={Style.place} color={"TYPO_2"} font={textObj.font} text={"email address"} />
				<input
					type={type}
					name={name}
					defaultValue={String(text)}
					css={[Style.input, Style.inputContent, Style.text(textObj)]}
					onClick={onClick}
					onInput={handleChange}
				/>
			</div>

			{images()}
		</div>
	);
};

export default View;
