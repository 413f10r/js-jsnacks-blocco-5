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

// Recupera i dati dello studente con id 2

const studentId = 2;
const foundStudent = students.find(student => student.id === studentId);

console.log(foundStudent);
// Risultato: { id: 2, name: 'Mario Banfi', age: 34, class: '4A' }