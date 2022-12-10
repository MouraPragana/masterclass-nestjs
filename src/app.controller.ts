import { Body, Controller, Post } from '@nestjs/common';
import { CreateTeamMemberBody } from './dtos/create-tem-member-body';
import { RocketMembersRepository } from './repositories/rocket-members-repository';

@Controller()
export class AppController {
  constructor(private rocketMembersRepository: RocketMembersRepository) {}

  @Post()
  async getHello(@Body() body: CreateTeamMemberBody) {
    const { name, function: memberFunction } = body;

    await this.rocketMembersRepository.create(name, memberFunction);
  }
}
