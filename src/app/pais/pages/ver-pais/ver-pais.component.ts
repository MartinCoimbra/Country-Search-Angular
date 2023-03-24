import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap, tap } from 'rxjs';
/* el tap es un operador que dispara un efecto secundario */
import { Country } from '../../interfaces/pais.interfaces';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
})
export class VerPaisComponent implements OnInit {
  pais!: Country;

  constructor(
    private activatedRouter: ActivatedRoute,
    private paisService: PaisService
  ) {}

  ngOnInit(): void {
    /* Las dos formas funcionan igual */
    this.activatedRouter.params
      .pipe(
        switchMap(({ id }) => this.paisService.getPaisPorAlpha(id)),
        /* tap(console.log) === tap(resp=> console.log(resp)) */
        tap(console.log)
      )
      .subscribe((pais) => {
        this.pais = pais;
      });

    /* this.activatedRouter.params.subscribe(({ id }) => {
      this.paisService.getPaisPorAlpha(id).subscribe((pais) => {
        console.log(pais);
      });
    }); */
  }
}
