import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { EstadosService } from './estados.service';
import { Estado as EstadoModel } from '@prisma/client';

@Controller('estados')
export class EstadosController {
  constructor(private readonly estadosService: EstadosService) {}

  @Post()
  async create(@Body() data: { nombre: string }): Promise<EstadoModel> {
    return this.estadosService.create(data);
  }

  @Get()
  async findAll(): Promise<EstadoModel[]> {
    return this.estadosService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<EstadoModel | null> {
    return this.estadosService.findOne(+id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: { nombre: string }): Promise<EstadoModel> {
    return this.estadosService.update(+id, data);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<EstadoModel> {
    return this.estadosService.remove(+id);
  }

  @Get(':id/municipios')
  async findMunicipios(@Param('id') id: string) {
    return this.estadosService.findMunicipios(+id);
  }
}
