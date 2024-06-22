import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { DispensadoresModule } from './dispensadores/dispensadores.module';
import { TiposgasolinaModule } from './tiposgasolina/tiposgasolina.module';
import { ConsumosModule } from './consumos/consumos.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'your_username',
    password: 'your_password',
    database: 'your_database',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
  }),
    UsersModule,
    DispensadoresModule,
    TiposgasolinaModule,
    ConsumosModule,
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
