import { AuthService } from './auth/auth.service';
import { Usuario } from './usuarios/entities/usuario.entity';
import { Controller, Get, Post, Param, UseGuards, Request, Body } from '@nestjs/common';
import { LocalAuthGuard } from './auth/guards/local-auth.guard';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly authservice: AuthService
    ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  } 

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req:any){
    console.log(req.user);

    return this.authservice.login(req.user)
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req:any){
    return req.user
  }

}
