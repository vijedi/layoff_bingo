import { encodeURI, decode } from 'js-base64';
import type { BoardState } from './board_types';

// eslint-disable-next-line
type SveltePage = any;

export function parseBoardState($page: SveltePage): BoardState {
	const rawState = $page.url.searchParams.get('state');
	if (rawState) {
		return JSON.parse(decode(rawState)) as BoardState;
	}

	return { selected: [] };
}

export function encodeBoardState(state: BoardState): string {
	const asJson = JSON.stringify(state);
	return encodeURI(asJson);
}

export function saveBoardState($page: SveltePage, state: BoardState): void {
	const encoded = encodeBoardState(state);
	$page.url.searchParams.set('state', encoded);
	history.replaceState(history.state, '', $page.url);
}
