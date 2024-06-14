import { Injectable, ConflictException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Direccion, Prisma } from '@prisma/client';

@Injectable()
export class DireccionesService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.DireccionCreateInput): Promise<Direccion> {
    const existingDireccion = await this.prisma.direccion.findFirst({
      where: {
        clienteId: data.cliente.connect.id,
        localidadId: data.localidad.connect.id,
      },
    });

    if (existingDireccion) {
      throw new ConflictException('La dirección ya existe para este cliente y localidad.');
    }

    return this.prisma.direccion.create({
      data: {
        cliente: {
          connect: { id: data.cliente.connect.id },
        },
        localidad: {
          connect: { id: data.localidad.connect.id },
        },
        calle: data.calle,
        numeroExt: data.numeroExt,
        numeroInt: data.numeroInt,
        cp: data.cp,
      },
    });
  }

  async findAll(): Promise<Direccion[]> {
    return this.prisma.direccion.findMany({
      include: {
        cliente: true,
        localidad: true,
      },
    });
  }

  async findOne(id: number): Promise<Direccion | null> {
    return this.prisma.direccion.findUnique({
      where: { id },
      include: {
        cliente: true,
        localidad: true,
      },
    });
  }

  async update(id: number, data: Prisma.DireccionUpdateInput): Promise<Direccion> {
    return this.prisma.direccion.update({
      where: { id },
      data,
    });
  }

  async remove(id: number): Promise<Direccion> {
    return this.prisma.direccion.delete({
      where: { id },
    });
  }
}