import React from "react";
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import "../css/Contact.css";

import { ReactComponent as FacebookLogo } from "../images/facebook.svg";
import { ReactComponent as GmailLogo } from "../images/gmail.svg";
import { ReactComponent as InstagramLogo } from "../images/instagram.svg";

export default class Contact extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: "",
			email: "",
			message: "",
		};
	}

	handleSubmit(e) {
		e.preventDefault();

		fetch("https://budget-node-server.herokuapp.com/send", {
			method: "POST",
			body: JSON.stringify(this.state),
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
		})
			.then((response) => response.json())
			.then((response) => {
				if (response.status === "success") {
					alert("Message Sent.");
					this.resetForm();
				} else if (response.status === "fail") {
					alert("Message failed to send.");
				}
			});
	}

	resetForm() {
		this.setState({ name: "", email: "", phone: "", message: "" });
	}

	render() {
		return (
			<section id="page" className="contact-container">
				<div className="intro-container">
					<h2 className="intro-h2">Our Mission:</h2>
					<p className="intro-p">
						It is our mission to develop fitness, coordination, and self-esteem
						by providing successful experiences in a fun, challenging, and
						positive environment.
					</p>
				</div>
				<div className="contact-form-wrapper">
					<div className="contact-section">
						<form
							id="contact-form"
							className="form"
							onSubmit={this.handleSubmit.bind(this)}
							method="POST"
						>
							<h2 className="form-h2">Send Us A Message</h2>
							<label className="form-label" htmlFor="name" id="name">
								Name
								<input
									type="text"
									className="form-input"
									placeholder="John Doe"
									value={this.state.name}
									onChange={this.onNameChange.bind(this)}
								/>
							</label>
							<label className="form-label" htmlFor="inputEmail" id="email">
								Email address
								<input
									type="email"
									className="form-input"
									placeholder="your-email@example.com"
									aria-describedby="emailHelp"
									value={this.state.email}
									onChange={this.onEmailChange.bind(this)}
								/>
							</label>
							<label className="form-label" htmlFor="inputTel" id="tel">
								Phone #
								<input
									type="phone"
									className="form-input"
									placeholder="530-555-5309"
									aria-describedby="phoneHelp"
									value={this.state.phone}
									onChange={this.onPhoneChange.bind(this)}
								/>
							</label>
							<label className="form-label" htmlFor="message" id="message">
								Your message to us:
								<textarea
									type="text"
									className="form-textarea"
									rows="5"
									value={this.state.message}
									onChange={this.onMessageChange.bind(this)}
								></textarea>
							</label>
							<div className="submit-clear-wrapper">
								<button type="submit" className="form-submit">
									&nbsp;
									<AiIcons.AiOutlineSend className="form-submit-icon" />
								</button>
								<button
									id="clear"
									type="clear"
									className="form-clear"
									onClick={() => this.resetForm()}
								>
									Clear
								</button>
							</div>
						</form>
						<div className="info">
							<h3 className="info-h2">Contact Information</h3>
							<div className="info-details-container">
								<p className="info-detail">
									<a className="info-link" href="tel:5302299194">
										<FaIcons.FaPhone className="info-icon" />
										(530) 229 - 9194
									</a>
								</p>
								<p className="info-detail">
									<a
										href="mailto: shastagymnasticsmedia@gmail.com"
										className="info-link"
									>
										<AiIcons.AiFillMail className="info-icon" />
										shastagymnasticsmedia@gmail.com
									</a>
								</p>
								<p className="info-detail">
									<a
										href="https://goo.gl/maps/DVMGa1QsRyH5BLgNA"
										className="info-link"
									>
										<IoIcons.IoMdPin className="info-icon" />
										2629 Bechelli Ln, Redding, CA 96002
									</a>
								</p>
							</div>
							<div className="info-svgs-container">
								<a
									className="icon-svg filter-white"
									href="https://www.facebook.com/shastagymnasticsacademy/"
								>
									<FacebookLogo />
								</a>
								<a
									className="icon-svg filter-white"
									href="https://www.instagram.com/shastagymnastics/"
								>
									<InstagramLogo />
								</a>
								<a
									className="icon-svg filter-white"
									href="mailto: shastagymnasticsmedia@gmail.com"
								>
									<GmailLogo />
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}

	onNameChange(event) {
		this.setState({ name: event.target.value });
	}

	onEmailChange(event) {
		this.setState({ email: event.target.value });
	}

	onMessageChange(event) {
		this.setState({ message: event.target.value });
	}

	onPhoneChange(event) {
		this.setState({ phone: event.target.value });
	}
}
