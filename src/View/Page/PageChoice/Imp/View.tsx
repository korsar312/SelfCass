import type Model from "./Model.ts";
import type { NFC } from "./../../../../Logic/Libs/Util/TypesUtils";
import { Act } from "../../../../Logic/Core";
import Grid from "../../../Components/0.Cores/Grid";

const View: NFC<typeof Model> = (props) => {
	const {} = props;

	function as() {
		Act.Router.goTo("CASS_LOGIN");
	}

	return (
		<div onClick={as}>
			<Grid container>
				<Grid item md={1} sm={2} xs={3}>
					<div css={{ background: "red", height: 266 }}>123</div>
				</Grid>

				<Grid item md={1} sm={2} xs={3}>
					<div css={{ background: "red", height: 266 }}>123</div>
				</Grid>

				<Grid item md={1} sm={2} xs={3}>
					<div css={{ background: "red", height: 266 }}>123</div>
				</Grid>
			</Grid>
		</div>
	);
};

export default View;
