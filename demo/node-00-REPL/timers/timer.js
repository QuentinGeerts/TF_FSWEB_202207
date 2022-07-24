function callMe () {

  console.log("START")

  setTimeout(() => { console.log('Hello'), 1000 })

  console.log("END")

}

function callMe2 () {

  console.log("START")

  setTimeout(() => { console.log('Hello') }, 0)

  console.log("END")

}

function callMe3 () {

  console.log("START")

  setImmediate(() => { console.log('Hello') })

  console.log("END")

}

// callMe()
// callMe2()
callMe3()