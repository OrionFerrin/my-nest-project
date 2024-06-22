import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Dispensador {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  descripcion: string;

}

