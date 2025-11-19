import { defineRecipe } from '@pandacss/dev';

export const buttonV0 = defineRecipe({
	className: 'button',
	description: 'The styles for the Button component',
	base: {
		display: 'flex'
	},
	variants: {
		colorTone: {
			'mono.100': { bg: '#262626ff', color: '#ffffffff' },
			'mono.200': { bg: '#f1f1f1ff', color: '#121212' },
			'mono.300': { bg: '#e9e9e9ff', color: '#121212' }
		},
		size: {
			sm: { padding: '4px 12px', fontSize: '14px' },
			lg: { padding: '8', fontSize: '40px' }
		},
		shape: {
			square: { borderRadius: '4px' },
			'round.6': { borderRadius: '6px' },
			'round.8': { borderRadius: '8px' },
			'round.10': { borderRadius: '10px' },
			'round.12': { borderRadius: '12px' },
			'round.14': { borderRadius: '14px' },
			'round.16': { borderRadius: '16px' },
			'round.18': { borderRadius: '18px' },
			circle: { borderRadius: 'full' }
		},
		outline: {
			'hard': { outline: '1px solid rgba(50, 50, 50, 0.5)' },
			'medium': { outline: '1px solid rgba(50, 50, 50, 0.4)' },
			'soft': { outline: '1px solid rgba(50, 50, 50, 0.3)' },
			'super-soft': { outline: '1px solid rgba(0, 0, 0, 0.1)' },
		},
    shadow: {
      'blur': { boxShadow: 'rgba(30, 30, 30, 0.2) -1px 0px 4px -2px, rgba(30, 30, 30, 0.2) 1px 0px 4px -2px' },
      'edge': { boxShadow: 'rgba(30, 30, 30, 0.4) 0px 1px 3px -1px' },
      'float': { boxShadow: 'rgba(30, 30, 30, 0.2) 0px 4px 5px -2px' }
    }
	},
	defaultVariants: {
		colorTone: 'mono.300',
		size: 'sm',
		shape: 'round.8',
		outline: 'soft',
    shadow: 'float'
	}
});
