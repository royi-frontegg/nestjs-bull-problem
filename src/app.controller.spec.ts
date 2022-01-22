import { Test, TestingModule } from '@nestjs/testing';
import { OtherController } from './other-module/other.controller';
import { OtherService } from './other-module/other.service';

describe('AppController', () => {
  let appController: OtherController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [OtherController],
      providers: [OtherService],
    }).compile();

    appController = app.get<OtherController>(OtherController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
