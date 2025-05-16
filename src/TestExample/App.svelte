<script lang="ts">
	// ===================================================================
	// MAIN APPLICATION COMPONENT
	// Configures and integrates scrollyteller with visualizations
	// ===================================================================
	// Remove chart imports - not needed anymore
	import Scrollyteller, { loadScrollyteller } from '$lib/index.js';
	import ChineseTimelineComponent from './ChineseTimelineComponent.svelte';
	import ChinesePronunciationInteractive from './ChinesePronunciationInteractive.svelte';
	import { onMount } from 'svelte';

	// Import chart specifications from JSON files
	import chart01 from './Charts/chart_01.json';
	import chart03 from './Charts/chart_03.json';
	import chart04 from './Charts/chart_04.json';
	import chart06 from './Charts/chart_06.json';
	import chart07 from './Charts/chart_07.json';
	
	// ===================================================================
	// SCROLLYTELLER CONFIGURATION
	// Initialize scrollyteller with configuration parameters
	// ===================================================================
	const scrollyData = loadScrollyteller(
		'test', // Scrollyteller name - corresponds to #scrollytellerNAMEtest in CoreMedia
		'u-full', // Class for mount point - u-full makes it full width in Odyssey
		'mark' // Marker prefix - #markNUMBER1 etc. in CoreMedia
	);

	// App state
	let number = 0; // Current section number
	let stProgress; // Scrollyteller progress data

	// ===================================================================
	// EVENT HANDLERS
	// Handle scrollyteller events for markers and progress
	// ===================================================================
	
	// Handle marker changes (when user scrolls to a new section)
	const onMarker = (marker) => {
		number = marker.number;
	};

	// Track scrolling progress for animations
	const onProgress = (progress) => {
		stProgress = progress;
	};

	// Initialize when component mounts
	onMount(() => {
		// Component initialization if needed
	});
</script>

<svelte:head>
	<!-- 
	// ===================================================================
	// FONT IMPORTS
	// Typography resources for the application - Georgia font
	// ===================================================================
	-->
</svelte:head>

<!-- 
// ===================================================================
// HEADER SECTION
// Full-screen hero image with title overlay
// ===================================================================
-->
<div class="fullscreen-chapter header-image">
  <div class="header-overlay"></div>
  <div class="header-content">
    <h1 class="main-title">The Words We Eat...</h1>
  </div>
</div>

<!-- 
// ===================================================================
// TITLE AND BYLINE SECTION
// Title and byline positioned below the header image
// ===================================================================
-->
<div class="title-section">
  <h2 class="sub-title">Decoding Menus: The Story of Asian Food Terms and What They Reveal</h2>
  <h3 class="byline">Jennifer Gan</h3>
</div>

<!-- 
// ===================================================================
// INTRODUCTION CONTENT
// Opening paragraphs before scrollytelling sections
// ===================================================================
-->
<div class="content-container">
	<p class="content-paragraph">On evenings in Manhattan's Chinatown, the mouthwatering smell of fried garlic and simmering broths drifts through Mott Street, past decades-old bakeries and wonton shops that have withstood the test of time. Nestled among them, a new wave of upscale restaurants has emerged.</p>

	<p class="content-paragraph">Besides the fancy and Instagrammable interior designs, these reservation-only establishments are also serving many of their dishes under their original Mandarin names. For example, <em>xiao long bao</em> instead of soup dumplings.</p>

	<p class="content-paragraph">In one such trendy eatery, the Mountain House, the room hums with a mix of languages, blending together over the clatter of chopsticks and the occasional sizzle of a fresh dish hitting the table. Servers rush through the tight spaces between tables, balancing plates with chili-drenched meat and steaming bowls of soup.</p>

	<p class="content-paragraph">A group of friends waiting to be seated sits near the entrance, where a wall of glass jars packed with dried chilies and Szechuan peppercorns introduces the signature Szechuan flavor they are about to try. The group, none of whom speaks the language, passes around the menu, squinting at the unfamiliar terms. They pause over transliterated words they don't recognize, scanning for the English translations beneath.</p>

	<p class="content-paragraph">"How do you say this? La-ziji?" One of them asked, carefully trying to pronounce the term. "Just say spicy chicken," another shrugs. "I think they'll understand."</p>

	<p class="content-paragraph">In the end, when the server came to take their order, the group played it safe and resorted to the universal language of pointing. "Can we have this, this, and this?" they said, tapping the menu and nodding as the server repeated the names in Mandarin to confirm.</p>
