import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Classroom } from "./Classroom";

@Entity("student")
export class Student extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  student_id: string;

  @Column()
  student_name: string;

  @PrimaryGeneratedColumn("increment")
  student_number: string;

  @CreateDateColumn()
  register_date: Date;

  @ManyToOne(() => Classroom, (classroom) => classroom.student)
  @JoinColumn({
    name: "classroom_id",
  })
  classroom: Classroom;
}
