import css from 'styled-jsx/css';
import { colors } from '../../styles/theme';

export const styled = css`
	footer {
		width: 100%;
		background-color: var(--${colors.Light});
		box-shadow: 0 -4px 15px 0 var(--${colors.BoxShadow});
	}

	.content {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-top: 2vh;
		padding-bottom: 2vh;
	}

	.Proyect {
		display: flex;
		align-items: center;
	}

	.Proyect > :global(svg) {
		margin-right: .5rem;
	}
`;
