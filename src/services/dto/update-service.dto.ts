import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class service {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    price: string;

    @Column()
    city: string;

    @Column()
    start_time: Date;

    @Column()
    end_time: Date;

    @Column()
    reserved: boolean;



}