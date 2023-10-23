import { Movie } from "./Movie";
import * as fs from 'fs'

export class Imdb{

    public peliculas: Movie[];

    constructor(peliculas:Movie[]){
        this.peliculas = peliculas;
    }
    public escribirEnFicheroJSON(nombreFichero:string):void{
        let stringObj = JSON.stringify(this)
        fs.writeFileSync(nombreFichero,stringObj)
    }
    public obtenerInstanciaIMDB(nombreFichero:string):Imdb{
        let instanciaImdb = new Imdb(JSON.parse(fs.readFileSync(nombreFichero).toString()).peliculas)
        return instanciaImdb
    }
}