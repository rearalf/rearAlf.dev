import css from 'styled-jsx/css';
import { colors } from '../../styles/theme';

export const styled = css`
	.postCard {
		border-radius: 5px;
		background-color: var(--${colors.Light});
		box-shadow: 4px 4px 4px 0 var(--${colors.BoxShadow});
	}

	.postCardImage {
		margin-bottom: 2vh;
		width: auto;
		height: 200px;
		background: var(--${colors.Light}) no-repeat 50%;
		background-size: cover;
		border-radius: 5px 5px 0 0;
		position: relative;
	}

	time {
		position: absolute;
		top: 1rem;
		right: 0;
		background-color: hsl(0, 0%, 0%, .5);
		color: #fff;
		padding: 5px 5px 5px 10px;
		border-top-left-radius: 15px;
		border-bottom-left-radius: 15px;
	}

	.tags {
		display: flex;
		padding: 0 2vw;
		margin-bottom: 2vh;
	}

	.tag {
		font-size: 14px;
		padding: 10px;
		border-radius: 15px;
		background-color: var(--${colors.LightHard});
		box-shadow: 4px 4px 4px 0 var(--${colors.BoxShadow});
		margin-right: 1vw;
	}

	h1 {
		font-size: 1.2em;
		padding: 0 2vw;
		margin-bottom: 2vh;
	}

	.textPostCard {
		font-size: 1em;
		padding: 0 2vw;
		margin-bottom: 2vh;
	}
`;
