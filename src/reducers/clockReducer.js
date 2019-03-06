import {
	INCREMENT_BREAK,
	DECREMENT_BREAK,
	INCREMENT_SESSION,
	DECREMENT_SESSION,
	RESET,
	TIMER_TOGGLE,
	TIMER_TICK
} from "../actions/types";

const initialState = {
	breakLength: 5,
	sessionLength: 25,
	timeLeft: 1500,
	isPaused: true,
	isBreak: false
};

export default function(state = initialState, action) {
	let newBreak;
	let newSession;
	switch (action.type) {
		case INCREMENT_BREAK:
			newBreak = state.breakLength >= 60 ? 60 : state.breakLength + 1;
			return {
				...state,
				breakLength: newBreak
			};
		case DECREMENT_BREAK:
			newBreak = state.breakLength <= 1 ? 1 : state.breakLength - 1;
			return {
				...state,
				breakLength: newBreak
			};
		case INCREMENT_SESSION:
			newSession = state.sessionLength >= 60 ? 60 : state.sessionLength + 1;
			return {
				...state,
				sessionLength: newSession,
				timeLeft: newSession * 60
			};
		case DECREMENT_SESSION:
			newSession = state.sessionLength <= 1 ? 1 : state.sessionLength - 1;
			return {
				...state,
				sessionLength: newSession,
				timeLeft: newSession * 60
			};
		case RESET:
			return initialState;
		case TIMER_TOGGLE:
			return {
				...state,
				isPaused: !state.isPaused
			};
		case TIMER_TICK:
			return {
				...state,
				timeLeft: state.timeLeft - 1
			};
		default:
			return state;
	}
}
