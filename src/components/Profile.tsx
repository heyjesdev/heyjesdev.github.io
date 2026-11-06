import "./profile.css";

export default () => (
	<figure class="profile">
		<img
			class="profile-art"
			src="/images/profile-art.avif"
			loading="lazy"
			decoding="async"
			alt=""
		/>
		<img
			class="profile-image"
			src="/images/profile.avif"
			loading="lazy"
			decoding="async"
			alt="Myself, Jess!"
		/>
		<figcaption class="profile-header">
			<h1 class="profile-title">Hey, Jess!</h1>
			<h2 class="profile-tagline">Open Source Designer & Developer.</h2>
			<p class="profile-bio">
				I'm a web developer passionate about building lightweight, thoughtful experiences for the web.
				I enjoy working close to the platform, creating tools that simplify development, and turning ideas into polished, performant products.
			</p>
		</figcaption>
	</figure>
);