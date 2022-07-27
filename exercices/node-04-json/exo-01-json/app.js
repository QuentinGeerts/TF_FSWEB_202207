import { readFile } from 'fs'

import { resolve } from 'path'

const filename = resolve('data', 'students.json')

const readJsonFile = (pathname) => {

  return new Promise((resolve, reject) => {

    readFile(pathname, (err, data) => {

      if (err) {
        reject(err)
        return
      }

      try {
        const json = JSON.parse(data)
        resolve(json)
      } catch (error) {
        reject('Json est incorrect: ', error)
      }

    })

  })

}

readJsonFile(filename)
  .then(({ results }) => {

    // console.log('results :>> ', results)

    // • Obtenir la liste des professeurs
    const profs = getProfs2(results)
    // console.log('profs :>> ', profs);
    console.log("\nListe des professeurs : ")
    for (const prof of profs) {
      console.log(` - ${prof.lastname} ${prof.firstname}`)
    }


    // • Obtenir la liste des élèves
    const students = getStudents(results)
    // console.log('students :>> ', students);
    console.log("\nListe des étudiants : ")
    for (const student of students) {
      console.log(` - ${student.lastname} ${student.firstname} : ${student.year_result ? student.year_result + '/20' : 'N/A'}`)
    }


    // • Obtenir la moyenne générale des élèves
    const avgStudents = getAvgStudents(results)
    console.log(`\nLa moyenne générale des étudiants vaut ${avgStudents.toFixed(2)}`)
    console.log(`La moyenne générale des étudiants vaut ${numberToString(avgStudents)}`)


    // • Obtenir la moyenne de chaque section
    const avgSections = getAvgSections(results)
    // console.log('avgSections :>> ', avgSections);
    console.log(`\nMoyenne par section :`)
    for (const avgSection of avgSections) {
      console.log(` - Section ${avgSection.name} ${avgSection.code} - Moyenne :  ${avgSection.avg.toFixed(2)}`)
    }

  })

// Récupération de la liste des professeurs
const getProfs = (results) => {
  const profs = []

  for (const res of results) {
    // console.log('res :>> ', res);

    profs.push(res.professor)

  }

  return profs
}

const getProfs2 = (results) => {
  return results.map(r => r.professor)
}


// Récupération de la liste des élèves
const getStudents = (results) => {

  let students = []

  for (const res of results) {
    // students = students.concat(res.students)
    students = [...students, ...res.students]
  }

  return students

}


// Récupération de la moyenne générale des élèves
const getAvgStudents = (results) => {

  const students = results
    .map(r => r.students)
    .flat()
    .filter(s => s.year_result !== null)

  // console.log('students :>> ', students)

  const total = students.reduce((accumulator, currentValue) => accumulator += currentValue.year_result, 0)

  return (total / students.length)

}

const numberToString = (number) => {
  return number.toLocaleString('fr-BE', { maximumFractionDigits: 2 })
}


// Récupération de la moyenne de chaque section
const getAvgSections = (results) => {
  const sections = []

  for (const res of results) {

    let total = 0
    let count = 0

    for (const student of res.students) {
      if (student.year_result !== null) {
        total += student.year_result
        count++
      }
    }

    const section = {
      code: res.section.code,
      name: res.section.name,
      avg: total / count
    }

    sections.push(section)

  }

  return sections
}