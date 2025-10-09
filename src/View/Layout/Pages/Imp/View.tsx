import type Model from "./Model.ts";
import Style from "./Style.ts";
import type { NFC } from "./../../../../Logic/Libs/Util/TypesUtils";
import { Act } from "../../../../Logic/Core";
import { RouterProvider } from "react-router/dom";

const View: NFC<typeof Model> = (props) => {
	const {} = props;

	const router = Act.Router.getRouteObj();

	return (
		<div css={Style.wrapper}>
			<RouterProvider router={router} />
		</div>
	);
};

export default View;
