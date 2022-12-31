import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Cards from "../components/Cards";
import {useRef} from "react";
import * as FaIcons from "react-icons/fa";

import "../css/Homepage.css";

export default function Homepage() {
	const homeRef = useRef();
	const instructionsRef = useRef();
	const pricingRef = useRef();

	return (
		<main>
			<Header
				refProp={homeRef}
				refProp2={instructionsRef}
				refProp3={pricingRef}
			/>
			<section className="homepage-section-container">
				<div className="title-wrapper">
					<div className="title-background"></div>
					<div className="title-container">
						<div className="title-block" ref={homeRef}>
							<h1 className="title" align="center">
								Automatically{" "}
								<span className="electricblue">
									rank and compare keywords
								</span>
								, compare by{" "}
								<span className="electricblue">
									topical similarity
								</span>{" "}
								and see{" "}
								<span className="electricblue">
									connections
								</span>
								.
							</h1>
							<p className="title-secondary" align="center">
								We use live Google SERP data to create topical
								connection maps so you know what keywords to
								use, pages to create, and how to interlink them.
								No more guesswork or hours of keyword research.
							</p>
							<div>
								<button
									onClick={() => {
										window.location.href =
											"https://app.optiwing.com/auth/register";
									}}
									className="get-started-button"
								>
									<span className="start-button-front">
										Get Started
									</span>
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="the-why-wrapper">
					<div className="the-why-container">
						<div className="the-why-title">
							<h1 className="the-why-h1">
								Automate keyword research, simply and easily.
							</h1>
						</div>
						<div className="the-why-info">
							<p className="the-why-info-p">
								Manual keyword research is time-consuming,
								tedious, inaccurate and difficult to automate.
							</p>
							<p className="the-why-info-p">
								Get it wrong and you can get into all sorts of
								trouble - keyword cannibalisation, lack of
								topical relevancy and missed search intent.
							</p>
							<p className="the-why-info-p">
								Here at Optiwing we solve these problems, whilst
								simultaneously helping you to:
							</p>
							<ul>
								<li>
									Automate the keyword research process,
									saving hours of time and allowing you to
									even delegate to untrained SEOs
								</li>
								<li>
									Identify all the topically related keywords
									that you can target with a single page, and
									which keywords need their own page
								</li>
								<li>
									Generate insights on how you can cover a
									topic in complete detail to achieve higher
									rankings and dominate the web.
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="instructions-wrapper" ref={instructionsRef}>
					<div className="inst-background-div"></div>
					<div className="instructions-container">
						<div className="description">
							<h1>How does keyword mapping work?</h1>
							<p>
								Optiwing uses Google SERP data to identify URLs
								that are ranking for similar keywords. The
								process works as follows.
							</p>
						</div>
						<div className="instructions">
							<div className="instruction-card" id="step-1">
								<div className="instruction-title-container">
									<div className="instruction-card-title">
										<h1>1</h1>
									</div>
									<div className="instruction-card-title-text">
										<h3>Upload a File</h3>
									</div>
								</div>
								<p className="instruction-card-p">
									Upload a CSV file of keywords from your
									favorite keyword research tool such as
									Ahrefs and SEMRush. Alternatively, upload a
									custom file.
								</p>
							</div>
							<div className="instruction-card" id="step-2">
								<div className="instruction-title-container">
									<div className="instruction-card-title">
										<h1>2</h1>
									</div>
									<div className="instruction-card-title-text">
										<h3>Optiwing Runs</h3>
									</div>
								</div>
								<p className="instruction-card-p">
									Optiwing will search for each keyword on
									Google, analyses the first page of results,
									and map keywords together that have 3 or
									more of the same pages in common.
								</p>
							</div>
							<div className="instruction-card" id="step-3">
								<div className="instruction-title-container">
									<div className="instruction-card-title">
										<h1>3</h1>
									</div>
									<div className="instruction-card-title-text">
										<h3>Results in Minutes</h3>
									</div>
								</div>
								<p className="instruction-card-p">
									Within a few minutes you'll get live results
									in the browser with keywords mapped in
									clusters based on topical connections,
									alternatively this will be available to
									download as an Excel file. No guess work
									required, just raw keyword insights from
									real-time Google data.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="info-wrapper">
					<div className="info-container">
						<div align="center" className="info-title">
							<h1>What separates Optiwing?</h1>
						</div>
						<div className="info-cards-grid">
							<div className="info-card" id="card1">
								<FaIcons.FaLightbulb
									style={{margin: "20px", fontSize: "28px"}}
								/>
								<div className="info-card-title">
									<h1>Keyword Mapping</h1>
								</div>
								<p className="info-card-p">
									100% accurate keyword mapping, generate
									lightning fast insight on which keywords you
									can target with a single page.
								</p>
							</div>
							<div className="info-card" id="card2">
								<FaIcons.FaGlobeAmericas
									style={{margin: "20px", fontSize: "28px"}}
								/>
								<div className="info-card-title">
									<h1>Localized Results</h1>
								</div>
								<p className="info-card-p">
									Run your analysis for any country, language
									or device (desktop or mobile), to cluster
									topics with precision.
								</p>
							</div>
							<div className="info-card" id="card3">
								<FaIcons.FaRecycle
									style={{margin: "20px", fontSize: "28px"}}
								/>
								<div className="info-card-title">
									<h1>Monthly Credit Rollover</h1>
								</div>
								<p className="info-card-p">
									No more wasting credits each month, credits
									roll over each month so you don't have to
									worry about breaks.
								</p>
							</div>
							<div className="info-card" id="card4">
								<FaIcons.FaSun
									style={{margin: "20px", fontSize: "28px"}}
								/>
								<div className="info-card-title">
									<h1>Fast and beautiful results</h1>
								</div>
								<p className="info-card-p">
									Get your keyword grouping output in the
									browser within minutes. Results generated in
									real time, with the option to download
									results as a csv file.
								</p>
							</div>
							<div className="info-card" id="card5">
								<FaIcons.FaThumbsUp
									style={{margin: "20px", fontSize: "28px"}}
								/>
								<div className="info-card-title">
									<h1>Credits Never Expire</h1>
								</div>
								<p className="info-card-p">
									Whatever you receive from your plan is yours
									to use and will never expire, no need to
									worry about unused credits.
								</p>
							</div>
							<div className="info-card" id="card6">
								<FaIcons.FaFileAlt
									style={{margin: "20px", fontSize: "28px"}}
								/>
								<div className="info-card-title">
									<h1>Multiple File Formats</h1>
								</div>
								<p className="info-card-p">
									We support keyword export files from Ahrefs
									and SemRush as well as a custom file upload.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="pricing-wrapper" ref={pricingRef}>
					<div className="pricing-background-div"></div>
					<div className="pricing-container">
						<div className="pricing-title">
							<h1>Pricing Options</h1>
						</div>
						<div className="pricing-desc">
							<p>
								We offer Multiple monthly pricing options.
								Whether you need to complete a one-off project
								or you need to analyze thousands of keywords,
								we've got a solution for you.
							</p>
							<p>Upgrade at any time!</p>
						</div>
						<div className="pricing-card-grid">
							<div className="pricing-card" id="pcard1">
								<div className="pricing-card-title">
									<h3>Basic</h3>
									<hr></hr>
								</div>
								<div className="pricing-card-price">
									<h1>$9</h1>
								</div>
								<div className="pricing-styled-list">
									<ul>
										<li className="pricing-styled-list-item">
											<FaIcons.FaCheck
												style={{margin: "10px"}}
											/>
											<span>1,000 Keywords</span>
										</li>
										<li className="pricing-styled-list-item">
											<FaIcons.FaCheck
												style={{margin: "10px"}}
											/>
											<span>
												$9.00 per 1,000 keywords
											</span>
										</li>
										<li className="pricing-styled-list-item">
											<FaIcons.FaCheck
												style={{margin: "10px"}}
											/>
											<span>Credits rollover</span>
										</li>
										<li className="pricing-styled-list-item">
											<FaIcons.FaCheck
												style={{margin: "10px"}}
											/>
											<span>Credits never expire</span>
										</li>
									</ul>
								</div>
								<div className="pricing-redirect-button">
									<button
										onClick={() => {
											window.location.href =
												"https://app.optiwing.com/auth/register";
										}}
										className="redirect-button"
									>
										<span>Try it for free</span>
										<span>
											<FaIcons.FaCaretRight />
										</span>
									</button>
								</div>
								<div className="pricing-caveat-text">
									<p>No Credit Card Required</p>
								</div>
							</div>
							<div className="pricing-card" id="pcard2">
								<div className="pricing-card-title">
									<h3>Personal</h3>
									<hr></hr>
								</div>
								<div className="pricing-card-price">
									<h1>$19</h1>
								</div>
								<div className="pricing-styled-list">
									<ul>
										<li className="pricing-styled-list-item">
											<FaIcons.FaCheck
												style={{margin: "10px"}}
											/>
											<span>2,500 Keywords</span>
										</li>
										<li className="pricing-styled-list-item">
											<FaIcons.FaCheck
												style={{margin: "10px"}}
											/>
											<span>
												$7.60 per 1,000 keywords
											</span>
										</li>
										<li className="pricing-styled-list-item">
											<FaIcons.FaCheck
												style={{margin: "10px"}}
											/>
											<span>Credits rollover</span>
										</li>
										<li className="pricing-styled-list-item">
											<FaIcons.FaCheck
												style={{margin: "10px"}}
											/>
											<span>Credits never expire</span>
										</li>
									</ul>
								</div>
								<div className="pricing-redirect-button">
									<button
										onClick={() => {
											window.location.href =
												"https://app.optiwing.com/auth/register";
										}}
										className="redirect-button"
									>
										<span>Try it for free</span>
										<span>
											<FaIcons.FaCaretRight />
										</span>
									</button>
								</div>
								<div className="pricing-caveat-text">
									<p>No Credit Card Required</p>
								</div>
							</div>
							<div className="pricing-card" id="pcard3">
								<div className="pricing-card-title">
									<h3>Freelancer</h3>
									<hr></hr>
								</div>
								<div className="pricing-card-price">
									<h1>$35</h1>
								</div>
								<div className="pricing-styled-list">
									<ul>
										<li className="pricing-styled-list-item">
											<FaIcons.FaCheck
												style={{margin: "10px"}}
											/>
											<span>5,000 Keywords</span>
										</li>
										<li className="pricing-styled-list-item">
											<FaIcons.FaCheck
												style={{margin: "10px"}}
											/>
											<span>
												$7.00 per 1,000 keywords
											</span>
										</li>
										<li className="pricing-styled-list-item">
											<FaIcons.FaCheck
												style={{margin: "10px"}}
											/>
											<span>Credits rollover</span>
										</li>
										<li className="pricing-styled-list-item">
											<FaIcons.FaCheck
												style={{margin: "10px"}}
											/>
											<span>Credits never expire</span>
										</li>
									</ul>
								</div>
								<div className="pricing-redirect-button">
									<button
										onClick={() => {
											window.location.href =
												"https://app.optiwing.com/auth/register";
										}}
										className="redirect-button"
									>
										<span>Try it for free</span>
										<span>
											<FaIcons.FaCaretRight />
										</span>
									</button>
								</div>
								<div className="pricing-caveat-text">
									<p>No Credit Card Required</p>
								</div>
							</div>
							<div className="pricing-card" id="pcard4">
								<div className="pricing-card-title">
									<h3>Founder</h3>
									<hr></hr>
								</div>
								<div className="pricing-card-price">
									<h1>$59</h1>
								</div>
								<div className="pricing-styled-list">
									<ul>
										<li className="pricing-styled-list-item">
											<FaIcons.FaCheck
												style={{margin: "10px"}}
											/>
											<span>10,000 Keywords</span>
										</li>
										<li className="pricing-styled-list-item">
											<FaIcons.FaCheck
												style={{margin: "10px"}}
											/>
											<span>
												$5.90 per 1,000 keywords
											</span>
										</li>
										<li className="pricing-styled-list-item">
											<FaIcons.FaCheck
												style={{margin: "10px"}}
											/>
											<span>Credits rollover</span>
										</li>
										<li className="pricing-styled-list-item">
											<FaIcons.FaCheck
												style={{margin: "10px"}}
											/>
											<span>Credits never expire</span>
										</li>
									</ul>
								</div>
								<div className="pricing-redirect-button">
									<button
										onClick={() => {
											window.location.href =
												"https://app.optiwing.com/auth/register";
										}}
										className="redirect-button"
									>
										<span>Try it for free</span>
										<span>
											<FaIcons.FaCaretRight />
										</span>
									</button>
								</div>
								<div className="pricing-caveat-text">
									<p>No Credit Card Required</p>
								</div>
							</div>
							<div className="pricing-card" id="pcard5">
								<div className="pricing-card-title">
									<h3>Consultant</h3>
									<hr></hr>
								</div>
								<div className="pricing-card-price">
									<h1>$110</h1>
								</div>
								<div className="pricing-styled-list">
									<ul>
										<li className="pricing-styled-list-item">
											<FaIcons.FaCheck
												style={{margin: "10px"}}
											/>
											<span>20,000 Keywords</span>
										</li>
										<li className="pricing-styled-list-item">
											<FaIcons.FaCheck
												style={{margin: "10px"}}
											/>
											<span>
												$5.50 per 1,000 keywords
											</span>
										</li>
										<li className="pricing-styled-list-item">
											<FaIcons.FaCheck
												style={{margin: "10px"}}
											/>
											<span>Credits rollover</span>
										</li>
										<li className="pricing-styled-list-item">
											<FaIcons.FaCheck
												style={{margin: "10px"}}
											/>
											<span>Credits never expire</span>
										</li>
									</ul>
								</div>
								<div className="pricing-redirect-button">
									<button
										onClick={() => {
											window.location.href =
												"https://app.optiwing.com/auth/register";
										}}
										className="redirect-button"
									>
										<span>Try it for free</span>
										<span>
											<FaIcons.FaCaretRight />
										</span>
									</button>
								</div>
								<div className="pricing-caveat-text">
									<p>No Credit Card Required</p>
								</div>
							</div>
							<div className="pricing-card" id="pcard6">
								<div className="pricing-card-title">
									<h3>Agency</h3>
									<hr></hr>
								</div>
								<div className="pricing-card-price">
									<h1>$199</h1>
								</div>
								<div className="pricing-styled-list">
									<ul>
										<li className="pricing-styled-list-item">
											<FaIcons.FaCheck
												style={{margin: "10px"}}
											/>
											<span>40,000 Keywords</span>
										</li>
										<li className="pricing-styled-list-item">
											<FaIcons.FaCheck
												style={{margin: "10px"}}
											/>
											<span>
												$4.98 per 1,000 keywords
											</span>
										</li>
										<li className="pricing-styled-list-item">
											<FaIcons.FaCheck
												style={{margin: "10px"}}
											/>
											<span>Credits rollover</span>
										</li>
										<li className="pricing-styled-list-item">
											<FaIcons.FaCheck
												style={{margin: "10px"}}
											/>
											<span>Credits never expire</span>
										</li>
									</ul>
								</div>
								<div className="pricing-redirect-button">
									<button
										onClick={() => {
											window.location.href =
												"https://app.optiwing.com/auth/register";
										}}
										className="redirect-button"
									>
										<span>Try it for free</span>
										<span>
											<FaIcons.FaCaretRight />
										</span>
									</button>
								</div>
								<div className="pricing-caveat-text">
									<p>No Credit Card Required</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="call-to-action-wrapper">
					<div className="call-to-action-background-div"></div>
					<div className="call-to-action">
						<h1 align="center" className="call-to-action-h1">
							Start generating keyword maps today!
						</h1>
						<button
							onClick={() => {
								window.location.href =
									"https://app.optiwing.com/auth/register";
							}}
							className="call-to-action-button"
						>
							<span>Claim your free credits now</span>
							<span>
								<FaIcons.FaCaretRight />
							</span>
						</button>
					</div>
				</div>
			</section>
			<Footer refProp={homeRef} refProp2={instructionsRef} />
		</main>
	);
}
