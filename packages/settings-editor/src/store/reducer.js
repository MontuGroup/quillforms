import {
	DISABLE_PROGRESS_BAR,
	DISABLE_NAVIGATION_ARROWS,
	DISABLE_WHEEL_SWIPING,
	CHANGE_ANIMATION_DIRECTION,
	SHOW_QUESTIONS_NUMBERS,
	SHOW_LETTERS_ON_ANSWERS,
	SETUP_STORE,
} from './constants';

/**
 * WordPress dependencies
 */
import { combineReducers } from '@wordpress/data';

/**
 * Disable progress bar reducer
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */
export function disableProgressBar( state = false, action ) {
	switch ( action.type ) {
		case DISABLE_PROGRESS_BAR:
			return action.flag;

		case SETUP_STORE: {
			return action.initialPayload?.disableProgressBar
				? action.initialPayload?.disableProgressBar
				: false;
		}
	}

	return state;
}
/**
 * Disable Wheel swiping
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */
export function disableWheelSwiping( state = false, action ) {
	switch ( action.type ) {
		case DISABLE_WHEEL_SWIPING:
			return action.flag;

		case SETUP_STORE: {
			return action.initialPayload?.disableWheelSwiping
				? action.initialPayload?.disableWheelSwiping
				: false;
		}
	}

	return state;
}

/**
 * Disable Navigation Arrows.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */
export function disableNavigationArrows( state = false, action ) {
	switch ( action.type ) {
		case DISABLE_NAVIGATION_ARROWS:
			return action.flag;

		case SETUP_STORE: {
			return action.initialPayload?.disableNavigationArrows
				? action.initialPayload?.disableNavigationArrows
				: false;
		}
	}

	return state;
}

/**
 * Show letters on answers.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */
export function showLettersOnAnswers( state = true, action ) {
	switch ( action.type ) {
		case SHOW_LETTERS_ON_ANSWERS:
			return action.flag;

		case SETUP_STORE: {
			return typeof action.initialPayload?.showLettersOnAnswers !==
				'undefined'
				? action.initialPayload?.showLettersOnAnswers
				: true;
		}
	}

	return state;
}

/**
 * Show questions numbers.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */
export function showQuestionsNumbers( state = true, action ) {
	switch ( action.type ) {
		case SHOW_QUESTIONS_NUMBERS:
			return action.flag;

		case SETUP_STORE: {
			return typeof action.initialPayload?.showQuestionsNumbers !==
				'undefined'
				? action.initialPayload?.showQuestionsNumbers
				: true;
		}
	}

	return state;
}

/**
 * Change animation direction.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */
export function animationDirection( state = false, action ) {
	switch ( action.type ) {
		case CHANGE_ANIMATION_DIRECTION:
			return action.direction;

		case SETUP_STORE: {
			return action.initialPayload?.changeAnimationDirection
				? action.initialPayload?.changeAnimationDirection
				: 'vertical';
		}
	}

	return state;
}

export default combineReducers( {
	disableProgressBar,
	disableWheelSwiping,
	disableNavigationArrows,
	animationDirection,
	showLettersOnAnswers,
	showQuestionsNumbers,
} );
