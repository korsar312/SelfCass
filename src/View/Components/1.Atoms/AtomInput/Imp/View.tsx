import type Model from "./Model.ts";
import Style from "./Style.ts";
import type { NFC } from "./../../../../../Logic/Libs/Util/TypesUtils";

const View: NFC<typeof Model> = (props) => {
	const { textObj, onClick, handleChange, text, extStyle, name, type } = props;

	return (
		<input
			type={type}
			name={name}
			defaultValue={String(text)}
			css={[Style.wrapper, Style.text(textObj), extStyle]}
			onClick={onClick}
			onInput={handleChange}
		/>
	);
};

export default View;
