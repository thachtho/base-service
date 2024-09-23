import { Module } from '@nestjs/common';
import { RoleControlService } from './role-control.service';

const services = [RoleControlService];
@Module({
  imports: [],
  providers: [...services],
  exports: [...services],
})
export class ServicesModule {}
