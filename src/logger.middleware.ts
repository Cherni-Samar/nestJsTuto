/*
https://docs.nestjs.com/middleware#middleware
*/

import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {

  private logger = new Logger('HTTP');
  use(req: Request, res: Response, next: Function) {

    const { method, originalUrl } = req;
    const { statusCode } = res;
    this.logger.log(`${method} ${originalUrl} ${statusCode}`);
    //console.log('Request...');
    next();
  }
}
