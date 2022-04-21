import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front_end';
  Codigo= '';
  DataEntrega = new Date();
   Local= '';
   Tipo= ''; Marca= ''; Descricao= ''; Preco=0.0; Tamanho= ''; Cor= ''; ValorPago= 0.0; PrecoSugerido=0.0;
}
