import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styleUrls: ['./search-pokemon.component.css']
})
export class SearchPokemonComponent  {

  query: string;
  title = 'first-routed-app';
  obsPokemon: Observable<Object>;
  results: any;
  // faccio iniettare lo spotify service e faccio una ricerca
  constructor(public pokemon: PokemonService) {

  }

  submit(query: HTMLInputElement): void {

    if (!query.value) {
      return;
    }
    this.query = query.value;
    this.obsPokemon = this.pokemon.searchPokemon(this.query);
    this.obsPokemon.subscribe((data) => { this.results = data; console.log(this.results) });
  }

  renderResults(res: any): void {
    this.results = null;
    if (res && res.pokemons && res.pokemons.items) {
      this.results = res.pokemons.items;
    }
  }

}
