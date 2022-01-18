import {
  BaseEntity,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
} from "typeorm";

import { Student } from "./Student";
import { Teacher } from "./Teacher";

@Entity("classroom")
export class Classroom extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  classroom_id: string;

  @Column({
    unique: true,
  })
  classroom_name: string;

  @OneToMany(() => Student, (student) => student.classroom)
  student: Student;

  @OneToMany(() => Teacher, (teacher) => teacher.classroom)
  teacher: Teacher;
}
