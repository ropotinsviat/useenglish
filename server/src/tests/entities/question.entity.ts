import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Test } from './test.entity';
import { Option } from './option.entity';

@Entity('questions')
export class Question {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  content: string;

  @Column({ type: 'text', nullable: true })
  explanation: string;

  @ManyToOne(() => Test, (test) => test.questions)
  test: Test;

  @OneToMany(() => Option, (option) => option.question)
  options: Option[];
}
