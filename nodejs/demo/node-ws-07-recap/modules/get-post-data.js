module.exports = (request, limit = 1e6) => {

  return new Promise((resolve, reject) => {

    if (request != null) {

      let recupData = ""

      request.on('data', data => {
        recupData += data

        if (recupData.length > limit) {
          request.socket.destroy()
          reject('Flood attack')
        }
      })

      request.on('end', () => {

        
        try {
          // const dataPost = qs.parse(body)
          const dataPost = new URLSearchParams(recupData)
          const dataPostObject = Object.fromEntries(dataPost)

          console.log('dataPost :>> ', dataPost);
          console.log('dataPostObject :>> ', dataPostObject);
          resolve(dataPostObject)
          resolve(dataPost)
        } catch (error) {
          reject('Parse error')
        }

      })

    }
    else {
      reject('Request is null')
    }

  })

}