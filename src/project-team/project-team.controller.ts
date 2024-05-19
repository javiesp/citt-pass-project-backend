import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ProjectTeamService } from './project-team.service';
import { CreateProjectTeamDto } from './dto/create-project-team.dto';
import { UpdateProjectTeamDto } from './dto/update-project-team.dto';
import { MessagePattern } from '@nestjs/microservices';

@Controller('project-team')
export class ProjectTeamController {
  constructor(private readonly projectTeamService: ProjectTeamService) {}

  @Post('create-project-team')
  @MessagePattern("createProjectTeam")// se comunica con la api por medio de message pattern
  create(@Body() createProjectTeamDto: CreateProjectTeamDto) {
    return this.projectTeamService.createProjectTeam(createProjectTeamDto);
  }

  @Get('/find-all-project-teams')
  @MessagePattern("findAllProjectTeams")
  findAll() {
    return this.projectTeamService.findAllProjectTeams();
  }

  @Get('/find-one-project-team/:id') 
  @MessagePattern('findOneProjectTeam')
  findOne(id: string) {
    return this.projectTeamService.findOneProjectTeam(id);
  }

  @Put('/update-project-team/:id')
  @MessagePattern('updateProjectTeam')
  update(payload) { 
    console.log(payload) 
    return this.projectTeamService.updateProjectTeam(payload.id, payload.updateProjectTeamDto);
  }

  @Delete('/delete-project-team/:id')
  @MessagePattern('removeProjectTeam')
  remove(id: string) {
    return this.projectTeamService.removeProjectTeam(id);
  }
}
