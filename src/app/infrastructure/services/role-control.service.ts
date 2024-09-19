import DatabaseService from '@infrastructure/common/database/database.service';
import { Injectable } from '@nestjs/common';
import * as path from 'path';
import { map } from 'rxjs';

@Injectable()
export class RoleControlService {
  constructor(private readonly database: DatabaseService) {}

  getRoleControlOfUser(roleId: number) {
    console.log(
      '🚀 ~ RoleControlService ~ getRoleControlOfUser ~ roleId:',
      roleId,
    );
    const filePath = '../../../../src/asset/sql/get-role-control-user.sql';
    const params = [roleId];

    return this.database
      .queryByFile(path.join(__dirname, filePath), params)
      .pipe(
        map((res) => {
          return res.rows[0];
        }),
      );
  }
}
