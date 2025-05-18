// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	// site: 'https://example.com',
	// integrations: [mdx(), sitemap()],
	site: 'https://sanbongazin.github.io/ichiya-blog',
	output: 'static',
	base: '/ichiya-blog/', // ここが重要！
});
