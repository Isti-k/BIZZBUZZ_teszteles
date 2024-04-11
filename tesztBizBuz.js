import { bizbuz } from "./bizbuz.js";

export function tesztBizBuz(){
    const tesztLista=[
        {
            n: 0,
            vart: "nincs ilyen sorozat",
        },
        {
            n: -1,
            vart: "nincs ilyen sorozat",
        },
        {
            n: 1,
            vart: "1",
        },
        {
            n: 2,
            vart: "1, BIZ",
        },
        {
            n: 10,
            vart: "1, BIZ, BUZ, BIZ, 5, BIZBUZ, 7, BIZ, BUZ, BIZ",
        },
    ];
    /* for (let i=0; i<tesztLista.lenght; i++){
        let teszteset=tesztLista[i]
    } */

    tesztLista.array.forEach(tesztEset, index => {
        let fvEredmeny = bizbuz(tesztEset.n);
        console.assert(
            tesztEset.vart = fvEredmeny, "%o", `n:${n} vart:${vart} kapott:${fvEredmeny}`, `HIBA! a ${index}. tesztesetnél`
        );
    });

}

