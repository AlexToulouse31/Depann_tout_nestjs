export class Reservation {
    user: any;
}
import { User } from 'src/users/entities/user.entity';
import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class reservation {
    @PrimaryGeneratedColumn()
    id: number
²
    @ManyToOne(() => User, (user) => user.reservation)
    user: User
}