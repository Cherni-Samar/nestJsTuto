import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateOptionDto } from './dto/create-option-dto';
import { OptionsService } from './options.service';

@Controller("options")
export class OptionController {

    constructor(private readonly optionsService: OptionsService) { }

    @Post("create")
    createOption(@Body() createOptionDto: CreateOptionDto) {
        return this.optionsService.create(createOptionDto);
    }

    @Get('list')
    findAllOptions() {
        return this.optionsService.findAll();
    }

    @Get('detail/:id')
    findOptionById(@Param('id') id: number) {
        return this.optionsService.findOne(id);
    }

    @Patch(':id')
    updateOption(@Param('id') id: number, @Body() updateOptionDto: CreateOptionDto) {
        return this.optionsService.update(id, updateOptionDto);
    }

    @Delete(':id')
    removeOption(@Param('id') id: number) {
        return this.optionsService.remove(id);
    }


}

