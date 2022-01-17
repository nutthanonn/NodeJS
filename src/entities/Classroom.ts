import { BaseEntity, Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("classroom")
export class Classroom extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  classroom_id: string;

  @Column({
    unique: true,
  })
  classroom_name: string;
}
