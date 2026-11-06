import "./Collections.css";
import collections from "./Collections.json";

export default () => (
	<semantic-props version="3">
		{collections.map(({ title, items }) => (
			<details class="collections" open>
				<summary class="collections-title">{title}</summary>
				<nav class="collections-items">
					{items.map(({ title, description, url }) => (
						<a class="collections-items-element" href={url} rel="external" target="_blank">
							<strong class="collections-items-title">{title}</strong>
							{description && (
								<p class="collections-items-description">{description}</p>
							)}
							<span class="collections-items-url">{url}</span>
						</a>
					))}
				</nav>
			</details>
		))}
	</semantic-props>
);