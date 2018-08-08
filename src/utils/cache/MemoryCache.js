var stock = require('../../controller/StockController')
var mcache = require('memory-cache');
let key = '__express__'

var getCacheFn = function getCache(){
    return mcache.get(key)
}
var cacheFn = function cache(startTime){
    let cachedBody = getCacheFn()
    if (cachedBody) {
        console.log("in get ")
        //return cachedBody
    } 
    else {
        stock.getStock().then((data) => {
            mcache.put(key, data, 86400 * 1000)
        })
        console.log("in put " +(new Date().getTime() - startTime))
        //return mcache.get(key)
    }
}
exports.getCache = getCacheFn;
exports.cache = cacheFn;