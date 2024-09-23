import { kafkaConfig } from 'src/app/infrastructure/common/kafka/kafka.config';
import { NestFactory } from '@nestjs/core';
import { CON_FIG } from 'src/asset/conf/config';

export class App {
  static async bootstrap(module: any) {
    const port = process.env.PORT || CON_FIG.app.port;
    const app = await NestFactory.create(module);
    app.connectMicroservice(kafkaConfig());
    await app.startAllMicroservices();
    await app.listen(port);
    console.log('Kafka connected!');
  }
}
