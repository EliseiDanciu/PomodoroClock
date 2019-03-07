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

let timer = null;

export const reset = () => dispatch => {
	const alarm = document.getElementById("beep");
	alarm.pause();
	alarm.currentTime = 0;
	dispatch(stop());
	dispatch({ type: RESET });
};

export const start = () => dispatch => {
	clearInterval(timer);

	timer = setInterval(() => {
		dispatch(timeout());
		dispatch(tick());
	}, 1000);
	dispatch({ type: TIMER_TOGGLE });
};

export const timeout = () => (dispatch, getState) => {
	const alarm = document.getElementById("beep");
	let { timeLeft, isBreak } = getState().clock;
	if (timeLeft < 1) {
		if (isBreak) {
			alarm.play();
			dispatch({ type: TIMEOUT_BREAK });
		} else {
			alarm.play();
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
