import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DireccionesModule } from './direcciones/direcciones.module';

  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
