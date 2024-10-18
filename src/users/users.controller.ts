import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UsersService, User } from './users.service';
import { ResponsData } from 'src/global/globalClass';
import { Message, Status } from 'src/global/globalEnum';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Post('register')
  registerUser(@Body('name') name: string): ResponsData<string> {
    try {
      const userId = this.usersService.createUser(name);
      return new ResponsData<string>(userId, Status.SUCCESS, Message.SUCCESS);
    } catch (error) {
      return new ResponsData<string>(null, Status.ERROR, Message.ERROR);
    }
  }

  @Get('get_user')
  getAllUsers(): User[] {
    return this.usersService.getAllUsers();
  }
  @Get('get_user/:id')
  getUserById(@Param('id') id: string): ResponsData<User | null> {
    const user = this.usersService.getUserById(id);
    if (user) {
      return new ResponsData<User>(user, Status.SUCCESS, Message.SUCCESS);
    } else {
      return new ResponsData<User>(null, Status.ERROR, Message.ERROR);
    }
  }
}
