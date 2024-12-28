import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Test } from './entities/test.entity';
import { Media } from './entities/media.entity';
import { Question } from './entities/question.entity';
import { Option } from './entities/option.entity';

@Injectable()
export class TestsQueryService {
  constructor(
    @InjectRepository(Test) private readonly testRepository: Repository<Test>,
    @InjectRepository(Question)
    private readonly questionRepository: Repository<Question>,
    @InjectRepository(Option)
    private readonly optionRepository: Repository<Option>,
    @InjectRepository(Media)
    private readonly mediaRepository: Repository<Media>,
  ) {}

  async getMany(level?: string, type?: string): Promise<Test[]> {
    const where: any = {};

    if (level) where.level = level;
    if (type) where.type = type;

    return await this.testRepository.find({ where });
  }

  async getOne(id: number): Promise<Test> {
    const test = await this.testRepository.findOne({
      where: { id },
      relations: ['questions', 'questions.options', 'media'],
    });

    if (!test) throw new NotFoundException(`Test with id ${id} not found`);

    return test;
  }
}
