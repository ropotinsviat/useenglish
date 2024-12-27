import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from './config';
import { TestsModule } from './tests/tests.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({ ...config.database, type: 'mysql' }),
    TestsModule,
  ],
})
export class AppModule {}
