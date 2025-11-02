<script lang="ts">
  import './button.css';
  import { css } from 'styled-system/css';

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
  class={css({backgroundColor: 'yellow'})}
>
  {label}
</button>
