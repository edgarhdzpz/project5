import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientesModule } from './clientes/clientes.module';


  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
