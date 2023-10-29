/** @format */


import Dee from "../assets/dee.png";
import YellowBlob from "../assets/yellow-name-blob.png";
import LinkedIn from "../assets/linkedIn.png";
import Gmail from "../assets/gmail.png";
import Github from "../assets/github.png"; 
import Typing from './Typing.jsx';


const Intro = () => {
	return (
		<div
			className="flex flex-col md:flex-row justify-center items-center "
			style={{}}
		>
			<div className="w-40 md:w-72">
				<img
					src={Dee}
					alt="Dee's Image"
					style={{
						position: "relative",
						top: "50px",
						paddingTop: "0px",
						left: "-80px",
					}}
					className="mx-auto my-auto"
				/>
			</div>
			{
				<h1
					className="text-3xl md:text-4xl lg:text-5xl md:px-10"
					style={{
						position: "relative",
						top: "50px",
						fontFamily: "monospace",
					}}
				>
					Hi, I&#39;m <strong> Dynie. </strong> <br></br>
					<span
						style={{
							display: "flex",
						}}
					>
						I am a&nbsp;
						<strong>
							{" "}
							<Typing />
						</strong>
					</span>
				</h1>
			}
			<img
				src={YellowBlob}
				alt="Yellow Blob"
				style={{
					position: "absolute",
					width: "28%",
					maxWidth: "900px",
					height: "auto",
					zIndex: "-1",
					top: "130px",
					right: "60px",
				}}
			/>

			<div className="linkedin">
				<a
					href="https://www.linkedin.com/in/dyniem/"
					target="_blank"
					rel="noreferrer"
				>
					<img src={LinkedIn} alt="LinkedIn logo" />
				</a>
			</div>

			<div className="gmail">
				<a href="mailto:dynieme.fms@gmail.com" target="_blank" rel="noreferrer">
					<img src={Gmail} alt="Gmail logo" />
				</a>
			</div>

			<div className="github">
				<a href="https://github.com/DynieM" target="_blank" rel="noreferrer">
					<img src={Github} alt="Github logo" />
				</a>
			</div>
		</div>
	);
};

export default Intro;
