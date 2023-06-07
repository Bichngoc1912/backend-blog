import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { APP_CONFIGS } from './configs/app';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      username: APP_CONFIGS.NEST_APP_DB_USERNAME,
      password: APP_CONFIGS.NEST_APP_DB_PASSWORD,
      database: APP_CONFIGS.NEST_APP_DB_NAME,
      entities: [],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
