import { Controller, Get, Param, Query } from '@nestjs/common';
import { TestsQueryService } from './tests-query.service';

@Controller('tests')
export class TestsController {
  constructor(private readonly testsQueryService: TestsQueryService) {}

  @Get()
  async getMany(@Query('level') level?: string, @Query('type') type?: string) {
    return await this.testsQueryService.getMany(level, type);
  }

  @Get(':testId')
  async getOne(@Param('testId') testId: number) {
    return await this.testsQueryService.getOne(testId);
  }
}
