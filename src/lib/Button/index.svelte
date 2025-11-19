<script lang="ts">
  import { buttonV0 } from 'styled-system/recipes'

  interface Props {
    /** Is this the principal call to action on the page? */
    primary?: boolean;
    /** What background color to use */
    backgroundColor?: string;
    /** How large should the button be? */
    size?: 'small' | 'medium' | 'large';
    /** Button contents */
    label: string;
    /** The onclick event handler */
    onclick?: () => void;
  }

  const { primary = false, backgroundColor, size = 'medium', label, ...props }: Props = $props();
</script>

<button
  type="button"
  class={buttonV0()}
>
  {label}
</button>
