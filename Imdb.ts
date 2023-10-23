import { Movie } from "./Movie";
import * as fs from 'fs';

export class Imdb{

    public peliculas: Movie[];

    constructor(peliculas:Movie[]){
        this.peliculas = peliculas;
    }

    public escribirEnFicheroJSON(nombreFichero: string): void{
        fs.writeFileSync(nombreFichero, JSON.stringify(this));
    }

    public obtenerInstanciaIMDB(nombreFichero: string): Imdb{
        let arrMov = fs.readFileSync(nombreFichero);
        let imdb2: Imdb = new Imdb(JSON.parse(arrMov.toString()).peliculas);

        return imdb2;
    }
}