import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { MunicipiosService } from './municipios.service';
import { Municipio as MunicipioModel } from '@prisma/client';

@Controller('municipios')
export class MunicipiosController {
  constructor(private readonly municipiosService: MunicipiosService) {}

  @Post()
  async create(@Body() data: { nombre: string, estadoId: number }): Promise<MunicipioModel> {
    return this.municipiosService.create({
      nombre: data.nombre,
      estado: { connect: { id: data.estadoId } }, // Aquí conectamos el municipio con el estado existente
    });
  }
  
  @Get()
  async findAll(): Promise<MunicipioModel[]> {
    return this.municipiosService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<MunicipioModel | null> {
    return this.municipiosService.findOne(+id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: { nombre: string, estadoId: number }): Promise<MunicipioModel> {
    return this.municipiosService.update(+id, data);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<MunicipioModel> {
    return this.municipiosService.remove(+id);
  }

  @Get(':id/localidades')
  async findLocalidades(@Param('id') id: string) {
    return this.municipiosService.findLocalidades(+id);
  }
}