import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
})
export class PorCapitalComponent {
  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];

  constructor(private paisService: PaisService) {}

  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino;
    if (this.termino === '') {
      this.paises = [];
    } else {
      this.paisService.buscarPaisByCapital(this.termino).subscribe(
        (paises) => {
          console.log(paises);
          this.paises = paises;
        },
        (err) => {
          this.hayError = true;
          this.paises = [];
          console.log(err);
        }
      );
    }
  }
}
