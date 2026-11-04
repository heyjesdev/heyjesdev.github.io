import "./Footer.css";

export default () => (
	<semantic-props version="3">
		<footer class="footer">
			<span class="footer-copyright">
				&copy; {new Date().getFullYear()} Jess Sandoval. All rights reserved.
			</span>
		</footer>
	</semantic-props>
);