import { Controller, Dependencies, Get, Param, Query } from '@nestjs/common';
import { EstatisticasService } from './estatisticas.service.js';

@Controller('estatisticas')
@Dependencies(EstatisticasService)

export class EstatisticasController {
    private estatisticasService: EstatisticasService

    constructor(estatisticasService: EstatisticasService) {
        this.estatisticasService = estatisticasService;
    }

    @Get("qtdObrasPorAutor/:autor")
    getQtdObrasPorAutor(@Param("autor") autor: string) {
        return this.estatisticasService.getQtdObrasPorAutor(autor)
    }

    @Get("qtdObrasPorAno/:ano")
    getQtdObrasPorAno(@Param("ano") ano: string) {
        return this.estatisticasService.getQtdObrasPorAno(ano)
    }

   @Get("qtdObrasDoAutorNoAno")
   getQtdObrasDoAutorNoAno(@Query("autor") autor: string, @Query("ano") ano: string) {
    return this.estatisticasService.getQtdObrasDoAutorNoAno(autor, ano)
   }
}
