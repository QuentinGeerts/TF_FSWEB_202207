const fnDisplay = (message) => {
  console.log(message)
}

setTimeout(fnDisplay, 4 * 1000, 'Hello')
setTimeout(fnDisplay, 8 * 1000, 'Y a quelqu\'un ?')
setTimeout(fnDisplay, 12 * 1000, 'Comme il n\'y a personne, je m\'en vais !')