const axios = require('axios')

module.exports = {
  create(){  
    return axios.create({
      baseURL: 'https://www.nseindia.com/live_market/dynaContent/live_watch/stock_watch/',
      headers: { 'content-type': 'application/x-www-form-urlencoded' }
    })
  }
}
