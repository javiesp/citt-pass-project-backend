import { Module } from '@nestjs/common';
import { ProjectTeamService } from './project-team.service';
import { ProjectTeamController } from './project-team.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { projectTeamSchema } from './entities/project-team.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'ProjectTeam', schema: projectTeamSchema }])],
  controllers: [ProjectTeamController],
  providers: [ProjectTeamService],
})
export class ProjectTeamModule {}
