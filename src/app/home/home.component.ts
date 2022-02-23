import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceLivroService } from '../servicos/service-livro.service';
import { Livro } from '../modelos/livro';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  livros$?: Observable<Livro[]>;


  constructor(
    private livrosService: ServiceLivroService
  ) {
    this.livros$ = livrosService.listLivro()
  }




  ngOnInit(): void {
  }

}
