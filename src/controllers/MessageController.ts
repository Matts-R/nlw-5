import { Request, Response } from "express";
import MessageService from "../services/MessageServices";

export default class MessageController {
	static async create(request: Request, response: Response): Promise<Response> {
		const { admin_id, text, user_id } = request.body;

		const result = await MessageService.create({ admin_id, user_id, text });

		return response.status(result.httpCode).json(result.response);
	}

	static async getAllByUser(request: Request, response: Response) {
		const { id } = request.params;

		const result = await MessageService.getAllMessagesByUser(id);

		return response.status(result.httpCode).json(result.response);
	}
}
