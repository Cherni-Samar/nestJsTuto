import { Module } from '@nestjs/common';
import { OptionController } from './option.controller';
import { OptionsService } from './options.service';

@Module({
  providers: [OptionsService],
  controllers: [OptionController],
  

})
export class OptionsModule {}
