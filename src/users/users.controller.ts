import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService, User } from './users.service';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Post('register')
  registerUser(@Body('name') name: string): User {
    return this.usersService.createUser(name);
  }
  @Get('get_user')
  getAllUsers(): User[] {
    return this.usersService.getAllUsers();
  }
}
