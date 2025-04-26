import { Injectable } from '@nestjs/common';
import { InjectRepository} from '@mikro-orm/nestjs';
import { EntityRepository, EntityManager } from '@mikro-orm/core';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: EntityRepository<User>,
    private readonly em: EntityManager, // Inject EntityManager
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const newUser = this.userRepository.create({
      email: createUserDto.email,
      name: createUserDto.name,
      password: createUserDto.password,
      active: createUserDto.active ?? true,
      plan_status: createUserDto.plan_status ?? 'free',
    });
    await this.em.persistAndFlush(newUser); // Use EntityManager to persist and flush
    return newUser;
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.findAll();
  }

  async findOne(id: number): Promise<User | null> {
    return await this.userRepository.findOne({ id });
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User | null> {
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
