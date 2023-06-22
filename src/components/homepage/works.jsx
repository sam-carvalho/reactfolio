import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work Experience"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./realtor.png"
								alt="realtor.com"
								className="work-image"
							/>
							<div className="work-title">realtor.com</div>
							<div className="work-subtitle">
								Senior Software Engineer
							</div>
							<div className="work-duration">
								March 2021 - June 2023
							</div>
						</div>

						<div className="work">
							<img
								src="./rba.png"
								alt="rba"
								className="work-image"
							/>
							<div className="work-title">Ritchie Bros.</div>
							<div className="work-subtitle">
								QA Automation Developer
							</div>
							<div className="work-duration">
								October 2016 - February 2021
							</div>
						</div>

						<div className="work">
							<img
								src="./dell.png"
								alt="dell"
								className="work-image"
							/>
							<div className="work-title">Dell Technologies</div>
							<div className="work-subtitle">
								Software Engineer In Test Intern
							</div>
							<div className="work-duration">
								June 2015 - June 2016
							</div>
						</div>

						<div className="work">
							<img
								src="./cnpq.png"
								alt="cnpq"
								className="work-image"
							/>
							<div className="work-title">CNPq</div>
							<div className="work-subtitle">
								Software Developer Intern
							</div>
							<div className="work-duration">
								May 2014 - May 2015
							</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
