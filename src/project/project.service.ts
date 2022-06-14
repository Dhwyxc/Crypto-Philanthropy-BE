import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { CreateProjectDto } from './dto/create-project.dto';
import { DonateProjectDto } from './dto/donate-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Project, ProjectDocument } from './entities/project.entity';

@Injectable()
export class ProjectService {
  constructor(
    @InjectModel(Project.name)
    private readonly projectModel: Model<ProjectDocument>, // private readonly neo4jService: Neo4jService,
  ) {}
  create(createProjectDto: CreateProjectDto) {
    return this.projectModel.create(createProjectDto);
  }
  donate(projectId, data: DonateProjectDto) {
    return this.projectModel.updateOne(
      { _id: new Types.ObjectId(projectId) },
      { $addToSet: { donor: data } },
    );
  }

  findAll() {
    return this.projectModel.find({});
  }

  findOne(id: number) {
    return `This action returns a #${id} project`;
  }

  update(id: number, updateProjectDto: UpdateProjectDto) {
    return `This action updates a #${id} project`;
  }

  remove(id: number) {
    return `This action removes a #${id} project`;
  }
}
