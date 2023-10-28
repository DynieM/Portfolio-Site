/** @format */

import { useState, useEffect } from "react";
import "../styles/styles.css"; 

const TypingEffect = () => {
	const toRotate = [ "Student.", "  Creative.", " Developer."];
	const period = 20; // Adjust this value for typing speed (increased to slow down)

	const [text, setText] = useState("");
	const [loopNum, setLoopNum] = useState(0);
	const [isDeleting, setIsDeleting] = useState(false);
	const [typingSpeed, setTypingSpeed] = useState(250); // Adjust typing speed

	useEffect(() => {
		const updateText = () => {
			const i = loopNum % toRotate.length;
			const fullTxt = toRotate[i];

			if (isDeleting) {
				setText(fullTxt.substring(0, text.length - 1));
			} else {
				setText(fullTxt.substring(0, text.length + 1));
			}

			if (!isDeleting && text === fullTxt) {
				setIsDeleting(true);
				setTypingSpeed(period);
			} else if (isDeleting && text === "") {
				setIsDeleting(false);
				setLoopNum(loopNum + 1);
				setTypingSpeed(250); // Reset typing speed for next text
			}
		};

		const timeout = setTimeout(updateText, typingSpeed);

		return () => {
			clearTimeout(timeout);
		};
	}, [text, loopNum, isDeleting, typingSpeed]);

	return (
		<div className="typewriter-container">
			<h1 className="typewriter-text">{text}</h1>
		</div>
	);
};

export default TypingEffect;
