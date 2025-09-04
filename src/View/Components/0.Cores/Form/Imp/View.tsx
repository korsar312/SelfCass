import type Model from "./Model.ts";
import type { NFC } from "./../../../../../Logic/Libs/Util/TypesUtils";

const View: NFC<typeof Model> = (props) => {
	const { handleSubmit, children } = props;

	return <form onSubmit={handleSubmit}>{children}</form>;
};

export default View;
