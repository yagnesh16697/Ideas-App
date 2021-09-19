import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserRO } from './user.dto';
import { UserService } from './user/user.service';

@Controller('')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('api/users')
  async showAllUsers(): Promise<UserRO[]> {
    return await this.userService.showAll();
  }

  @Post('login')
  login(@Body() data): Promise<UserRO> {
    return this.userService.login(data);
  }

  @Post('register')
  regiter(@Body() data): Promise<UserRO> {
    return this.userService.register(data);
  }
}
