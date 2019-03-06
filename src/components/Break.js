import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { incrementBreak, decrementBreak } from "../actions/clockActions";

class Break extends Component {
	render() {
		const { breakLength, incrementBreak, decrementBreak } = this.props;
		return (
			<div className="mx-auto">
				<div className="row">
					<h1 id="break-label" className="display-4">
						Break Length
					</h1>
				</div>
				<div className="row">
					<div className="col-md-3 offset-md-1">
						<button
							className="btn btn-lg btn-outline-dark"
							id="break-decrement"
							onClick={decrementBreak}
						>
							<i className="fas fa-minus" />
						</button>
					</div>
					<div className="col-md-4">
						<h2 id="break-length" className="text-center align-middle">
							{breakLength}
						</h2>
					</div>
					<div className="col-md-3">
						<button
							className="btn btn-lg btn-outline-dark"
							id="break-increment"
							onClick={incrementBreak}
						>
							<i className="fas fa-plus" />
						</button>
					</div>
				</div>
			</div>
		);
	}
}

Break.propTypes = {
	incrementBreak: PropTypes.func.isRequired,
	decrementBreak: PropTypes.func.isRequired
};

const mapState = state => ({ breakLength: state.clock.breakLength });
const mapDispatch = {
	incrementBreak,
	decrementBreak
};

export default connect(
	mapState,
	mapDispatch
)(Break);
