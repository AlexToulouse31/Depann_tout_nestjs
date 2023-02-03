export class Service {
    user: any;
}
import { User } from 'src/users/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';

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

    @ManyToOne(() => User, (user) => user.services)
    user: User
}
