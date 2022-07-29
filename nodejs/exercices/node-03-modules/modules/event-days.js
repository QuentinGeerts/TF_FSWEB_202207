const getDateToUse = (month, date) => {
  const today = new Date()

  let year = today.getFullYear()

    if (today.getMonth() > month 
      || today.getMonth() === month && today.getDate() > date) year++

    return new Date(year, month, date)
}

const getDiffDays = (eventDate) => {
  const today = new Date()

  if (eventDate.getMonth() === today.getMonth() 
      && eventDate.getDate() === today.getDate()) return

    const diff = eventDate.getTime() - today.getTime()
    const oneDay = 1000 * 60 * 60 * 24

    return Math.ceil(diff / oneDay)
}

const eventDays = {

  fromChristmas: () => {
    let nextChrismas = getDateToUse(11, 25)
    return getDiffDays(nextChrismas)
  },

  fromBirthdate: (birthdate) => {
    let nextBirthdate = getDateToUse(birthdate.getMonth(), birthdate.getDate())
    return getDiffDays(nextBirthdate)
  },

  fromHolidays:  () => {
    const month = new Date().getMonth()

    if (month === 5 ||month === 6) return 0

    const nextHolidays = getDateToUse(5, 1)
    return getDiffDays(nextHolidays)
  }

}

module.exports = eventDays