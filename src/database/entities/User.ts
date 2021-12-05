import {
	Entity,
	Column,
	CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
	PrimaryColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("user")
export default class User {
	@PrimaryColumn()
	id: string;

	@Column()
	email: string;

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;

	@DeleteDateColumn()
	deleted_at: Date;

	constructor() {
		if (!this.id) {
			this.id = uuid();
		}
	}
}
