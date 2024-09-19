import { Inject, Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { Pool } from 'pg';
import { from, mergeMap } from 'rxjs';
import { promisify } from 'util';
import { CONNECTION_POOL } from './database.module-definition';

const externals = {
  readFile: promisify(fs.readFile),
};

@Injectable()
class DatabaseService {
  constructor(@Inject(CONNECTION_POOL) private readonly pool: Pool) {}

  runQuery(query: string, params?: unknown[]) {
    return from(this.pool.query(query, params));
  }

  queryByFile(filePath: string, params?: any[]) {
    return from(externals.readFile(filePath)).pipe(
      mergeMap((buffer) => {
        const query = buffer.toString();
        return this.runQuery(query);
      }),
    );
  }
}

export default DatabaseService;
