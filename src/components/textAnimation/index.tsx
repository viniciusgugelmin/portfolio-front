import React, { useEffect, useState } from "react";
// eslint-disable-next-line import/no-unresolved
import { useInterval } from "react-use";
import styled, { keyframes } from "styled-components";

export function TextAnimation() {
	const reactArray = "React".split("");
	const swiftArray = "swift".split("");
	const [items, setItems] = useState(reactArray);
	const [count, setCount] = useState(0);
	const [play, setPlay] = useState(false);

	useInterval(
		() => {
			setItems(reactArray);
			setCount(count + 1);

			// eslint-disable-next-line eqeqeq
			if (count == 1) {
				setCount(0);
				setItems(swiftArray);
			}
		},
		play ? 6000 : null,
	);

	useEffect(() => {
		const timer = setTimeout(() => {
			setItems(swiftArray);
			setPlay(true);
		}, 4000);

		return () => clearTimeout(timer);
	}, []);

	return (
		// eslint-disable-next-line @typescript-eslint/no-use-before-define
		<Wrapper>
			{reactArray.map((item, index) => (
				// eslint-disable-next-line react/no-array-index-key
				<span key={index}>{item}</span>
			))}
		</Wrapper>
	);
}

const animation = keyframes`
    50% {opacity : 1; transform: scale(1) translateY(0px) skewY(0deg) skewX(0deg) rotateZ(0deg); filter: blur(0px);}
    60% {opacity : 0; transform: scale(2) translateX(100px) skewY(10deg) skewX(10deg) rotateZ(30deg); filter: blur(10px);}
    70% {opacity : 0; transform: scale(2) translateY(-100px) skewY(10deg) skewX(10deg) rotateZ(30deg); filter: blur(10px);}
    80% {opacity : 1; transform: scale(1) translateY(0px) skewY(0deg) skewX(0deg) rotateZ(0deg); filter: blur(0px);}
`;

const Wrapper = styled.span`
	display: inline-block;
    flex-direction: row;
    font weight: bold;

	span {
		animation-name: ${animation};
		animation-duration: 6s;
		animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
		animation-fill-mode: forwards;
		animation-iteration-count: infinite;
	}

	span:nth-child(1) {
		animation-delay: 0.1s;
	}
	span:nth-child(2) {
		animation-delay: 0.2s;
	}
	span:nth-child(3) {
		animation-delay: 0.3s;
	}
	span:nth-child(4) {
		animation-delay: 0.4s;
	}
	span:nth-child(5) {
		animation-delay: 0.5s;
	}
`;
