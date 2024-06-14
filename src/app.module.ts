import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LocalidadesModule } from './localidades/localidades.module';

@Module({
  imports: [LocalidadesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
