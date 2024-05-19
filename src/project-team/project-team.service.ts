import { Injectable } from '@nestjs/common';
import { CreateProjectTeamDto } from './dto/create-project-team.dto';
import { UpdateProjectTeamDto } from './dto/update-project-team.dto';
import { ProjectTeam } from './entities/project-team.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ProjectTeamService {
  constructor(@InjectModel(ProjectTeam.name) private readonly projectTeamModel: Model<ProjectTeam>) {}

  async createProjectTeam(createProjectTeamDto: CreateProjectTeamDto): Promise<ProjectTeam> {
    const createdProjectTeam = new this.projectTeamModel(createProjectTeamDto).save();
    console.log(createProjectTeamDto)
    return createdProjectTeam;
  }

  async findAllProjectTeams() : Promise<ProjectTeam[]>{
    return await this.projectTeamModel.find().exec();
  }

  async findOneProjectTeam(id: string): Promise<ProjectTeam> {
    return await this.projectTeamModel.findById(id).exec();
  }

  async updateProjectTeam(id: string, updateProjectTeamDto: UpdateProjectTeamDto): Promise<ProjectTeam> {
    return await this.projectTeamModel.findByIdAndUpdate(id, updateProjectTeamDto, { new: true }).exec();
  }

  async removeProjectTeam(id: string): Promise<ProjectTeam> {
    return await this.projectTeamModel.findByIdAndDelete(id).exec();
  }
}
