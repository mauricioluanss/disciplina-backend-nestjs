import { Injectable } from '@nestjs/common';

export interface AcervoIn {
  titulo: string;
  autor: string;
  ano: string;
}

@Injectable()
export class AcervoService {
  private acervo: AcervoIn[] = [];

  /* no futuro recber no constryror a depedencia da model Acervo */
  constructor() {
    this.acervo.push(
        { titulo: 'NodeJS for Dummys', autor: 'Zezinho Pato', ano: '2024' },
        { titulo: 'Backends com NodeJS', autor: 'Luizinho Pato', ano: '1998' },
        { titulo: 'Arquitetura de Software', autor: 'Zezinho Pato', ano: '1997' },
        { titulo: 'Desenvolvendo para WEB', autor: 'Huguinho Pato', ano: '1743' },
        { titulo: 'Microservicos', autor: 'Zezinho Pato', ano: '2026' },
        { titulo: 'Introducao ao JavaScrip', autor: 'Huguinho Pato', ano: '1999'}
    );
  }

  getHello(): string {
    return 'Bem-vindo a Biblioteca Central';
  }

  getBooks() {
    return this.acervo;
  }

  getTitles() {
    return this.acervo.map((book) => book.titulo);
  }

  getAuthors() {
    return [...new Set(this.acervo.map((author) => author.autor))];
  }

  getBooksByYear(ano: string) {
    return this.acervo.filter((book) => book.ano === ano);
  }

  getDatedBooks(ano: string) {
    return this.acervo.filter((book) => Number(book.ano) < Number(ano));
  }

  getBooksByAuthorAndYear(autor: string, ano: string) {
    return this.acervo.filter(
      (book) => book.autor === autor && book.ano === ano,
    );
  }

  setBook(payload: AcervoIn) {
    this.acervo.push(payload);

    return 'livro adicionado';
  }
}
