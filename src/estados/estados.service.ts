import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, Estado } from '@prisma/client';

@Injectable()
export class EstadosService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.EstadoCreateInput): Promise<Estado> {
    return this.prisma.estado.create({
      data,
    });
  }

  async findAll(): Promise<Estado[]> {
    return this.prisma.estado.findMany();
  }

  async findOne(id: number): Promise<Estado | null> {
    return this.prisma.estado.findUnique({
      where: { id },
    });
  }

  async update(id: number, data: Prisma.EstadoUpdateInput): Promise<Estado> {
    return this.prisma.estado.update({
      where: { id },
      data,
    });
  }

  async remove(id: number): Promise<Estado> {
    return this.prisma.estado.delete({
      where: { id },
    });
  }

  async findMunicipios(estadoId: number) {
    return this.prisma.municipio.findMany({
      where: { estadoId },
    });
  }
}
