import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/shared/auth.guard';
import { User } from './user.decorator';
import { UserRO } from './user.dto';
import { UserService } from './user/user.service';

@Controller('')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('api/users')
  @UseGuards(new AuthGuard())
  async showAllUsers(@User() user): Promise<UserRO[]> {
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
