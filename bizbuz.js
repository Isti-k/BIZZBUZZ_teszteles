export function bizbuz(n){
    let eredmeny = "";
    if (n<=0){
        eredmeny = "nincs ilyen sorozat"
    }else {
        for (let i = 1; i <= n; i++) {
            if(i === n){
                eredmeny += seged(i);
            }else {
                eredmeny += seged(i)+",";
            }
            
            
        }
    }
    return eredmeny;
    /* ha n%2===0 akkor füzzük hozzá a eredményhez BIZ */
    // kell egy ciklus

    return eredmeny;
}

function seged(n){
    // n, BIZ, BUZ
    let eredmeny = "";
    if ((n%2 === 0) && (n%3 === 0)){
        eredmeny = "BIZBUZ";
    }else if (n%2 === 0){
        eredmeny = "BIZ";
    }else if (n%3 === 0){
        eredmeny = "BUZ";
    }else {
        eredmeny = n;
    }
    return eredmeny;
}
