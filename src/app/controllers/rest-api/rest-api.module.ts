import { Module } from '@nestjs/common';

const controllerModules = [];
@Module({
  imports: [...controllerModules],
})
export class RestApiModule {}
