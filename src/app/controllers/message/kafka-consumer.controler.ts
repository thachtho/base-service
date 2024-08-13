import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { IKafkaParams, KafkaMessage } from './kafka.controler.i';

@Controller()
export class KafkaConsumerController {
  @EventPattern(KafkaMessage)
  message(@Payload() message: IKafkaParams) {
    return this.handle(message);
  }

  handle(message: IKafkaParams) {
    // const { data, eventName } = message;

    // switch (eventName) {
    //   case KafkaEvent.AUTH_LOGIN:

    //     break;

    //   default:
    //     break;
    // }
  }
}
