import { Reservation } from "src/reservations/entities/reservation.entity";
import { Service } from "src/services/entities/service.entity";
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('User')
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ nullable: false, unique: true })
    username: string

    @Column({})
    mail: string

    @Column({ nullable: false, select: false })
    password: string

    @Column()
    adress_line1: string

    @Column()
    adress_line2: string

    @Column()
    adress_line3: string

    @Column()
    zipCode: string

    @Column()
    city: string

    @OneToMany(() => Service, (service) => service.user)
    services: Service[]

    @OneToMany(() => Reservation, (reservation) => reservation.user)
    reservations: Reservation[]
}
