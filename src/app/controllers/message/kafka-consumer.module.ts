import { Module } from '@nestjs/common';
import { HealthModule } from './health-check/health-check.module';
import { KafkaConsumerController } from './kafka-consumer.controler';

@Module({
  imports: [HealthModule],
  controllers: [KafkaConsumerController],
  providers: [],
})
export class KafkaConsumerModule {}
