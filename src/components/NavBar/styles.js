import css from 'styled-jsx/css';
import { colors } from '../../styles/theme';

export const styled = css`
	header {
		background-color: var(--${colors.Light});
		padding-top: 20px;
		padding-bottom: 20px;
		box-shadow: 0 4px 4px 0 var(--${colors.BoxShadow});
	}

	.navHead {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.Logo {
		width: 100%;
	}

	.headRight {
		display: flex;
		align-items: center;
	}

	.headRight > :global(a) {
		margin: 0 .5rem;
	}

	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 15px 0 0;
		font-size: 15px;
		vertical-align: baseline;
	}

	.navLinkLeft {
		vertical-align: baseline;
	}

	.navLinkRight > :global(a),
	.navLinkLeft > :global(a) {
		display: inline-block;
		padding: 5px 10px;
		opacity: 1;
	}

	.navLinkRight > :global(a) {
		border: 1px solid var(--${colors.Words});
		border-radius: 0.6rem;
		opacity: .7;
		line-height: 1em;
	}

	button {
		padding: 0px;
		appearance: none;
		-webkit-box-align: center;
		align-items: center;
		background: transparent;
		border-radius: 5px;
		border: 0px;
		cursor: pointer;
		display: inline-flex;
		height: 40px;
		-webkit-box-pack: center;
		justify-content: center;
		margin-right: -11px;
		opacity: 0.75;
		overflow: hidden;
		position: relative;
		transform: scale(0.75);
		transition: opacity 0.3s ease 0s;
		vertical-align: middle;
		width: 40px;
	}

	.themeLight,
	.themeDark {
		background: rgb(255, 223, 55);
		border-radius: 50%;
		height: 24px;
		width: 24px;
		position: relative;
		transition: all 0.45s ease 0s;
	}
	.themeDark {
		overflow: hidden;
		transform: scale(1);
	}
	.themeLight {
		overflow: visible;
		transform: scale(0.55);
	}

	.themeLight::before,
	.themeDark::before {
		border-radius: 50%;
		border: 2px solid rgb(255, 223, 55);
		content: "";
		height: 24px;
		position: absolute;
		right: -9px;
		top: -9px;
		transition: transform 0.45s ease 0s;
		width: 24px;
	}
	.themeDark::before {
		opacity: 1;
		transform: translate(0px, 0px);
	}
	.themeLight::before {
		opacity: 0;
		transform: translate(14px, -14px);
	}

	.themeLight::after,
	.themeDark::after {
		border-radius: 50%;
		box-shadow: rgb(255, 223, 55) 0px -23px 0px, rgb(255, 223, 55) 0px 23px 0px,
			rgb(255, 223, 55) 23px 0px 0px, rgb(255, 223, 55) -23px 0px 0px,
			rgb(255, 223, 55) 15px 15px 0px, rgb(255, 223, 55) -15px 15px 0px,
			rgb(255, 223, 55) 15px -15px 0px, rgb(255, 223, 55) -15px -15px 0px;
		content: "";
		height: 8px;
		left: 50%;
		margin: -4px 0px 0px -4px;
		position: absolute;
		top: 50%;
		width: 8px;
		transition: all 0.35s ease 0s;
	}
	.themeDark::after {
		transform: scale(0);
	}
	.themeLight::after {
		transform: scale(1);
	}

	.themeLight .cosasRara {
		opacity: 0;
	}
	.themeDark .cosasRara {
		background: var(--${colors.Light});
		border-radius: 50%;
		border: 0px;
		height: 24px;
		opacity: 1;
		position: absolute;
		right: 0px;
		top: 0px;
		transform: translate(8px, -10px);
		transition: background 0.5s ease 0s, transform 0.45s ease 0s;
		width: 24px;
	}
`;
