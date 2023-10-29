/** @format */

import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import GreenBlob from "../assets/green-intro-blob.png";

const Experience = () => {
    return (
			<div>
				<section>
					<h1
						id="experience"
						className="my-5 text-3xl md:text-4xl lg:text-4xl "
						style={{ fontFamily: "Monospace", paddingTop: "96px" }}
					>
						<hr className="mb-5" style={{ borderBottom: "2px solid black" }} />
						<strong className="ml-10 my-5 "> Experience </strong>
					</h1>
					<hr style={{ borderBottom: "2px solid black" }} />

					<VerticalTimeline>
						<VerticalTimelineElement
							className="vertical-timeline-element--work "
							style={{ fontFamily: "monospace" }}
							iconStyle={{
								background: "#CD3131",
							}}
						>
							<div style={{ fontWeight: "bold", fontSize: "16px" }}>
								May 2023 - August 2023
							</div>

							<div
								style={{
									display: "flex",
									fontWeight: "bold",
									fontSize: "16px",
								}}
							>
								<div>
									<h3 className="vertical-timeline-element-title">
										Davita - Redwoods Leadership Intern,
									</h3>
								</div>
								<div style={{ marginLeft: "5px" }}>
									<em>
										{" "}
										<h4 className="vertical-timeline-element-subtitle">
											Remote
										</h4>{" "}
									</em>
								</div>
							</div>

							<p>
								● Performed data analysis to assess user behavior and engagement
								trends coming in from online resources. <br></br>● Designed an
								internal content curation strategy amongst cross-functional
								teams for a learning application. <br></br>● Collaborated with
								Team Resource Groups revolving creating digital communities and
								supporting
							</p>
						</VerticalTimelineElement>
						<VerticalTimelineElement
							className="vertical-timeline-element--work "
							style={{ fontFamily: "monospace" }}
							iconStyle={{
								background: "#214FF0",
							}}
						>
							<div style={{ fontWeight: "bold", fontSize: "16px" }}>
								August 2023 - Present
							</div>

							<div
								style={{
									display: "flex",
									fontWeight: "bold",
									fontSize: "16px",
								}}
							>
								<div>
									<h3 className="vertical-timeline-element-title">
										Techrangers - Web Developer,
									</h3>
								</div>
								<div style={{ marginLeft: "5px" }}>
									<em>
										{" "}
										<h4 className="vertical-timeline-element-subtitle ">
											Hybrid
										</h4>{" "}
									</em>
								</div>
							</div>

							<p>
								● Developed widgets for Materia, a web application that gamifies
								learning for students. <br></br>● Programmed accessible course
								development features for teachers and staff to optimize user
								experiences.
							</p>
						</VerticalTimelineElement>
						<VerticalTimelineElement
							className="vertical-timeline-element--work "
							style={{ fontFamily: "monospace" }}
							iconStyle={{
								background: "#5B9248",
							}}
						>
							<div style={{ fontWeight: "bold", fontSize: "16px" }}>
								August 2023 - Present
							</div>

							<div
								style={{
									display: "flex",
									fontWeight: "bold",
									fontSize: "16px",
								}}
							>
								<div>
									<h3 className="vertical-timeline-element-title">
										NVIDIA - Ignite Intern,{" "}
									</h3>
								</div>
								<div style={{ marginLeft: "5px" }}>
									<em>
										{" "}
										<h4 className="vertical-timeline-element-subtitle">
											Remote
										</h4>{" "}
									</em>
								</div>
							</div>

							<p>
								● Created a Tableau Dashboard for Omniverse Launcher that
								measured end user input to maximize engagement and visibility.{" "}
								<br></br> ● Developed an Adobe Analytics Dashboard based on
								Omniverse webpage user traffic data. <br></br> ● Corresponded
								with stakeholders on design expectations and KPI requirements.
							</p>
						</VerticalTimelineElement>
					</VerticalTimeline>
					<img
						src={GreenBlob}
						alt="Green Blob"
						style={{
							position: "absolute",
							width: "28%",
							maxWidth: "900px",
							height: "auto",
							zIndex: "-1",
							bottom: "-1300px",
							right: "90px",
						}}
					/>
				</section>
			</div>
		);
};

export default Experience;
