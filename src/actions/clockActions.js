import {
	INCREMENT_BREAK,
	DECREMENT_BREAK,
	INCREMENT_SESSION,
	DECREMENT_SESSION,
	RESET,
	TIMER_TOGGLE,
	TIMER_TICK
} from "./types";

export const incrementBreak = () => ({ type: INCREMENT_BREAK });

export const decrementBreak = () => ({ type: DECREMENT_BREAK });

export const incrementSession = () => ({ type: INCREMENT_SESSION });

export const decrementSession = () => ({ type: DECREMENT_SESSION });

export const reset = () => ({ type: RESET });

let timer = null;
export const start = () => dispatch => {
	clearInterval(timer);
	timer = setInterval(() => dispatch(tick()), 100);
	dispatch({ type: TIMER_TOGGLE });
	dispatch(tick());
};
export const tick = () => ({
	type: TIMER_TICK
});

export const stop = () => {
	console.log(timer);
	clearInterval(timer);
	return { type: TIMER_TOGGLE };
};
