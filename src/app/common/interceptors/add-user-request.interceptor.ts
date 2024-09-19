import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { ClsServiceManager } from 'nestjs-cls';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const user = JSON.parse(request.headers['user']);
    ClsServiceManager.getClsService().set('userId', user.id);

    return next.handle();
  }
}
