import type {} from "jsx-dom";

declare global {
	declare module "*.css";
}

declare module "jsx-dom" {
	namespace JSX {
		interface IntrinsicElements {
			[key: `${string}-${string}`]: any;
		}
	}
}