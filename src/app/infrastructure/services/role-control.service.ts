import DatabaseService from '@infrastructure/common/database/database.service';
import { Injectable } from '@nestjs/common';
import * as path from 'path';
import { map } from 'rxjs';

@Injectable()
export class RoleControlService {
  path: string = '../../../../src/asset/sql';
  constructor(private readonly database: DatabaseService) {}

  getRoleControlOfUser(roleId: number) {
    const filePath = `${this.path}/get-role-control-user.sql`;
    const params = [roleId];

    return this.database
      .queryByFile(path.join(__dirname, filePath), params)
      .pipe(
        map((res) => {
          return res.rows;
        }),
      );
  }
}
