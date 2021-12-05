import { getCustomRepository } from "typeorm";
import SettingsRepository from "../database/repositories/SettingsRepository";
import { IResponse, ISettings } from "../Utils/Interfaces";

export default class SettingsService {
	static async create({ chat, username }: ISettings): Promise<IResponse> {
		try {
			const settingsRepository = getCustomRepository(SettingsRepository);

			const hasSettings = await settingsRepository.findOne({
				username,
			});

			if (hasSettings) {
				return {
					httpCode: 200,
					response: { status: false, message: "Configuração já aplicada." },
				};
			}

			const Settings = settingsRepository.create({
				chat,
				username,
			});

			await settingsRepository.save(Settings);

			return {
				httpCode: 201,
				response: { status: true, result: Settings },
			};
		} catch (error) {
			return {
				httpCode: 401,
				response: {
					status: false,
					message: "Ocorreu um erro ao tentar salvar as configurações",
				},
			};
		}
	}
}
