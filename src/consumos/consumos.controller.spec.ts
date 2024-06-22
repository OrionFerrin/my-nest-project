import { Test, TestingModule } from '@nestjs/testing';
import { ConsumosController } from './consumos.controller';

describe('ConsumosController', () => {
  let controller: ConsumosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConsumosController],
    }).compile();

    controller = module.get<ConsumosController>(ConsumosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
