import { Controller, Get } from '@nestjs/common';
import { OtherService } from './other.service';

@Controller('/')
export class OtherController {
  constructor(private readonly appService: OtherService) {}

  @Get()
  async getHello(): Promise<void> {
    return this.appService.getHello();
  }
}
