import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { LocalidadesService } from './localidades.service';
import { Localidad as LocalidadModel } from '@prisma/client';

@Controller('localidades')
export class LocalidadesController {
  constructor(private readonly localidadesService: LocalidadesService) {}

  @Post()
  async create(@Body() data: { nombre: string, municipioId: number }): Promise<LocalidadModel> {
    return this.localidadesService.create({
      nombre: data.nombre,
      municipio: { connect: { id: data.municipioId } }, // Conectamos la localidad con el municipio existente
    });
  }

  @Get()
  async findAll(): Promise<LocalidadModel[]> {
    return this.localidadesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<LocalidadModel | null> {
    return this.localidadesService.findOne(+id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: { nombre: string, municipioId: number }): Promise<LocalidadModel> {
    return this.localidadesService.update(+id, data);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<LocalidadModel> {
    return this.localidadesService.remove(+id);
  }
}
