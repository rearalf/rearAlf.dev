import css from 'styled-jsx/css';

export const styled = css`
	.ContentHead {
		display: grid;
		align-items: center;
		grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
		gap: 16px;
	}

	.Date {
		display: flex;
		align-items: center;
	}

	.Date > :global(svg) {
		margin-right: .5rem;
	}
`;
