import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import DatabaseModule from 'src/app/infrastructure/common/database/database.module';
import { KafkaConsumerModule } from './controllers/message/kafka-consumer.module';
import { ClsModule } from 'nestjs-cls';
import { RestApiModule } from './controllers/rest-api/rest-api.module';

@Module({
  imports: [
    ClsModule.forRoot({
      middleware: {
        mount: true,
      },
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        host: configService.get('DB_HOST'),
        port: configService.get('DB_PORT'),
        user: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_DATABASE'),
      }),
    }),
    KafkaConsumerModule,
    RestApiModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
