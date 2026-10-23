
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Auto } from '../../interfaces/auto';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css',
})
export class SearchBar {
  faMagnifyingGlass = faMagnifyingGlass;

  @Input() autos: Auto[] = [];
  @Output() onSelectCar = new EventEmitter<Auto>();

  selectedAutos: Auto[] = [];

  ngOnInit() {
    this.selectedAutos = this.autos;
  }

  selectAutos(selectedBrand: string) {
    if (selectedBrand) {
      this.selectedAutos = this.autos.filter(
        x => x.brand.toLowerCase().startsWith(selectedBrand.toLowerCase())
      );
    } else {
      this.selectedAutos = this.autos;
    }
  }

 selectCar(auto: Auto) {
  this.selectedCar = auto;
  this.onSelectCar.emit(auto);
}


selectedCar: Auto | null = null;
}