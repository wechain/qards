import styled from "styled-components";
import { Box, Flex } from "grid-styled";
import theme from "../../theme";
import tinycolor2 from "tinycolor2";


export const Wrapper = styled(Flex)`
    
`;

export const Title = styled.h1`
	margin-top: 0;
	font-size: 2.1rem;
	line-height: 2.4rem;
`;

export const Excerpt = styled.p`
	font-weight: 300;
	font-size: 1.4rem;
	line-height: 2.2rem;
	color: ${theme.color(["lightText"])};
`;

export const Hero = styled.div`
	margin: 20px 0;

	img {
		width: 100%;
		border-radius: 8px;
	}
`;

export const Date = styled.span`
	font-size: 1.1rem;
	font-weight: 200;
	color: ${theme.color(["lightText"])};
	text-transform: uppercase;
	margin: 0px;
`;

export const Article = styled.article`
	font-size: 1.4rem;
	line-height: 2.2rem;
	font-weight: 300;

	b, strong {
		font-weight: 400;
	}

	ul {
		margin-left: 1.5rem;
	}

	@media screen and (min-width: ${theme.main.breakpoints.xsmall}em) {
		div.paragraphs{
			text-align: justify;
			text-justify: inter-word;
		}
	}
	
	blockquote {
		font-style: italic;
		color: ${theme.color(['lightText'])};
		margin: 40px 0;
		padding-left: 30px;
		border-left: 4px solid ${theme.color(['borders'])};
	}
	
	.paragraphs {
		pre, code {
			font-size: 1rem;
			padding: 0 4px;
			border-radius: 4px;
			color: ${tinycolor2(theme.color(["intents", "danger", "text"])).darken(20).toString()};
			background: ${tinycolor2(theme.color(["intents", "danger", "background"])).lighten(10).toString()};
		}
		
		p {
			margin-bottom: 20px;
		}
		
		strong, b {
			font-weight: 400;
		}
		
		ul {
			li {
				padding: 0;
				font-size: .9em;
				color: ${tinycolor2(theme.color(["lightText"])).darken(20).toString()};
			}
		}
		
		a {
			color: ${theme.color(["text"])};
			font-weight: 400;
			border-bottom: 1px solid ${tinycolor2(theme.color(["accent", "background"])).lighten(38).toString()};
			transition: all 100ms cubic-bezier(0.4, 0, 0.2, 1);
    		box-shadow: inset 0 -2px 0px 0px ${tinycolor2(theme.color(["accent", "background"])).lighten(38).toString()};
		
			&:hover {
				text-decoration: none;
				background: ${tinycolor2(theme.color(["accent", "background"])).lighten(38).toString()};
			}
		}
	}
`;

export const SidebarWrapper = styled(Box)`
	.sidebar {
		position: -webkit-sticky;
		position: sticky;
		top: 60px;
	}
`;