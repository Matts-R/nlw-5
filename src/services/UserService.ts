import { response } from "express";
import { getCustomRepository } from "typeorm";
import UserRepository from "../database/repositories/UserRepository";
import { IResponse } from "../Utils/Interfaces";

export default class UserService {
	static async create(email: string): Promise<IResponse> {
		try {
			const userRepository = getCustomRepository(UserRepository);

			const hasUser = await userRepository.findOne({ email });

			if (hasUser) {
				return {
					httpCode: 200,
					response: {
						status: true,
						message: "Usuário já cadastrado.",
					},
				};
			}

			const User = userRepository.create({
				email,
			});

			await userRepository.save(User);

			return {
				httpCode: 201,
				response: {
					status: true,
					result: User,
				},
			};
		} catch (error) {
			return {
				httpCode: 400,
				response: {
					status: false,
					message: "Ocorreu um erro ao tentar cadastrar o usuário.",
				},
			};
		}
	}
}
