import "./Homepage.css";
import Profile from "./Profile";
import Collections from "./Collections";
import Shortcuts from "./Shortcuts";
import Footer from "./Footer";

export default () => (
	<semantic-props version="3">
		<article class="homepage">
			<Profile />
			<main class="homepage-content">
				<Collections />
				<Shortcuts />
			</main>
			<Footer />
		</article>
	</semantic-props>
);