import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { incrementSession, decrementSession } from "../actions/clockActions";

class Session extends Component {
	render() {
		const { sessionLength, incrementSession, decrementSession } = this.props;
		return (
			<div className="mx-auto">
				<div className="row">
					<h1 id="session-label" className="display-4">
						Session Length
					</h1>
				</div>
				<div className="row">
					<div className="col-md-3 offset-md-1">
						<button
							className="btn btn-lg btn-outline-dark"
							id="session-decrement"
							onClick={decrementSession}
						>
							<i className="fas fa-minus" />
						</button>
					</div>
					<div className="col-md-4">
						<h2 id="session-length" className="text-center align-middle">
							{sessionLength}
						</h2>
					</div>
					<div className="col-md-3">
						<button
							className="btn btn-lg btn-outline-dark"
							id="session-increment"
							onClick={incrementSession}
						>
							<i className="fas fa-plus" />
						</button>
					</div>
				</div>
			</div>
		);
	}
}

Session.propTypes = {
	incrementSession: PropTypes.func.isRequired,
	decrementSession: PropTypes.func.isRequired,
	sessionLength: PropTypes.number.isRequired
};

const mapState = state => ({ sessionLength: state.clock.sessionLength });
const mapDispatch = {
	incrementSession,
	decrementSession
};

export default connect(
	mapState,
	mapDispatch
)(Session);
