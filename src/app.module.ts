import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EstadosModule } from './estados/estados.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [EstadosModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
