import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from "typeorm";

@Entity("student")
export class Student extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  student_id: string;

  @Column()
  student_name: string;

  @Column({
    unique: true,
  })
  student_number: string;

  @CreateDateColumn()
  register_date: Date;
}
