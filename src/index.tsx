import van from "@packages/mini-van";
import "./index.css";

import Homepage from "@components/Homepage";

van.add(document.body,
	<semantic-props version="3" id="top">
		<Homepage />
	</semantic-props>
);