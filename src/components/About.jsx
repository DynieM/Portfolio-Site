/** @format */


// import BlueBlob from "../assets/blue-about-blob.png"
// import GreenBlob from "../assets/green-about-blob.png"

import assets from "./assets.jsx";


const About = () => {
    return (
			<div>
				<section
					id="about"
					className=" "
					style={{
						fontFamily: "Monospace",
						position: "relative",
					}}>
					<div style={{ paddingTop: "96px" }}>
						<div>
							<hr
								style={{ borderBottom: "2px solid black"}}
							/>
							<h1 className="ml-10 my-5 text-3xl md:text-4xl lg:text-4xl" style={{}}>
								<strong> About Me </strong>
							</h1>
							<hr style={{ borderBottom: "2px solid black" }} />
						</div>
						<div className="ml-10 text-xl md:text-xl lg:text-2xl" style={{}}>
							<figure>
								<blockquote>
									<br></br>I am an undergraduate student at the University of
									Central
									<br></br> Florida, pursuing a degree in Digital Media with a
									<br></br>specialization in Web Design and a minor in <br></br>
									Computer Science. My interests lie in the insectionality
									<br></br> of design + code within Front-End Development.
									Exploring <br></br>new concepts and ideas is something that
									brings me joy <br></br>and fuels my curiosity. I am a DEI
									advocate and <br></br> believer of tech for social good.
								</blockquote>
							</figure>

							<p
								style={{
									position: "relative",
									right: "2px",
									bottom: "3px",
								}}
							>
								<br></br>
								<strong>Nice to Meet You!</strong>
								<br></br>
							</p>
						</div>
					</div>

					<img
						src={assets.GreenBlob}
						alt="Green Blob"
						style={{
							position: "absolute",
							width: "28%",
							maxWidth: "900px",
							height: "auto",
							zIndex: "-1",
							top: "-100px",
						}}
					/>
					<img
						src={assets.BlueBlob}
						alt="Blue Blob"
						style={{
							position: "absolute",
							width: "30%",
							maxWidth: "900px",
							height: "auto",
							zIndex: "-1",
							right: "190px",
							top: "160px",
						}}
					/>
				</section>
			</div>
		);
};

export default About;