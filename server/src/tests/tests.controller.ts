import { Controller, Get, Param, Query } from '@nestjs/common';
import { TestsService } from './tests.service';

@Controller('tests')
export class TestsController {
  constructor(private readonly testsService: TestsService) {}

  @Get()
  async getTests(@Query('level') level?: string, @Query('type') type?: string) {
    return await this.testsService.getTests(level, type);
  }

  @Get(':testId')
  async getOneTest(@Param('testId') testId: number) {
    return await this.testsService.getOneTest(testId);
  }
}
