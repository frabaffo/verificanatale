import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

constructor(private http: HttpClient) { }

    searchPokemon(query: string) {
      const url = 'https://pokeapi.co/api/v2/type/${query};'


      let obsProducts = this.http.get(url);
      return obsProducts;
  //Ritorno un observable ai componenti che richiedono il servizio
    }

      getPokemon(id: string) {
      const url = 'https://pokeapi.co/api/v2/pokemon/${id};'
      return this.http.get(url,);
    }
}
