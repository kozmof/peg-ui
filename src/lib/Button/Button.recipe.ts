import { defineRecipe } from '@pandacss/dev'

export const buttonRecipe = defineRecipe({
  className: 'button',
  description: 'The styles for the Button component',
  base: {
    display: 'flex'
  },
  variants: {
    visual: {
      test: { bg: 'red.200', color: 'white' },
    },
    size: {
      sm: { padding: '4', fontSize: '12px' },
      lg: { padding: '8', fontSize: '40px' }
    },
    shape: {
      square: { borderRadius: '0' },
      circle: { borderRadius: 'full' }
    }
  },
  defaultVariants: {
    visual: 'test',
    size: 'sm',
    shape: 'square'
  }
})
