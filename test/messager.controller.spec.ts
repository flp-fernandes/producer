import { Test, TestingModule } from '@nestjs/testing';
import { MessagerController } from './messager.controller';

describe('MessagerController', () => {
  let controller: MessagerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MessagerController],
    }).compile();

    controller = module.get<MessagerController>(MessagerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
