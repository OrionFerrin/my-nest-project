import { Test, TestingModule } from '@nestjs/testing';
import { DispensadoresService } from './dispensadores.service';

describe('DispensadoresService', () => {
  let service: DispensadoresService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DispensadoresService],
    }).compile();

    service = module.get<DispensadoresService>(DispensadoresService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
