import "./Footer.css";

export default () => (
	<semantic-props version="3">
		<footer class="footer">
			<div class="footer-items">
				<span class="footer-items-element">
					&copy; {new Date().getFullYear()} Jess Sandoval. All rights reserved.
				</span>
			</div>
		</footer>
	</semantic-props>
);