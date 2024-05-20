import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user-dto';
import { UserDao } from './user.dao';
import { ResDto } from 'src/common/common.dto';
import { UserEntity } from './user.entity';
import { FindUserByIdDto } from './dto/find-user-dto';

@Injectable()
export class UserService {
  constructor(private readonly userDao: UserDao) {}

  async createUser(createUserDto: CreateUserDto): Promise<ResDto<UserEntity>> {
    const user = await this.userDao.create(createUserDto);

    return {
      httpStatus: HttpStatus.CREATED,
      message: `[id: ${user.id}] 유저가 성공적으로 생성되었습니다.`,
      item: user,
    };
  }

  async findUser(
    dto: FindUserByIdDto,
  ): Promise<ResDto<Omit<UserEntity, 'password'>>> {
    const user = await this.userDao.findById(dto.id);

    return {
      httpStatus: HttpStatus.OK,
      message: `[id: ${user.id}] 유저를 반환합니다.`,
      item: {
        id: user.id,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
        deletedAt: user.deletedAt,
        isDeleted: user.isDeleted,
        email: user.email,
        githubId: user.githubId,
        avatarUrl: user.avatarUrl,
        isGithub: user.isGithub,
        githubAccessToken: user.githubAccessToken,
      },
    };
  }
}
