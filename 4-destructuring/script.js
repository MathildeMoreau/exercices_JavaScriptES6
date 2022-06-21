//4.1 Découverte

const [a, b] = [1, 2, 3, 4]
console.log(a)
console.log(b)

// chaque lettre correspond a un element du tableau

const {first, last, age} = {first: 'Paul', last: 'Henta', age: 35}
console.log(first)
console.log(last)
console.log(age)

//4.2 Application

console.log(data)

let donnee = Object.entries(data)

donnee.forEach((texte) => {
    console.log('Du ' + texte[1]['dateDebut'] + ' au ' + texte[1]['dateFin'] + ' : ' + 'ligne ' + texte[1]['texte'])
})