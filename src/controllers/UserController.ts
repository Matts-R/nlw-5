import { Request, Response } from "express";
import UserService from '../services/UserService';

export default class UserController {
	static async create(request: Request, response: Response): Promise<Response> {
		const { email } = request.body;

    const result = await UserService.create(email);

		return response.status(result.httpCode).json(result.response);
	}
}
