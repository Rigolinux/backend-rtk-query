import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tasks' })
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text', {
    nullable: false,
    unique: true,
  })
  title: string;

  @Column('text', {})
  description: string;

  @Column('boolean', {
    default: false,
  })
  status: boolean;
}