<!-- Insert the image here before "New York City..." -->
	<div class="image-center">
		<img src="../src/TestExample/Images/menu example.jpg" alt="Menu Example Chart" />
		<p class="image-caption">Menu Example: Sichuan Mountain House</p>
	</div>
	
	<p class="content-paragraph">New York City is a linguistic mosaic, home to more than 800 languages. In neighborhoods like Flushing, Chinatown, and Koreatown, restaurant signs, grocery labels, and menus function as informal lessons in cultural adaptation. For those who are unfamiliar, these terms can feel like linguistic puzzles. But for the restaurant owners behind this trend, the decision to use "transliterated words" -- simplifying pronunciation instead of translation - has become a subtle yet powerful act of cultural preservation.</p>

	<p class="content-paragraph">Unlike translation, which conveys the meaning of a word in another language, transliteration is derived solely from the pronunciation. This practice isn't new; early translators of the Bible introduced words like "baptism (baptizo)" into English by transliterating Greek sounds.</p>
  
  <!-- Add the interactive pronunciation component here -->
  <ChinesePronunciationInteractive />

	<p class="content-paragraph">Similarly, Arabic mathematical and scientific terms, such as "algebra" (al-jabr), entered. European languages through transliteration, shaping the development of modern science.</p>

	<p class="content-paragraph">In the context of food, transliteration is a way to invite customers to not just eat, but to engage, explore, and perhaps even learn.</p>

	<p class="content-paragraph">Rather than reducing má là xiāng guō to spicy dry pot or jiān bǐng to Chinese crepes, they retain the original phonetics, encouraging customers to familiarize themselves with the words as they would with sushi or tacos.</p>

	<p class="content-paragraph">One recent example is the use of "tanghulu," a traditional Chinese candied fruit. Last year, tanghulu gained widespread attention on TikTok and other social media platforms, where it was celebrated as a cultural delicacy.</p>

	<p class="content-paragraph">According to Google Trends, searches for "tanghulu" have skyrocketed over the past five years, far surpassing its translated version. Interest in the term increased from a value of around 7 in 2021 to 100, the peak popularity value, in 2024.</p>

	<p class="content-paragraph">Chloe Chang, a food influencer based in New York City, remembers when the trend blew up. While she doesn't fully understand the excitement, especially as the growing hype drove up prices far beyond what she was used to paying back home in Taiwan and Beijing, she appreciates the familiarity the transliterated term brought.</p>

	<p class="content-paragraph">"I appreciate it more than I don't, and I feel like that is not because I want to learn the language. I'm probably going to forget it anyway," she laughs. Instead, she sees transliteration as a marker of something that feels more traditional. "Obviously, we have to read the description to ask the server, but it makes me go, 'Wait, this sounds really authentic because I don't understand it.'"</p>

	<p class="content-paragraph">For Chang, the use of transliterated terms shows authenticity and conveys how Chinese cuisine is being redefined for a new generation of diners. Some new eateries are thoughtfully adapting menu language, aiming to make Chinese cuisine approachable without diluting its cultural essence.</p>

	<p class="content-paragraph">On the corner of West 113th Street, near Columbia University in Manhattan, many students stop by Junzi Kitchen for a quick meal between classes. The place aims to reimagine Chinese food for American audiences through a fast-casual concept. Its founder, Yong Zhao, who also launched Nice Day Chinese, hopes to inspire a generational evolution of Chinese cuisine while preserving its originality.</p>

	<p class="content-paragraph">Part of this mission is completed through something as seemingly simple as the wording on the menu. Zhao and his team put significant thought into which dishes to transliterate and how to present them. Take "jaja sauce," for instance. Rather than sticking to the accurate transliteration, which is "zhajiang," or translating it as "black bean sauce," Zhao opted for "jaja." The playful name simplifies pronunciation for non-Chinese customers without stripping away its identity.</p>

	<p class="content-paragraph">In Zhao's opinion, there's an educational cost for Americans to learn transliterated names of foreign cultures. He said it's about acceptance and can be a slow process, especially for Chinese food.</p>

	<p class="content-paragraph">"There are nuances in the storytelling part, media doesn't give enough bandwidth to tell a normal story about China, even a food story," Zhao said.</p>

	<!-- Timeline Component -->
	<ChineseTimelineComponent />

	<p class="content-paragraph">The transplantation of Chinese food to the United States first occurred in the mid-19th century during the California Gold Rush, as Chinese immigrants opened small eateries catering primarily to their own community members who had migrated to the region. By the late 1800s, Chinese food had become a staple in urban centers such as San Francisco and New York. In the decades since, dishes were often tailored to non-Chinese tastes, with recipes like chow mein, which were created to appeal to American preferences for simpler, sweeter flavors. Menu terms were commonly translated to make them accessible to American diners.</p>

	<p class="content-paragraph">"They are very adaptable and accommodating. They had to come up with new dishes that appealed to their customers." Curtis Chin said, reflecting on how Chinese chefs succeeded in the U.S. because of their flexibility.</p>

	<p class="content-paragraph">Chin is the author of <em>Everything I Learned, I Learned in a Chinese Restaurant,</em> his memoir about family, identity, and the Asian American experience in the Midwest. Growing up in Detroit during the 1980s, Chin's childhood was shaped by his parents' Chinese restaurant, Chung's, a space that became not just a diner but a cultural crossroad.</p>

	<p class="content-paragraph">He recalled that many Chinese restaurants during that time allowed for customization. Because dishes were often stir-fried together, customers could request modifications to ingredients and spice levels to suit their tastes.</p>

	<p class="content-paragraph">"You couldn't do that for other cuisines back then," Chin explained. "What that communicates is that Chinese restaurants really aimed to please, particularly in neighborhoods where there wasn't a large Asian population."</p>

	<p class="content-paragraph">This adaptability also meant that Chinese menus offered a far greater variety of combinations and choices. With such an extensive selection, providing transliterations for every dish would be far more challenging than simply offering them for the most iconic items. Studies suggest that, under the ethnic procession theory, Chinese restaurateurs had to continuously reinvent and adapt their cuisine to gain acceptance in the American market. Unlike Italian or Japanese food, which has seamlessly entered the realm of high-end dining.</p>

	<p class="content-paragraph">Japanese cuisine's rise in the United States followed a different path. It gained prominence in the mid-20th century through sushi, which first appeared in Los Angeles in the late 1960s. The dish soon became the "it" food at luncheons and dinner parties.</p>

	<p class="content-paragraph">Sushi's appeal was driven by its association with health, sophistication, and exclusivity, aligning with Japan's post-World War II emergence as a global economic power. By the 1980s, sushi bars became fashionable in cities like New York and Los Angeles, transforming the cuisine into a symbol of cosmopolitan dining.</p>

	<p class="content-paragraph">Therefore, Japanese cuisine largely retained its authenticity in presentation and terminology, with words like "sashimi" becoming familiar to American diners. This success reflects not only the cuisine's inherent elegance but also Japan's cultural influence on global perceptions of refinement and modernity.</p>

	<p class="content-paragraph">Korean food has also enjoyed a surge in popularity in the past two decades, partly due to the global rise of K-pop and Korean dramas. Dishes like "bibimbap (rice bowl)" and "bulgogi (bbq beef)" have become many people's new favorites, often retaining their transliterated names.</p>

	<!-- Insert the image here before "Chang recalls..." -->
	<div class="image-center">
		<img src="../src/TestExample/Images/Percentage of Transliteration.jpg" alt="Percentage of Transliteration Chart" />
		<p class="image-caption">This illustration shows the percentage of transliterated terms found in a random sample of 30 menus from Japanese, Chinese, and Korean restaurants in New York City. The median percentage for each cuisine is used to represent the central tendency, reducing the influence of extreme values that may occur due to menu variations. Japanese menus have the highest percentage of transliterated terms, followed by Korean menus, while Chinese menus have the least. </p>
	</div>

	<p class="content-paragraph">Chang recalls the rise in the number of Japanese restaurants reaching out for promotion, a sign of how competitive the market remains. "Japanese food is definitely more elevated here in New York City, especially Omakase. It has been a huge trend and is still going," she said.</p>

	<p class="content-paragraph">She acknowledges that different cuisines carry built-in expectations that are difficult to shift. The perception of different Asian cuisines in the West has long been shaped by an underlying hierarchy in how they are valued.</p>

	<p class="content-paragraph">"There are definitely certain standards or expectations when you think of a restaurant. Obviously, that varies for different people, but when I think of Japanese food, I'm going to think it's a little more elevated than Indian or Chinese food, in my opinion," she said.</p>

	<p class="content-paragraph">These perceptions, however, do not necessarily reflect the complexity or diversity of different culinary traditions. While some Asian cuisines have been marketed as high-end experiences, others remain associated with affordability or casual dining. The distinction between what is considered "elevated" and what remains "casual" is not just about the food itself but about branding, consumer expectations, and historical narratives that continue to influence the restaurant industry.</p>

	<p class="content-paragraph">In recent years, upscale Chinese restaurants have started challenging these narratives, but the shift is slow.</p>

	<p class="content-paragraph">"Food is a long process of cultural adaptation," Yong Zhao said. "There are two aspects of adaptation: familiarity and aspiration. For the culture itself to be aspirational, it's hard not to consider their national image and geopolitical relationships."</p>

	<p class="content-paragraph">While Zhao assumes this shift is rooted in deep geopolitical influences, Dr. John Phan, an associate professor of East Asian Languages and Cultures at Columbia specializing in historical phonology, emphasizes the power of distinctiveness, one rooted in uniqueness and brand marketing.</p>

	<p class="content-paragraph">When a dish's name goes the extra step to be translated, the goal is often to make it more understandable for the customer, to fit into the intelligibility of the patron. However, using the transliterated name can help highlight what makes the dish unique.</p>

	<p class="content-paragraph">"I don't mean in terms of a pure cultural sense, but I mean unique honestly, in terms of the market," Phan said. "Unique in terms of what is attractive about this particular version of this thing, rather than the translation, which might hide that."</p>

	<p class="content-paragraph">A clear example of this is the Vietnamese sandwich, bánh mì. "Bánh mì literally just means bread, kind of means sandwich as well. But if you market this thing as a sandwich, what are you communicating to the public? You're not communicating anything," he explained. "But when you say bánh mì, then people know, oh, this is a kind of Vietnamese sandwich that typically has X, Y, and Z."</p>

	<p class="content-paragraph">Once a term like bánh mì becomes widely recognized, it no longer requires translation to be understood. Similar to words like "chow mein" and "teriyaki," which Chin said are no longer just transliterations, have fully integrated into American English.</p>

	<p class="content-paragraph">"Language evolves," he said. "Once Americans learn it and adapt it, they become an English word. Transliteration is just a process in which phonetic words become integrated into the dominant language."</p>
