import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DireccionesService } from './direcciones.service';
import { Direccion } from '@prisma/client';

@Controller('direcciones')
export class DireccionesController {
  constructor(private readonly direccionesService: DireccionesService) {}

  @Post()
  async create(@Body() createDireccionDto: any): Promise<Direccion> {
    return this.direccionesService.create(createDireccionDto);
  }

  @Get()
  async findAll(): Promise<Direccion[]> {
    return this.direccionesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Direccion | null> {
    return this.direccionesService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateDireccionDto: any): Promise<Direccion> {
    return this.direccionesService.update(+id, updateDireccionDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Direccion> {
    return this.direccionesService.remove(+id);
  }
}