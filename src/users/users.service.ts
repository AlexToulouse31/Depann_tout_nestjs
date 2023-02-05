import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt'
import { match } from 'assert';

@Injectable()
export class UsersService {

  constructor(@InjectRepository(User) private usersRepository: Repository<User>){}



  async createOneUser(user: CreateUserDto) {
    const salt = await bcrypt.genSalt()
    const hashPassword = await bcrypt.hash(user.password, salt)
    user.password = hashPassword
    const newUser = this.usersRepository.create(user)
    await this.usersRepository.save(newUser)
    return newUser;
  }

  findAllUsers() {
    return this.usersRepository.find();
  }

  /* async findUserByUsername(username:string) {
    const user = await this.usersRepository.findOneBy({username})
    return user ;
  } */

  async loginOneUser(username: string, password: string){
    const user = await this.usersRepository.findOneBy({username})
    if (user){
      const matsh = await bcrypt.compare(password, user.password);
      if(match) return 'Credentials are correct !';
      return 'Invalide !'
    }
  }




  async updateUser(username: string, user: UpdateUserDto) {

    const updatedUser = await this.usersRepository.findOneBy({username})

    updatedUser.username = user.username
    updatedUser.mail = user.mail
    updatedUser.password = user.password
    updatedUser.adress_line1 = user.adress_line1
    updatedUser.adress_line2 = user.adress_line2
    updatedUser.adress_line3 = user.adress_line3
    updatedUser.zipCode = user.zipCode
    updatedUser.city = user.city
    
    await this.usersRepository.save(updatedUser)
    console.log('service ',updatedUser);
    
    if (updatedUser){
      return updatedUser
    }
    throw new HttpException ('Username not found', HttpStatus.NOT_FOUND)
  }

  async removeUser(username: string) {
    const deletedUser = await this.usersRepository.findOneBy({username})
    await this.usersRepository.delete(deletedUser.id)

    if (!deletedUser){
      throw new HttpException ('Username not found', HttpStatus.NOT_FOUND)}
  }
}
