import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type projectDocument = HydratedDocument<ProjectTeam>;

@Schema()
export class ProjectTeam {
  @Prop()
  project_team_id: number

  @Prop()
  uid_user: string[]

  @Prop()
  project_leader: string
}

export const projectTeamSchema = SchemaFactory.createForClass(ProjectTeam);