<!-- Insert the image here before "All these words..." -->
	<div class="image-center">
		<img src="../src/TestExample/Images/WordEvolution.jpg" alt="Word Evolution Chart" />
		<p class="image-caption">How Words Evolve</p>
	</div>
	<p class="content-paragraph">All of these words were originally foreign words that entered the lexicon in this exact process. This linguistic phenomenon is not new but part of a historical pattern. Terms like "sushi" and "kebab" have long become entrenched in English through repeated use and market appeal.</p>

	<p class="content-paragraph">"Think about languages as a social network," Phan said. He described this as part of what historical linguists call multi-generational language change, where a word transitions from being niche to mainstream as it permeates various social networks and persists across generations.</p>

	<p class="content-paragraph">Upscale restaurants today embrace sleek, modern menus with elegant typography, high-quality paper in carefully selected colors, or digital QR codes highlighting the most visually appealing dishes. Each detail is carefully curated to enhance the dining experience and reflect contemporary tastes.</p>

	<p class="content-paragraph">Restaurant menus reveal more than just what's being served---they capture the values of their times and cultures.</p>
</div>

<footer class="site-footer">
	<div class="footer-container">
		<div class="footer-content">
			<h3 class="footer-heading">About This Project</h3>
			<p class="footer-text">This project explores how transliteration of Asian food terms reflects cultural identity and market dynamics in American dining.</p>
			<p class="footer-text">By Jennifer Gan</p>
		</div>
		<div class="footer-links">
			<p class="footer-text">This project is an adaptation of the of <a href="https://github.com/abcnews/scrollyteller)">Scrollyteller</a> by ABC News.</p>
		</div>
	</div>
</footer>