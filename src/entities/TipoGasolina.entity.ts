import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TipoGasolina {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column('decimal', { precision: 5, scale: 2 })
  costPerGallon: number;
}