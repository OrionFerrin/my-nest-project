import { Module } from '@nestjs/common';
import { DispensadoresService } from './dispensadores.service';
import { DispensadoresController } from './dispensadores.controller';

@Module({
  providers: [DispensadoresService],
  controllers: [DispensadoresController]
})
export class DispensadoresModule {}
