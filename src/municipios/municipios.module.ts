import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { MunicipiosService } from './municipios.service';
import { MunicipiosController } from './municipios.controller';

@Module({
  providers: [MunicipiosService, PrismaService],
  controllers: [MunicipiosController]
})
export class MunicipiosModule {}