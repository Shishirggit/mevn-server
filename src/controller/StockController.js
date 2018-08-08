const stockApi = require('../Api/StockApi')

module.exports = {
/*     getStock (req, res) {
        stockApi.create().get('https://www.nseindia.com/live_market/dynaContent/live_watch/stock_watch/niftyStockWatch.json')
            .then(response => {
                res.send({
                    success: true,
                    message: 'Stock get successfully!',
                    data: response.data.data
                })
            })
    } */
    getStock () {
        return stockApi.create().get('niftyStockWatch.json')
            .then(response => {
                console.log("logged stock")
                return response.data.data
            })
    }
}