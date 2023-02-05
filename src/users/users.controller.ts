import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createOneUser(createUserDto);
  }


  @Post('/login')
  getMessage(@Body() username: string, password: string) {
    return this.usersService.loginUser (username, password)
  }


  @Get()
  findAll() {
    return this.usersService.findAllUsers();
  }

  /* @Get(':username')
  findOne(@Param('username') username: string) {
    return this.usersService.findUserByUsername (username);
  } */


  @Patch(':username')
  update(@Param('username') username: string, @Body() updateUserDto: UpdateUserDto) {
    console.log("ctrl ",username, updateUserDto);
    
    return this.usersService.updateUser(username, updateUserDto);
  }

  @Delete(':username')
  remove(@Param('username') username: string) {
    return this.usersService.removeUser(username);
  }
}
