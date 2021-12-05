import { Request, Response } from "express";
import SettingsService from "../services/SettingsService";

export default class SettingsController {
	static async create(request: Request, response: Response): Promise<Response>{
		const { chat, username } = request.body;

		const result = await SettingsService.create({ chat, username });

		return response.status(result.httpCode).json(result.response);
	}
}
