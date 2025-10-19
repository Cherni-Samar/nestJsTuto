import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './logger.middleware';
import { OptionsModule } from './options/options.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [ OptionsModule, UserModule],
  controllers: [
     AppController],
  providers: [AppService],
})
export class AppModule implements NestModule  {
    configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      //.forRoutes(UserController , OptionController);
      .forRoutes({ path: 'user', method: RequestMethod.POST }); //uniquement pour tous les POST
      //.forRoutes({ path: 'user', method: RequestMethod.POST },{ path: 'user', method: RequestMethod.PATCH },) // 🔹 uniquement pour les POST 
      //.exclude({ path: 'cats', method: RequestMethod.GET },{ path: 'cats', method: RequestMethod.POST },'cats/{*splat}',
 }
}
