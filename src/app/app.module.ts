import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import DatabaseModule from 'src/app/infrastructure/common/database/database.module';
import { KafkaConsumerModule } from './controllers/message/kafka-consumer.module';
import { RestApiModule } from './controllers/rest-api/rest-api.module';
import { ClsModule } from 'nestjs-cls';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ClsModule.forRoot({
      middleware: {
        mount: true,
      },
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
