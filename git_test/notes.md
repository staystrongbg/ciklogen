# functions are 1st class objects

## prihvata funkciju koja je prosledjena kao argument ili vraca funkciju kao rezultat

## callback fn - fn prosledjena kao argument i izvrsena unutar funkcije

    function morning(name) {
    return `Good morning ${name.toUpperCase()}`
    } //callback fn - do not invoke

    function greet(name, cb) {
    const myName = 'Zoran'
    console.log(`${cb(name)}, moje ime je ${myName}`)
    } //higher order fn - invoke with cb fn
    greet('Dragan', morning)
    greet('Marko', morning)
    greet('Maksa', morning)

## forEach

- does not return new array

    const people = [
    { name: 'zoran', position: 'developer', age: 35 },
    { name: 'Aca', position: 'fullstack', age: 35 },
    { name: 'maksa', position: 'system admin', age: 35 },
    ]

1.  showPerson = (person) => console.log(person.position.toUpperCase()) //callback fn za forEach
    people.forEach(showPerson) //higher order fn uzima kao argument showPerson fn

2.  //ovo je drugi nacin ispisivanja a isto rade - ovo se zove anon fn

    people.forEach(function (item) {
    console.log(item.position.toUpperCase())
    })

    people.forEach((item) => console.log(item.position.toUpperCase())) //arrow fn

## map

- doesNOT return a new array

    //opet je tu cb fn naravno
    const ages = people.map(function (person) {
    console.log(person)
    })

    //arrow fn
    const ages = people.map((person) => console.log(person))

    //map moze i da returnuje sta hoces...npr objekat

    const newPeople = people.map(function (person) {
    return {
    ime: person.name,
    oldAge: person.age,
    }
    })

## upis u DOM

    const names = people.map(function (person) {
    return `<h1>${person.name}</h1> <h3>${person.position}</h3>`
    })

    document.body.innerHTML = names.join('')

## FILTER

- does return new array
- returns based on condition

- sintaksa
    //odlskul fn metoda
    const developer = people.filter(function (person) {
    return person.position === 'developer'
    })
    //es6 arrow fn metoda
    const developer = people.filter((person) => person.position === 'developer')

## FIND

- returns single instance
- returns first match
- great for getting unique values(eg. IDs or any single prop)

- sintaksa
    //odlskul fn metoda
    const name = names.find(function (name) {
    return name === 'maksa'
    })
    //es 6 arrow fn
    const name = names.find((name => name.name ==='maksa')

## REDUCE

- reduces to a single value
- iterates, callback fn
- 1 par ('acc') - total of all calculations
- 2 par ('curr') - current iteration/value
- return je uvek acc (return acc)

- sintaksa
    const total = people.reduce(function (acc, currItem) {
    console.log(`total ${acc}`)
    console.log(`${currItem.name.toUpperCase()}'s salary : ${currItem.salary}`)
    acc += currItem.salary
    return acc
    }, 0)

## DOM

- getElementByTagName - ne moze forEach ne moze svaki css
- getElementByClassName - ne moze forEach ne moze svaki css
- querySelector - moze forEach i moze bili koji css

### childrens & parents & siblings

    const voce = document.querySelector('#voce')

    console.log(voce.children)
    console.log(voce.firstChild)
    console.log(voce.lastChild)

    console.log(voce.parentElement.parentElement.parentElement)

    console.log(voce.nextSibling) //can be white space
    console.log(voce.previousSibling) //can be white space
    console.log(voce.nextElementSibling) //can be only html element
    console.log(voce.previousElementSibling) //can be only html element

### set text & get text

    console.log(document.querySelector('#heading-one').textContent)

## classes and styles dinamically assign

    voceHeading.className = 'heading colors' -overriding previous class
    voce.classList.add='colors' - not overriding prev values
    voce.classList.remove='colors' - removig class
    voce.classList.contains='colors' - ccheck for values

## element.insertBefore([what-is-inserting],[before-what])

## element.insertAfter([what-is-inserting],[before-what])

## bubbling

- if you click on the lowest nested element with click event, by default all higher elements will fire up the event
  so you dont even need to select them to have event on them
  to se desava kad se koristi e.currentTarget i e.target

- Gornja lancana reakcije moze da se izbegne tako sto metodom 'stopPropagation' u addEventListeneru na element i ispisivanje fn koja ima samo e.stopPropagation() kao cb fn

## local storage, session storage

- browser local storage
- local storage keeps the data when closing browser
- sesion does not
- setovanje local storagea
  localStorage.setItem('name', 'zoran')

- koriscenje local storagea
  const nn = localStorage.getItem('name')

- brisanje jednog unosa
  localStorage.removeItem('')

- brisanje svih unosa
  localStorage.clear()

## JSON.stringify

### upis u local storage > setItem()/json.stringify()

    localStorage.setItem('voce', JSON.stringify(voce))

### iscitavanje iz local storage > getItem()/ json.parse()

    const values = JSON.parse(localStorage.getItem('voce'))

### uslovno iscitavanje iz localStorage i skladistenje u varijablu

    let local;
    localStorage.getItem('voce')
    ? (local = JSON.parse(localStorage.getItem('voce')))
    : (local = [])
