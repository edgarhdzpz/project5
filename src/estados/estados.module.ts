import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { EstadosService } from './estados.service';
import { EstadosController } from './estados.controller';

@Module({
  providers: [EstadosService, PrismaService], // Asegúrate de incluir PrismaService aquí
  controllers: [EstadosController],
})
export class EstadosModule {}