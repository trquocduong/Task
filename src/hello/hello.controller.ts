import { Controller, Get } from '@nestjs/common';
import { HelloService } from './hello.service';

@Controller('hello')
export class HelloController {
  constructor(private readonly helloService: HelloService) {} //tạo thông qua biến và tách biệt logic giữa controller và service,
  @Get()
  getHello(): string {
    return this.helloService.getHello();
  }
}
