import { Module } from '@nestjs/common';
import { TiposgasolinaService } from './tiposgasolina.service';
import { TiposgasolinaController } from './tiposgasolina.controller';

@Module({
  providers: [TiposgasolinaService],
  controllers: [TiposgasolinaController]
})
export class TiposgasolinaModule {}
