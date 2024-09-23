import { RoleControlService } from '@infrastructure/services/role-control.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class RoleControlUserUseCase {
  constructor(private readonly roleService: RoleControlService) {}

  excute(roleId: number) {
    return this.roleService.getRoleControlOfUser(roleId as number);
  }
}
