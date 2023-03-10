import { User } from 'src/users/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, BaseEntity } from 'typeorm';

@Entity()
export class Service extends BaseEntity {
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
