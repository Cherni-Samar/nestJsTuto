import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UtilisateursModule } from './utilisateurs/utilisateurs.module';
import { OptionsModule } from './options/options.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [UtilisateursModule, OptionsModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
