import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Test } from './test.entity';

@Entity('media')
export class Media {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'enum', enum: ['image', 'video', 'audio', 'text'] })
  type: string;

  @Column({ type: 'text' })
  content: string;

  @OneToOne(() => Test, (test) => test.media)
  @JoinColumn()
  test: Test;
}
