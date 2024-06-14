import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MunicipiosModule } from './municipios/municipios.module';
import { MunicipiosModule } from './municipios/municipios.module';

@Module({
  imports: [MunicipiosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
