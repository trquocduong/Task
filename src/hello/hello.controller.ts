import { Controller, Get } from '@nestjs/common';
import { HelloService } from './hello.service';
import { ResponsData } from 'src/global/globalClass';
import { Message, Status } from 'src/global/globalEnum';

@Controller('hello')
export class HelloController {
  constructor(private readonly helloService: HelloService) {} //tạo thông qua biến và tách biệt logic giữa controller và service,
  @Get()
  getHello(): ResponsData<string> {
    try {
      return new ResponsData<string>(
        this.helloService.getHello(),
        Status.SUCCESS,
        Message.SUCCESS,
      );
    } catch (error) {
      return new ResponsData<string>(null, Status.ERROR, Message.ERROR);
    }
  }
}
