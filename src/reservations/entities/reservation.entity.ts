import { User } from 'src/users/entities/user.entity';
import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class reservation {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => User, (user) => user.reservation)
    user: User
}
