export const getBodyClassList = () => {
	try {
		return document.getElementsByTagName('body')[0].classList;
	} catch (err) {
		console.debug('Running in a non-browser environment, skipping...');
	}
	return null;
};
