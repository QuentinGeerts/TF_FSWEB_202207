console.log("Hello les fullstack web ! :)")
console.log("C'est bientôt le weekend ! :D")

const axios = require('axios')

const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=__city__&appid=2a60edfacc3acc1bde7d263a79cb5e5d&units=metric&lang=fr`

process.stdout.write("Entrez une ville : ")

process.stdin.on('readable', () => {

  const buffer = process.stdin.read()
  const city = buffer.toString('utf8').trim()

  const url = API_URL.replace('__city__', city)

  axios.get(url)
    .then(({ data }) => {
      // console.log('data :>> ', data)

      const temp = data.main.temp
      const desc = data.weather[0].description
      const location = `${data.name} ${data.sys.country}`

      console.log(`Météo de ${location}`);
      console.log(`${temp}°C ${desc}`);
    })
    .catch(err => {
      console.log('err :>> ', err);

      const { status, statusText } = err.response
      const message = err.response.data.message

      console.log(`${message}`);
    })

})