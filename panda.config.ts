import { defineConfig } from '@pandacss/dev';
import { buttonRecipe } from './src/lib/Button/Button.recipe';

const isStorybook = process.env.npm_lifecycle_event === 'storybook';

export default defineConfig({
	// Whether to use css reset
	preflight: isStorybook
		? {
        // Scope to avoid resetting CSS of a toolbar of preview
				scope: '.sb-show-main'
			}
		: true,

	// Where to look for your css declarations
	include: ['./src/**/*.{js,svelte}', './pages/**/*.{js,svelte}'],

	// Files to exclude
	exclude: [],

	// Useful for theme customization
	theme: {
		extend: {
			recipes: {
				button: buttonRecipe
			}
		}
	},

	// The output directory for your css system
	outdir: 'styled-system'
});
