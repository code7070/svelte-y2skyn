export const createLoadObserver = (handler: () => void) => {
	let waiting = 0;

	const onload = (el: HTMLImageElement) => {
		waiting++;
		el.addEventListener('load', () => {
			waiting--;
			if (waiting === 0) {
				handler();
			}
		});
	};

	return onload;
};
