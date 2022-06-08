import { Usuario } from './usuarios/entities/usuario.entity';
import { Controller, Get, Post, Param, UseGuards, Request, Body } from '@nestjs/common';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  } 

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req:any){
    console.log(req.user);

    return req.user
  }

}
