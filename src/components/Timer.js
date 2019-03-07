import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { reset, stop, start, timeout } from "../actions/clockActions";

class Timer extends Component {
	formatToClock = () => {
		const { timeLeft } = this.props;
		let minutes = Math.floor(timeLeft / 60);
		let seconds = Math.floor(timeLeft % 60);
		minutes = minutes < 10 ? "0" + minutes : minutes;
		seconds = seconds < 10 ? "0" + seconds : seconds;
		return { minutes, seconds };
	};

	render() {
		const { reset, isPaused, start, stop, isBreak } = this.props;
		let { minutes, seconds } = this.formatToClock();
		let alarm;
		return (
			<div className="mx-auto">
				<audio id="beep" preload="auto" src="https://goo.gl/65cBl1" />
				<h1 id="timer-label" className="display-3 text-center">
					{isBreak ? "Break" : "Session"}
				</h1>
				<h1 id="time-left" className="display-1 text-center">
					{minutes}:{seconds}
				</h1>
				<div className="btn-group w-100">
					<button
						className="btn btn-lg btn-success w-75"
						id="start_stop"
						onClick={isPaused ? start.bind(this, alarm) : stop}
					>
						{isPaused ? (
							<i className="fas fa-play" />
						) : (
							<i className="fas fa-pause" />
						)}
					</button>
					<button
						className="btn btn-lg btn-warning w-25"
						id="reset"
						onClick={reset}
					>
						<i className="fas fa-redo-alt" />
					</button>
				</div>
			</div>
		);
	}
}

Timer.propTypes = {
	reset: PropTypes.func.isRequired,
	timeLeft: PropTypes.number.isRequired,
	isPaused: PropTypes.bool.isRequired,
	isBreak: PropTypes.bool.isRequired,
	stop: PropTypes.func.isRequired,
	start: PropTypes.func.isRequired,
	timeout: PropTypes.func.isRequired
};

const mapState = state => ({
	timeLeft: state.clock.timeLeft,
	isPaused: state.clock.isPaused,
	isBreak: state.clock.isBreak
});

const mapDispatch = {
	reset,
	stop,
	start,
	timeout
};

export default connect(
	mapState,
	mapDispatch
)(Timer);
