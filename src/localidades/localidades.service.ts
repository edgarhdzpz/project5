import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, Localidad } from '@prisma/client';

@Injectable()
export class LocalidadesService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.LocalidadCreateInput): Promise<Localidad> {
    return this.prisma.localidad.create({
      data,
    });
  }

  async findAll(): Promise<Localidad[]> {
    return this.prisma.localidad.findMany();
  }

  async findOne(id: number): Promise<Localidad | null> {
    return this.prisma.localidad.findUnique({
      where: { id },
    });
  }

  async update(id: number, data: Prisma.LocalidadUpdateInput): Promise<Localidad> {
    return this.prisma.localidad.update({
      where: { id },
      data,
    });
  }

  async remove(id: number): Promise<Localidad> {
    return this.prisma.localidad.delete({
      where: { id },
    });
  }
}
