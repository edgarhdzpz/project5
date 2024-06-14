import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, Municipio } from '@prisma/client';

@Injectable()
export class MunicipiosService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.MunicipioCreateInput): Promise<Municipio> {
    return this.prisma.municipio.create({
      data,
    });
  }

  async findAll(): Promise<Municipio[]> {
    return this.prisma.municipio.findMany();
  }

  async findOne(id: number): Promise<Municipio | null> {
    return this.prisma.municipio.findUnique({
      where: { id },
    });
  }

  async update(id: number, data: Prisma.MunicipioUpdateInput): Promise<Municipio> {
    return this.prisma.municipio.update({
      where: { id },
      data,
    });
  }

  async remove(id: number): Promise<Municipio> {
    return this.prisma.municipio.delete({
      where: { id },
    });
  }

  async findLocalidades(municipioId: number) {
    return this.prisma.localidad.findMany({
      where: { municipioId },
    });
  }
}