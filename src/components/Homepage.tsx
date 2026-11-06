import "./Homepage.css";
import Profile from "./Profile";
import Footer from "./Footer";

export default () => (
	<semantic-props version="3">
		<article class="homepage">
			<Profile />
			<main>...</main>
			<Footer />
		</article>
	</semantic-props>
);