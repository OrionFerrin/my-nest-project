import { Module } from '@nestjs/common';
import { ConsumosService } from './consumos.service';
import { ConsumosController } from './consumos.controller';

@Module({
  providers: [ConsumosService],
  controllers: [ConsumosController]
})
export class ConsumosModule {}
