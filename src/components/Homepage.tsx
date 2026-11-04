import "./HomePage.css";
import Layout from "./Layout";
import Footer from "./Footer";

export default () => (
	<semantic-props version="3">
		<Layout>
			<article class="homepage">
				<main>...</main>
				<Footer />
			</article>
		</Layout>
	</semantic-props>
);