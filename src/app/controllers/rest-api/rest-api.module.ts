import { Module } from '@nestjs/common';
import { RoleControlControllerModule } from './role-control/role-control.controller.module';

const controllerModules = [RoleControlControllerModule];
@Module({
  imports: [...controllerModules],
})
export class RestApiModule {}
