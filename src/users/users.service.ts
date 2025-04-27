import { Injectable } from '@nestjs/common';
import { InjectRepository} from '@mikro-orm/nestjs';
import { EntityRepository, EntityManager } from '@mikro-orm/core';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Users } from '../../database/entities/Users';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private readonly userRepository: EntityRepository<Users>,
    private readonly em: EntityManager, // Inject EntityManager
  ) {}

  async create(createUserDto: CreateUserDto): Promise<Users> {
    const newUser = this.userRepository.create({
      email: createUserDto.email,
      name: createUserDto.name,
      password: createUserDto.password,
      active: createUserDto.active ?? true,
      planStatus: createUserDto.planStatus ?? 'free',
      apiToken: createUserDto.apiToken ?? '',
      rejectedorders: createUserDto.rejectedorders ?? 0,  
    });
    await this.em.persistAndFlush(newUser); // Use EntityManager to persist and flush
    return newUser;
  }

  async findAll(): Promise<Users[]> {
    return await this.userRepository.findAll();
  }

  async findOne(id: number): Promise<Users | null> {
    return await this.userRepository.findOne({ id });
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<Users | null> {
    const user = await this.userRepository.findOne({ id });
    if (!user) {
      return null;
    }
    this.userRepository.assign(user, updateUserDto);
    await this.em.flush(); // Use EntityManager to flush changes
    return user;
  }

  async remove(id: number): Promise<boolean> {
    const user = await this.userRepository.findOne({ id });
    if (!user) {
      return false;
    }
    await this.em.removeAndFlush(user); // Use EntityManager to remove and flush
    return true;
  }
}
