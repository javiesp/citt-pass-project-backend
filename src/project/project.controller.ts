import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ProjectService } from './project.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { MessagePattern } from '@nestjs/microservices';

@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Post('/create-project')
  @MessagePattern('createProject') // Esta línea debe estar relacionada con microservicios
  create(@Body() createProjectDto: CreateProjectDto) {
    return this.projectService.createProject(createProjectDto);
  }

  @Get('/get-project')
  @MessagePattern('findAllProjects')
  findAllProject() {
    return this.projectService.findAllProject();
  }

  @Get('/get-project-by-id')
  @MessagePattern('findProjectById')
  findProjectById(query: any) {
    console.log('hola ',query)
    return this.projectService.findProjectById(query.project_id);
  } 

  @Get('/search-product-by-name')
  @MessagePattern('searchProductByName')
  searchProductByName(project_name) {
    return this.projectService.searchProductByName(project_name);
  }

  @Put('update-project/:id')
  @MessagePattern('updateProject')
  updateProject(updateQuery) {
    console.log(updateQuery)
    return this.projectService.updateProject(updateQuery.id, updateQuery.updateProjectDto);
  }

  @Delete('delete-project/:id')
  @MessagePattern('removeProject')
  removeProject(id) {
    console.log(id)
    return this.projectService.removeProject(id);
  }
}