import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UsersService, User } from './users.service';
import { ResponsData } from 'src/global/globalClass';
import { Message, Status } from 'src/global/globalEnum';
import { UserDto } from 'src/dto/user.dto';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  // @Post('register')
  // registerUser(@Body('name') name: string): ResponsData<string> {
  //   try {
  //     const userId = this.usersService.createUser(name);
  //     return new ResponsData<string>(userId, Status.SUCCESS, Message.SUCCESS);
  //   } catch (error) {
  //     return new ResponsData<string>(null, Status.ERROR, Message.ERROR);
  //   }
  // }

  //data transfer object
  @Post('register')
  registerUser(@Body() usersDto: UserDto): ResponsData<UserDto> {
    try {
      return new ResponsData<UserDto>(
        usersDto,
        Status.SUCCESS,
        Message.SUCCESS,
      );
    } catch (error) {
      return new ResponsData<UserDto>(null, Status.ERROR, Message.ERROR);
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
