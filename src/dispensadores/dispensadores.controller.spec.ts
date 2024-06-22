import { Test, TestingModule } from '@nestjs/testing';
import { DispensadoresController } from './dispensadores.controller';

describe('DispensadoresController', () => {
  let controller: DispensadoresController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DispensadoresController],
    }).compile();

    controller = module.get<DispensadoresController>(DispensadoresController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
