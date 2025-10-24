import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user-dto';
import { UpdateUserDto } from './dto/update-user-dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) { }

    @Post('create')
    create(@Body() createUserDto: CreateUserDto) {
        return this.userService.Create(createUserDto);
    }

    @Get('list')
    findAll() {
        return this.userService.findAll();
    }

    @Get('detail/:id')
    findOne(@Param('id') id: number) {
        return this.userService.findOne(+id);
    }

    @Patch('edit/:id')
    update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
        return this.userService.update(+id, updateUserDto);
    }

    @Delete('delete/:id')
    remove(@Param('id') id: number) {
        return this.userService.remove(+id);
    }

 @Get('filtreBy')
   filterUsers(@Query('firstName') firstName?: string, @Query('age') age?: number,) {
    return this.userService.filterUsers(firstName, age);
  }
}