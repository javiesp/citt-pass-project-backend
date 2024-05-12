import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProjectTeamService } from './project-team.service';
import { CreateProjectTeamDto } from './dto/create-project-team.dto';
import { UpdateProjectTeamDto } from './dto/update-project-team.dto';

@Controller('project-team')
export class ProjectTeamController {
  constructor(private readonly projectTeamService: ProjectTeamService) {}

  @Post()
  createProjectTeam(@Body() createProjectTeamDto: CreateProjectTeamDto) {
    return this.projectTeamService.createProjectTeam(createProjectTeamDto);
  }

  @Get()
  findAllProjectTeam() {
    return this.projectTeamService.findAllProjectTeam();
  }

  @Get(':id')
  findOneProjectTeam(@Param('id') id: string) {
    return this.projectTeamService.findOneProjectTeam(+id);
  }

  @Patch(':id')
  updateProjectTeam(@Param('id') id: string, @Body() updateProjectTeamDto: UpdateProjectTeamDto) {
    return this.projectTeamService.updateProjectTeam(+id, updateProjectTeamDto);
  }

  @Delete(':id')
  removeProjectTeam(@Param('id') id: string) {
    return this.projectTeamService.removeProjectTeam(+id);
  }
}
