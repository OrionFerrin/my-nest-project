import { Test, TestingModule } from '@nestjs/testing';
import { TiposgasolinaController } from './tiposgasolina.controller';

describe('TiposgasolinaController', () => {
  let controller: TiposgasolinaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TiposgasolinaController],
    }).compile();

    controller = module.get<TiposgasolinaController>(TiposgasolinaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
