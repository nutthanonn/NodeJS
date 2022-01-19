import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
} from "typeorm";
import { Classroom } from "./Classroom";

@Entity("teacher")
export class Teacher extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  teacher_id: string;

  @Column()
  teacher_name: string;

  @ManyToOne(() => Classroom, (classroom) => classroom.teacher)
  @JoinColumn({
    name: "classroom_id",
  })
  classroom: Classroom;

  @CreateDateColumn()
  register_date: Date;
}
