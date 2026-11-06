import "./Shortcuts.css";

const shortcuts: Record<string, string> = {
	"Semantic Props": "https://semantic-props.style/",
	"Github": "https://github.com/heyjesdev",
	"LinkedIn": "https://www.linkedin.com/in/heyjes/"
};

export default () => (
	<nav class="shortcuts">
		<div class="shortcuts-items">
			{Object.entries(shortcuts).map(([title, url]) => (
				<a class="shortcuts-items-element" href={url} rel="external" target="_blank">
					{title}
				</a>
			))}
		</div>
	</nav>
);