import {
	INCREMENT_BREAK,
	DECREMENT_BREAK,
	INCREMENT_SESSION,
	DECREMENT_SESSION,
	RESET,
	TIMER_TOGGLE,
	TIMER_TICK,
	TIMEOUT_SESSION,
	TIMEOUT_BREAK
} from "./types";

export const incrementBreak = () => ({ type: INCREMENT_BREAK });

export const decrementBreak = () => ({ type: DECREMENT_BREAK });

export const incrementSession = () => ({ type: INCREMENT_SESSION });

export const decrementSession = () => ({ type: DECREMENT_SESSION });

export const reset = () => dispatch => {
	dispatch(stop());
	dispatch({ type: RESET });
};

let timer = null;
export const start = () => dispatch => {
	clearInterval(timer);

	timer = setInterval(() => {
		dispatch(timeout());
		dispatch(tick());
	}, 1000);
	dispatch({ type: TIMER_TOGGLE });
};

export const timeout = () => (dispatch, getState) => {
	let { timeLeft, isBreak } = getState().clock;
	if (timeLeft < 1) {
		if (isBreak) {
			dispatch({ type: TIMEOUT_BREAK });
		} else {
			dispatch({ type: TIMEOUT_SESSION });
		}
	}
};

export const tick = () => {
	return {
		type: TIMER_TICK
	};
};

export const stop = () => {
	clearInterval(timer);
	return { type: TIMER_TOGGLE };
};
