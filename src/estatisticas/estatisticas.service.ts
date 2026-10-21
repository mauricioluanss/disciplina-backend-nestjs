import { Dependencies, Injectable } from "@nestjs/common";
import { AcervoService } from "../acervo/acervo.service.js";

@Injectable()
@Dependencies(AcervoService)

export class EstatisticasService {
    private acervo: AcervoService

    constructor(acervo: AcervoService) {
        this.acervo = acervo
    }

    getQtdObrasPorAutor(autor: string): number {
        return this.acervo.getBooks()
            .filter(obra => obra.autor === autor)
            .length
    }

    getQtdObrasPorAno(ano: string): number {
        return this.acervo.getBooksByYear(ano).length
    }

    getQtdObrasDoAutorNoAno(autor: string, ano: string): number {
        return this.acervo.getBooksByAuthorAndYear(autor, ano).length
    }
}