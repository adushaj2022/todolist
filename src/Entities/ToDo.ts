import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity()
export class ToDo extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  task!: string;

  @Column()
  isCompleted!: boolean;
}
