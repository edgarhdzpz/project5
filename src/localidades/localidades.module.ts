import { Module } from '@nestjs/common';
import { LocalidadesService } from './localidades.service';
import { LocalidadesController } from './localidades.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [LocalidadesService, PrismaService],
  controllers: [LocalidadesController]
})
export class LocalidadesModule {}

