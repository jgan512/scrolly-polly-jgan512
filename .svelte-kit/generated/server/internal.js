
import root from '../root.svelte';
import { set_building, set_prerendering } from '__sveltekit/environment';
import { set_assets } from '__sveltekit/paths';
import { set_manifest, set_read_implementation } from '__sveltekit/server';
import { set_private_env, set_public_env, set_safe_public_env } from '../../../node_modules/@sveltejs/kit/src/runtime/shared-server.js';

export const options = {
	app_template_contains_nonce: false,
	csp: {"mode":"auto","directives":{"upgrade-insecure-requests":false,"block-all-mixed-content":false},"reportOnly":{"upgrade-insecure-requests":false,"block-all-mixed-content":false}},
	csrf_check_origin: true,
	embedded: false,
	env_public_prefix: 'PUBLIC_',
	env_private_prefix: '',
	hash_routing: false,
	hooks: null, // added lazily, via `get_hooks`
	preload_strategy: "modulepreload",
	root,
	service_worker: false,
	templates: {
		app: ({ head, body, assets, nonce, env }) => "<!doctype html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<meta name=\"description\" content=\"Decoding Menus: The Story of Asian Food Terms and What They Reveal\" />\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n\t\t\n\t\t<!-- \n\t\t// ===================================================================\n\t\t// FONT IMPORTS\n\t\t// Georgia font - system font, no import needed\n\t\t// ===================================================================\n\t\t-->\n\t\t" + head + "\n\t\t\n\t\t<!-- \n\t\t// ===================================================================\n\t\t// LOADING STATES\n\t\t// Styling to prevent Flash of Unstyled Content (FOUC) during load\n\t\t// ===================================================================\n\t\t-->\n\t\t<style>\n\t\t\t/* Initially hide content that will be replaced by Svelte */\n\t\t\t[data-mount=\"true\"] {\n\t\t\t\tdisplay: none;\n\t\t\t}\n\t\t\t\n\t\t\t/* Initial page loading overlay */\n\t\t\t.app-loading {\n\t\t\t\tposition: fixed;\n\t\t\t\ttop: 0;\n\t\t\t\tleft: 0;\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 100%;\n\t\t\t\tbackground-color: #000000;\n\t\t\t\tdisplay: flex;\n\t\t\t\tjustify-content: center;\n\t\t\t\talign-items: center;\n\t\t\t\tz-index: 9999;\n\t\t\t\ttransition: opacity 0.5s ease-out;\n\t\t\t}\n\t\t\t\n\t\t\t.app-loading.hide {\n\t\t\t\topacity: 0;\n\t\t\t\tpointer-events: none;\n\t\t\t}\n\t\t\t\n\t\t\t.loading-spinner {\n\t\t\t\twidth: 50px;\n\t\t\t\theight: 50px;\n\t\t\t\tborder: 5px solid #f3f3f3;\n\t\t\t\tborder-top: 5px solid #333;\n\t\t\t\tborder-radius: 50%;\n\t\t\t\tanimation: spin 1s linear infinite;\n\t\t\t}\n\t\t\t\n\t\t\t@keyframes spin {\n\t\t\t\t0% { transform: rotate(0deg); }\n\t\t\t\t100% { transform: rotate(360deg); }\n\t\t\t}\n\t\t\t\n\t\t\t/* Hide all lorem ipsum paragraphs until app is ready */\n\t\t\tbody > p {\n\t\t\t\tdisplay: none;\n\t\t\t}\n\t\t</style>\n\t</head>\n\t<body>\n\t\t<!-- \n\t\t// ===================================================================\n\t\t// LOADING OVERLAY\n\t\t// Initial loading state before content is rendered\n\t\t// ===================================================================\n\t\t-->\n\t\t<div class=\"app-loading\" id=\"appLoading\">\n\t\t\t<div class=\"loading-spinner\"></div>\n\t\t</div>\n\t\t\n\t\t<!-- \n\t\t// ===================================================================\n\t\t// SVELTE APP MOUNT POINT\n\t\t// Main container where SvelteKit mounts the application\n\t\t// ===================================================================\n\t\t-->\n\t\t<div id=\"svelteApp\">" + body + "</div>\n\t\t\n\t\t<!-- \n\t\t// ===================================================================\n\t\t// SCROLLYTELLER MOUNT POINTS\n\t\t// Anchors and markers for scrollytelling functionality\n\t\t// ===================================================================\n\t\t-->\n\t\t<div data-mount=\"true\" id=\"scrollytellerNAMEtest\" data-component=\"Anchor\"></div>\n\n\t\t<div data-mount=\"true\" id=\"markNUMBER1ALIGNright\"></div>\n\t\t<p>\n\t\t\tThe rise of transliteration in upscale Asian restaurants reflects changing perceptions of authenticity and cultural identity.\n\t\t</p>\n\n\t\t<div data-mount=\"true\" id=\"markNUMBER2ALIGN\"></div>\n\t\t<p>\n\t\t\tLanguage adaptation in restaurant menus reveals the complex dynamics between cultural preservation and market accessibility.\n\t\t</p>\n\n\t\t<div data-mount=\"true\" id=\"markNUMBER3ALIGNleft\"></div>\n\t\t<p>\n\t\t\tThe journey from translation to transliteration shows how Asian cuisines are reclaiming their linguistic heritage in American dining.\n\t\t</p>\n\n\t\t<div data-mount=\"true\" id=\"markNUMBER4ALIGNright\"></div>\n\t\t<p>\n\t\t\tDifferent Asian cuisines have followed distinct paths in their American adaptation, from Chinese flexibility to Japanese refinement.\n\t\t</p>\n\t\t<p>\n\t\t\tThe perception hierarchy of Asian cuisines continues to shape how they are presented and priced in the American market.\n\t\t</p>\n\t\t<p>\n\t\t\tSocial media and Gen Z have accelerated the adoption of transliterated food terms, making them part of everyday vocabulary.\n\t\t</p>\n\n\t\t<div data-mount=\"true\" id=\"markNUMBER5ALIGN\"></div>\n\t\t<p>\n\t\t\tRestaurant owners navigate between cultural authenticity and commercial success when deciding menu language.\n\t\t</p>\n\n\t\t<div data-mount=\"true\" id=\"markNUMBER6ALIGNleft\"></div>\n\t\t<p>\n\t\t\tAs Asian cuisines gain prominence, transliteration becomes a tool for challenging stereotypes and elevating perception.\n\t\t</p>\n\t\t\n\t\t<p>\n\t\t\tThe evolution from \"chow mein\" to \"xiao long bao\" represents broader shifts in American cultural awareness and appreciation.\n\t\t</p>\n\n\t\t<div data-mount=\"true\" id=\"markNUMBER7ALIGN\"></div>\n\t\t<p>\n\t\t\tRestaurant menus reflect not just culinary choices but also the ongoing story of cultural identity in multicultural America.\n\t\t</p>\n\t\t<div data-mount=\"true\" id=\"endscrollyteller\"></div>\n\t\t\n\t\t<!-- \n\t\t// ===================================================================\n\t\t// LOADING SCREEN REMOVAL\n\t\t// Script to hide loading overlay once content is loaded\n\t\t// ===================================================================\n\t\t-->\n\t\t<script>\n\t\t\t// Remove loading screen once the app is mounted\n\t\t\tdocument.addEventListener('DOMContentLoaded', function() {\n\t\t\t\t// Short timeout to ensure Svelte has had time to initialize\n\t\t\t\tsetTimeout(function() {\n\t\t\t\t\tvar loadingScreen = document.getElementById('appLoading');\n\t\t\t\t\tif (loadingScreen) {\n\t\t\t\t\t\tloadingScreen.classList.add('hide');\n\t\t\t\t\t\t// Remove from DOM after transition completes\n\t\t\t\t\t\tsetTimeout(function() {\n\t\t\t\t\t\t\tloadingScreen.parentNode.removeChild(loadingScreen);\n\t\t\t\t\t\t}, 500);\n\t\t\t\t\t}\n\t\t\t\t}, 200);\n\t\t\t});\n\t\t</script>\n\t</body>\n</html>",
		error: ({ status, message }) => "<!doctype html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<title>" + message + "</title>\n\n\t\t<style>\n\t\t\tbody {\n\t\t\t\t--bg: white;\n\t\t\t\t--fg: #222;\n\t\t\t\t--divider: #ccc;\n\t\t\t\tbackground: var(--bg);\n\t\t\t\tcolor: var(--fg);\n\t\t\t\tfont-family:\n\t\t\t\t\tsystem-ui,\n\t\t\t\t\t-apple-system,\n\t\t\t\t\tBlinkMacSystemFont,\n\t\t\t\t\t'Segoe UI',\n\t\t\t\t\tRoboto,\n\t\t\t\t\tOxygen,\n\t\t\t\t\tUbuntu,\n\t\t\t\t\tCantarell,\n\t\t\t\t\t'Open Sans',\n\t\t\t\t\t'Helvetica Neue',\n\t\t\t\t\tsans-serif;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tjustify-content: center;\n\t\t\t\theight: 100vh;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t.error {\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tmax-width: 32rem;\n\t\t\t\tmargin: 0 1rem;\n\t\t\t}\n\n\t\t\t.status {\n\t\t\t\tfont-weight: 200;\n\t\t\t\tfont-size: 3rem;\n\t\t\t\tline-height: 1;\n\t\t\t\tposition: relative;\n\t\t\t\ttop: -0.05rem;\n\t\t\t}\n\n\t\t\t.message {\n\t\t\t\tborder-left: 1px solid var(--divider);\n\t\t\t\tpadding: 0 0 0 1rem;\n\t\t\t\tmargin: 0 0 0 1rem;\n\t\t\t\tmin-height: 2.5rem;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t}\n\n\t\t\t.message h1 {\n\t\t\t\tfont-weight: 400;\n\t\t\t\tfont-size: 1em;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t@media (prefers-color-scheme: dark) {\n\t\t\t\tbody {\n\t\t\t\t\t--bg: #222;\n\t\t\t\t\t--fg: #ddd;\n\t\t\t\t\t--divider: #666;\n\t\t\t\t}\n\t\t\t}\n\t\t</style>\n\t</head>\n\t<body>\n\t\t<div class=\"error\">\n\t\t\t<span class=\"status\">" + status + "</span>\n\t\t\t<div class=\"message\">\n\t\t\t\t<h1>" + message + "</h1>\n\t\t\t</div>\n\t\t</div>\n\t</body>\n</html>\n"
	},
	version_hash: "vfpfrt"
};

export async function get_hooks() {
	let handle;
	let handleFetch;
	let handleError;
	let init;
	

	let reroute;
	let transport;
	

	return {
		handle,
		handleFetch,
		handleError,
		init,
		reroute,
		transport
	};
}

export { set_assets, set_building, set_manifest, set_prerendering, set_private_env, set_public_env, set_read_implementation, set_safe_public_env };
