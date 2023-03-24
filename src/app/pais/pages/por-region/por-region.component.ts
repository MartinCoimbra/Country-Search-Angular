import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
})
export class PorRegionComponent {
  /* regiones: string[] = ['africa', 'america', 'asia', 'europe', 'oceania']; */
  regiones: string[] = [
    'EU',
    'EFTA',
    'CARICOM',
    'PA',
    'AU',
    'USAN',
    'EEU',
    'AL',
    'ASEAN',
    'CAIS',
    'CEFTA',
    'NAFTA',
    'SAARC',
  ];
  regionActiva: string = '';
  hayError: boolean = false;
  paises: Country[] = [];

  constructor(private paisService: PaisService) {}

  activarRegion(region: string) {
    if (region === this.regionActiva) return;
    this.regionActiva = region;
    this.paisService.buscarByRegion(region).subscribe((paises) => {
      this.paises = paises;
    });
  }
}
