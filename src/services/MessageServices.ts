import { IMessages, IResponse } from "./../Utils/Interfaces";
import { getCustomRepository } from "typeorm";
import MessageRepository from "../database/repositories/MessageRepository";

export default class MessageService {
	static async create({
		admin_id,
		text,
		user_id,
	}: IMessages): Promise<IResponse> {
		try {
			const messageRepository = getCustomRepository(MessageRepository);

			const Message = messageRepository.create({
				admin_id,
				text,
				user_id,
			});

			await messageRepository.save(Message);

			return {
				httpCode: 201,
				response: {
					status: true,
					result: Message,
				},
			};
		} catch (error) {
			return {
				httpCode: 401,
				response: {
					status: false,
					message: "Ocorreu um erro ao tentar salvar a mensagem.",
				},
			};
		}
	}

	static async getAllMessagesByUser(user_id: string): Promise<IResponse> {
		try {
			const messages = await getCustomRepository(MessageRepository).find({
				where: { user_id },
				relations: ["user"],
			});

			return {
				httpCode: 201,
				response: {
					status: true,
					result: messages,
				},
			};
		} catch (error) {
			return {
				httpCode: 401,
				response: {
					status: false,
					message: "Ocorreu um ao tentar recuperar as mensagens dos usuários.",
				},
			};
		}
	}
}
