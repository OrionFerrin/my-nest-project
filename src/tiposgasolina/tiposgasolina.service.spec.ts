import { Test, TestingModule } from '@nestjs/testing';
import { TiposgasolinaService } from './tiposgasolina.service';

describe('TiposgasolinaService', () => {
  let service: TiposgasolinaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TiposgasolinaService],
    }).compile();

    service = module.get<TiposgasolinaService>(TiposgasolinaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
