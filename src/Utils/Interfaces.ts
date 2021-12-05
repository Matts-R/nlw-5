/**
 * Interface for create a Settings object 
 */
export interface ISettings {
	chat: boolean;
	username: string;
}

export interface IMessages {
	admin_id?: string;
	text: string;
	user_id: string;
}

/**
* Interface for default HTTP responses
*/ 
export interface IResponse {
	httpCode: number;
	response: {
		status: boolean;
		result?: any,
		message?: string;
	};
}
