import "./Homepage.css";
import Profile from "./Profile";
import Footer from "./Footer";
import Collections from "./Collections";

export default () => (
	<semantic-props version="3">
		<article class="homepage">
			<Profile />
			<main class="homepage-content">
				<Collections />
			</main>
			<Footer />
		</article>
	</semantic-props>
);