export class CreateUserDto {
    readonly id: number
    readonly username:string
    readonly mail :string
    readonly password: string
    readonly adress_line1: string
    readonly adress_line2: string
    readonly adress_line3: string
    readonly zipCode: string
    readonly city: string
}
