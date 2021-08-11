// 1. Napisati funkciju koja vrsi sumiranje i mnozenje jednog niza i vratiti te vrednosti u niz
{
    let sumiranjeIMnozenje = niz => {
        let sum = 0;
        let proizvod = 1;
        let tmp = []
        for (let i = 0; i < niz.length; i++) {
            sum += niz[i];
            proizvod *= niz[i]

        }
        tmp.push(sum, proizvod)
        return tmp
    }
    console.log(sumiranjeIMnozenje([1, 2, 3, 4])); //[10, 24]
}


// 2. Napisati funkciju koja iz datog niza izbacuje null, undefined, NaN, 0, "" itd...

function izbaciNaN(niz) {
    let noviNiz = []
    for (let i = 0; i < niz.length; i++) {
        if (niz[i])
            noviNiz.push(niz[i])

    }
    return noviNiz
}
console.log(izbaciNaN([1, -3, "", 0, 1, NaN, 'Hello', undefined, [1, 1], null, 0, 1, ""]));
//[ 1, -3, 1, 'Hello', [ 1, 1 ], 1 ]



// 4. За првих 100 бројева исписати:
//     ако је дељив са 3  Fizz, са 5  Buzz, са 7  Zazz и са оба  FizzBuzz, у супротном Broj
//     Ако је дељив са 3,5,7 - FizzBuzzZazz
//     3,5 - FizzBuzz
//     3,7 - FizzZazz
//     5,7 - BuzzZazz
let sa3 = 'Fizz'
let sa5 = 'Buzz'
let sa7 = 'Zazz'
let broj = []

for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0 && i % 7 == 0) {
        broj.push(i)
        console.log(`${sa3}${sa5}${sa7}`);
    }
    else if (i % 5 == 0 && i % 7 == 0) {
        broj.push(i)
        console.log(`${sa5}${sa7}`);
    }
    else if (i % 3 == 0 && i % 7 == 0) {
        broj.push(i)
        console.log(`${sa3}${sa7}`);
    }
    else if (i % 3 == 0 && i % 5 == 0) {
        broj.push(i)
        console.log(`${sa3}${sa5}`);
    }
    else if (i % 3 == 0) {
        broj.push(i)
        console.log(`${sa3}`);
    }
    else if (i % 5 == 0) {
        broj.push(i)
        console.log(`${sa5}`);
    }
    else if (i % 7 == 0) {
        broj.push(i)
        console.log(`${sa7}`);
    }
    else {
        broj.push(i)
        console.log(i);
    }
}


// 5. Izvrsiti inverziju brojeva bez pomocne promenljive. 
//     Pr: x = 5 y = 9
//     Resenje: x = 9 y = 5
//     pom = "ne mozete koristiti"
{
    let x = 5;
    let y = 9;
    [x,y] = [y,x]
    console.log(`x = ${x} y = ${y}`); //x = 9 y = 5
}
