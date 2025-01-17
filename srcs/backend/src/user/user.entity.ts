import { BaseEntity, Column, Entity, JoinColumn, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
@Unique(['nickname'])
export class User extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ type: "varchar", length: 20 })
	nickname: string;
	
	@Column()
	avatar: string;
	
	@Column()
	is_online: boolean;
	
	@Column()
	now_playing: boolean;
	
	@Column()
	email: string;
}

@Entity()
export class Block extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;
	
	@JoinColumn()
	blocker: User;
	
	@JoinColumn()
	blocked: User;
}

@Entity()
export class Friend extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@JoinColumn()
	user_id: User;

	@JoinColumn()
	friend_id: User;
}

@Entity()
export class History extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@JoinColumn()
	user_a: User;

	@JoinColumn()
	user_b: User;

	@Column()
	score_a: number;

	@Column()
	score_b: number;
}
