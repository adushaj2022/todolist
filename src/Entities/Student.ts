import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
} from "typeorm";
import { Housing } from "./Housing";

@Entity()
export class Student extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  firstName!: string;

  @Column()
  lastName!: string;

  @Column()
  major!: string;

  @ManyToOne(() => Housing, (housing) => housing.student)
  housing!: Housing;
}
