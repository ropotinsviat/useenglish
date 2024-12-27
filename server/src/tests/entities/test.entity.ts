import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { Question } from './question.entity';
import { Media } from './media.entity';

@Entity('tests')
export class Test {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ nullable: true })
  picture: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'enum', enum: ['a1', 'a2', 'b1', 'b2'] })
  level: string;

  @Column({ type: 'enum', enum: ['listening', 'writing', 'reading'] })
  type: string;

  @OneToMany(() => Question, (question) => question.test)
  questions: Question[];

  @OneToOne(() => Media, (media) => media.test, { nullable: true })
  media: Media;
}
