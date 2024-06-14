import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DireccionesModule } from './direcciones/direcciones.module';

@Module({
  imports: [DireccionesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
