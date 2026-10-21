import { Body, Controller, Dependencies, Get, Param, Post, Query } from '@nestjs/common';
import { AcervoService } from './acervo.service.js';
import type { AcervoIn } from './acervo.service.js';

@Controller('biblioteca')
@Dependencies(AcervoService)

export class AcervoController {
  private acervo: AcervoService

  constructor(acervo: AcervoService) {
    this.acervo = acervo;
  }

  @Get()
  getHello(): string {
    return this.acervo.getHello();
  }

  @Get("livros")
  getBooks() {
    return this.acervo.getBooks()
  }

  @Get("titulos")
  getTitles() {
    return this.acervo.getTitles();
  }

  @Get("autores")
  getAuthors() {
    return this.acervo.getAuthors()
  }

  @Get("livrosPorAno")
  getBooksByYear(@Query("ano") ano: string) {
    return this.acervo.getBooksByYear(ano);
  }

  @Get("desatualizados/:ano")
  getDatedBooks(@Param("ano") ano: string) {
    return this.acervo.getDatedBooks(ano)
  }

  @Get("livrosPorAutorEAno")
  getBooksByAuthorAndYear(@Query("autor") autor: string, @Query("ano") ano: string) {
    return this.acervo.getBooksByAuthorAndYear(autor, ano)
  }

  @Post("cadastrar")
  setBook(@Body() payload: AcervoIn) {
    return this.acervo.setBook(payload);
  }
}
