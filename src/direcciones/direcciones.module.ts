import { Module } from '@nestjs/common';
import { DireccionesService } from './direcciones.service';
import { DireccionesController } from './direcciones.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [DireccionesService, PrismaService],
  controllers: [DireccionesController]
})
export class DireccionesModule {}