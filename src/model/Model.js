import { szenvedoMondatok } from "./angol.js";

class Model
{
    #cim;
    #sugo;
    #mondatok;
    #aktMondatIndex;

    constructor()
    {
        this.#cim = szenvedoMondatok[0];
        this.#sugo = szenvedoMondatok[1];
        this.#mondatok = [];
        for (let i = 2; i < szenvedoMondatok.length; i++)
        {
            const AKT_MONDAT = szenvedoMondatok[i];
            this.#mondatok.push({
                magyar: AKT_MONDAT.magyar ?? "Fuck you!",
                index: i + 1,
                mondat: AKT_MONDAT.mondat,
                alap: AKT_MONDAT.alap,
                helyes: AKT_MONDAT.valasztas[0],
                kevertValasztas: this.#listaKever(AKT_MONDAT.valasztas),
                teljesMondat: AKT_MONDAT.mondat.split("_"),
                kevertMondat: this.#listaKever(AKT_MONDAT.mondat.split(" "))
            });
        }
        this.#aktMondatIndex = 0;
    }

    get cim()
    {
        return this.#cim;
    }

    get sugo()
    {
        return this.#sugo;
    }

    get aktMondat()
    {
        if (++this.#aktMondatIndex >= this.#mondatok.length)
        {
            this.#aktMondatIndex = 0;
        }
        return this.#mondatok[this.#aktMondatIndex];
    }

    #listaKever(lista)
    {
        const LISTA = [...lista];
        for (let i = LISTA.length - 1; i >= 0; i--)
        {
            const RANDOM_INDEX = Math.floor(Math.random() * (i + 1));
            const TMP = LISTA[i];
            LISTA[i] = LISTA[RANDOM_INDEX];
            LISTA[RANDOM_INDEX] = TMP;
        }
        return LISTA;
    }
}

export default Model;