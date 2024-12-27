import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Question } from './question.entity';

@Entity('options')
export class Option {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  content: string;

  @Column({ type: 'boolean' })
  correct: boolean;

  @ManyToOne(() => Question, (question) => question.options)
  question: Question;
}
