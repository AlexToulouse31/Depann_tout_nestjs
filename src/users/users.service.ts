import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {

  constructor(@InjectRepository(User) private usersRepository: Repository<User>){}


  async createOneUser(user: CreateUserDto) {
    const newUser = await this.usersRepository.create(user)
    await this.usersRepository.save(newUser)
    return newUser;
  }

  findAllUsers() {
    return this.usersRepository.find();
  }

  async findUserByUsername(username:string) {
    const user = await this.usersRepository.findOneBy({username})
    return ;
  }

  async updateUser(username: string, user: UpdateUserDto) {
    await this.usersRepository.update(username, user)
    const updatedUser = await this.usersRepository.findOneBy({username})

    if (updatedUser){
      return updatedUser
    }
    throw new HttpException ('Username not found', HttpStatus.NOT_FOUND)
  }

  async removeUser(username: string) {
    const deletedUser = await this.usersRepository.findOneBy({username})
    await this.usersRepository.remove([])

    if (!deletedUser){
      throw new HttpException ('Username not found', HttpStatus.NOT_FOUND)}
  }
}
