import { encodeURI, decode } from 'js-base64';
import type { BoardState } from './board_types';
import { FREE_SPACE } from './board_content';

// eslint-disable-next-line
type SveltePage = any;

export function parseBoardState($page: SveltePage): BoardState {
	const rawState = $page.url.searchParams.get('state');
	if (rawState) {
		return JSON.parse(decode(rawState)) as BoardState;
	}

	return { selected: [FREE_SPACE.id] }; // Free Space is always selected
}

export function encodeBoardState(state: BoardState): string {
	const asJson = JSON.stringify(state);
	return encodeURI(asJson);
}

export function saveBoardState($page: SveltePage, state: BoardState): void {
	const encoded = encodeBoardState(state);
	$page.url.searchParams.set('state', encoded);

	try {
		history.replaceState(history.state, '', $page.url);
	} catch (err) {
		console.debug('Running in a non-browser environment, skipping history update');
	}
}
