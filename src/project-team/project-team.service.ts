import { Injectable } from '@nestjs/common';
import { CreateProjectTeamDto } from './dto/create-project-team.dto';
import { UpdateProjectTeamDto } from './dto/update-project-team.dto';
import { ProjectTeam } from './entities/project-team.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ProjectTeamService {
  constructor(@InjectModel(ProjectTeam.name) private readonly projectTeamModel: Model<ProjectTeam>) {}

  createProjectTeam(createProjectTeamDto: CreateProjectTeamDto) {
    const createdUser = new this.projectTeamModel(createProjectTeamDto).save();
    console.log(createProjectTeamDto)
    return createdUser;
  }

  async findAllProjectTeam() {
    return await this.projectTeamModel.find().exec();
  }

  async findProjectById(project_team_id: any) {
    return await this.projectTeamModel.find({"project_team_id": project_team_id}).exec();
  }

  async findOneProjectTeam(id: number) {
    return await this.projectTeamModel.findById(id);
  }

  async updateProjectTeam(id: number, updateProjectTeamDto: UpdateProjectTeamDto) {
    return await this.projectTeamModel.findByIdAndUpdate(id, updateProjectTeamDto)
  }

  async removeProjectTeam(id: number) {
    return await this.projectTeamModel.findByIdAndDelete(id)
  }
}
