import "./Layout.css";

interface Layout {
	children: unknown;
}

export default ({ children }: Layout) => (
	<semantic-props version="3" class="layout">
		{children}
	</semantic-props>
);