import { Module } from '@nestjs/common';
import { AcervoService } from './acervo/acervo.service.js';
import { AcervoController } from './acervo/acervo.controller.js';
import { EstatisticasController } from './estatisticas/estatisticas.controller.js';
import { EstatisticasService } from './estatisticas/estatisticas.service.js';

@Module({
  imports: [],
  controllers: [AcervoController, EstatisticasController],
  providers: [AcervoService, EstatisticasService],
})
export class AppModule {}
