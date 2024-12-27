import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestsController } from './tests.controller';
import { TestsService } from './tests.service';
import { Test } from './entities/test.entity';
import { Question } from './entities/question.entity';
import { Option } from './entities/option.entity';
import { Media } from './entities/media.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Test, Question, Option, Media])],
  controllers: [TestsController],
  providers: [TestsService],
})
export class TestsModule {}
