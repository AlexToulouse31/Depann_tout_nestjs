import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {

  constructor(@InjectRepository(User) private usersRepository: Repository<User>){}


  async createUser(user: CreateUserDto) {
    const newUser = await this.usersRepository.create(user)
    await this.usersRepository.save(newUser)
    return newUser;
  }

  findAllUsers() {
    return this.usersRepository.find();
  }

  async findUserBy(username:string) {
    const user = await this.usersRepository.findOneBy({username})
    return ;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
