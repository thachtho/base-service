import { Module } from '@nestjs/common';
import { KafkaConsumerController } from './kafka-consumer.controler';

@Module({
  imports: [],
  controllers: [KafkaConsumerController],
  providers: [],
})
export class KafkaConsumerModule {}
