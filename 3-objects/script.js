//3.1 Object.keys

const bus = {
    vehicle: 'Urbanway CNG 12',
    id: 3221,
    line: 'C6',
    paint: 'chrono',
    garage: {
        name: 'Sassenage',
        place: '47'
    },
    equipments: ['sae', 'tft', 'speech']
}

for (const [key, value] of Object.entries(bus)){
    console.log(`${key} : ${value}`)
}
//3.2 Object.values

let donnee = Object.entries(data)

donnee.forEach((texte) => {
    console.log(texte[1]['texte'])
})