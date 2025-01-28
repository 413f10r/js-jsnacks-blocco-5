const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];

// Recupera la classe dello studente 'Marco Lanci'

const nomeStudente = 'Marco Lanci';

const trovaClasse = students.filter(studente => studente.name === nomeStudente);

if (trovaClasse.length > 0) {
  console.log(trovaClasse[0].class);
} else {
  console.log("Studente non trovato");
}
// Risultato: '3C'