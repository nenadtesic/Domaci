// /**
//  * 1. Napisati funkciju koja vraca najduzi palindrom u datom stringu.
// Napomena: nije potrebno da se ispituje da li je uneti string palindrom, neka se podrazumeva da jeste
// Primer: "HYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDE"
// Ispis: "12345678987654321"
//  */


function palindrom(str1) {
    let tmp = str1.split('').reverse().join('');
    return str1 == tmp;
}

function najduziPalindrom(str1) {

    let maksDuzina = 0,
        maksPalindrom = '';

    for (let i = 0; i < str1.length; i++) {
        let subs = str1.substr(i, str1.length);

        for (let j = subs.length; j >= 0; j--) {
            let sub_subs_str = subs.substr(0, j);
            if (sub_subs_str.length <= 1)
                continue;

            if (palindrom(sub_subs_str)) {
                if (sub_subs_str.length > maksDuzina) {
                    maksDuzina = sub_subs_str.length;
                    maksPalindrom = sub_subs_str;
                }
            }
        }
    }

    return maksPalindrom;
}
console.log(najduziPalindrom("ana voli milovana"));

console.log(najduziPalindrom("HYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDE"));

