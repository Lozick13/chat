export interface messageInterface {
	from: {
		name: string;
	};
	message: {
		time: string;
		text: string | undefined;
	};
}
