import { Module } from '@nestjs/common';
import { HelloController } from './hello/hello.controller';
import { HelloModule } from './hello/hello.module';
import { UsersModule } from './users/users.module';
@Module({
  imports: [HelloModule, UsersModule],
})
export class AppModule {}
