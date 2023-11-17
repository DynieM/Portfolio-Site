/** @format */

// import RedBlob from "../assets/red-intro-blob.png";
// import YellowBlob from "../assets/yellow-card-blob.png";
// import BlueBlob from "../assets/blue-blob3.png";
// import RedBlob2 from "../assets/red-blob.png";

import assets from "./assets.jsx";


const Projects = () => {
    return (
			<div style={{ paddingTop: "100px" }}>
				<hr style={{ borderBottom: "2px solid black" }} />
				<h1
					id="projects"
					className=" my-5 text-3xl md:text-4xl lg:text-4xl "
					style={{ fontFamily: "Monospace" }}
				>
					<strong className="ml-10"> Projects </strong>
				</h1>
				<hr style={{ borderBottom: "2px solid black" }} />
				<div className="flex flex-col md:flex-row w-full justify-center items-center p-4 ">
					<a className="block w-full max-w-sm p-6 m-4 border-2 border-black rounded-lg rounded-lg shadow hover:bg-gray-100 bg-white dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 ">
						<h5 className="mb-2 text-2xl font-bold tracking-tight  text-gray-900 dark:text-white">
							Campus Companion
						</h5>
						<p className="font-normal text-gray-700 dark:text-gray-400">
							Coded a mobile application for campus safety using React Native,
							Express, Node.js, and MongoDB as a database.
						</p>
					</a>

					<a className="block w-full max-w-sm p-6 m-4 border-2 border-black rounded-lg rounded-lg shadow bg-white hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 ">
						<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
							RoadTrip
						</h5>
						<p className="font-normal text-gray-700 dark:text-gray-400">
							Worked as a project leader and front-end developer on a website
							that acts as a digital travel guide by keeping track of each state
							the user visits and providing road laws and enticing landmarks
							along the way. Used HTML, CSS, and JS with Firebase JS for
							backend. Placed in top three for a competition!
						</p>
					</a>

					<a className="block w-full max-w-sm p-6 m-4 border-2 border-black rounded-lg rounded-lg shadow bg-white hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 ">
						<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
							Portfolio
						</h5>
						<p className="font-normal text-gray-700 dark:text-gray-400">
							You&#39;re on it right now! Portfolio site developed using
							React.js and Tailwind. Designed and prototyped on Figma.
						</p>
					</a>
					<a className="block w-full max-w-sm p-6 m-4 border-2 border-black rounded-lg rounded-lg shadow bg-white hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 ">
						<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
							Seeking Citizenship
						</h5>
						<p className="font-normal text-gray-700 dark:text-gray-400">
							Developed a web-based application using HTML, CSS, JS, and
							Bootstrap as the framework that simplifies the citizenship
							process.
						</p>
					</a>
					<img
						src={assets.RedBlob}
						alt="Red Blob"
						style={{
							position: "absolute",
							width: "28%",
							maxWidth: "900px",
							height: "auto",
							zIndex: "-1",
							left: "100px",
							bottom: "-1000px",
						}}
					/>
					<img
						src={assets.YellowBlob}
						alt="Yellow Blob"
						style={{
							position: "absolute",
							width: "28%",
							maxWidth: "900px",
							height: "auto",
							zIndex: "-1",
							right: "200px",
							top: "1000px",
						}}
					/>
					<img
						src={assets.BlueBlob}
						alt="Blue Blob"
						style={{
							position: "absolute",
							width: "28%",
							maxWidth: "900px",
							height: "auto",
							zIndex: "-1",
							left: "200px",
							top: "2100px",
						}}
					/>
					<img
						src={assets.RedBlob2}
						alt="Red Blob"
						style={{
							position: "absolute",
							width: "28%",
							maxWidth: "900px",
							height: "auto",
							zIndex: "-1",
							right: "100px",
							top: "2400px",
						}}
					/>
				</div>
			</div>
		);
};

export default Projects;
