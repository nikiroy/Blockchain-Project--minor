let axios = require("axios");
const coinModel = require("../models/coinModel");

// api.coincap.io/v2/assets?Authorization=5f6ea31d-9790-474c-ac7d-14b3e1410705

let getCrypto = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: "http://api.coincap.io/v2/assets",
            headers: {
                Authorization: "Bearer 5f6ea31d-9790-474c-ac7d-14b3e1410705",
            }
        }

        let result = await axios(options)
        let datels = result.data
        // console.log(Object.keys(datels))
        let coins = datels.data

        let coinarr = coins.map(a => {
            return {
                symbol: a.symbol,
                name: a.name,
                marketCapUsd: a.marketCapUsd,
                priceUsd: a.priceUsd,
                changePercent24Hr: a.changePercent24Hr
            }
        })
        coinarr = coinarr.sort((a, b) => {
            a.changePercent24Hr - b.changePercent24Hr
        })
        await coinModel.deleteMany()
        
        for (let i = 0; i < 100; i++) {
            await coinModel.create(coinarr[i])
        }

        let sortedCoins = await coinModel.find()
        return res.status(200).send({ status: true, msg: sortedCoins })
    }
    catch (err) {
        console.log(err)
        return res.status(500).send({ msg: err.message })
    }
}

// api.coincap.io/v2/assets?Authorization=5f6ea31d-9790-474c-ac7d-14b3e1410705

module.exports = { getCrypto }



// let axios = require("axios");
// const coinModel = require('../model/coinModel')



// let getCrypto = async function (req, res) {
//   try {
//     let options = {
//       method: "get",
//       url: "https://api.coincap.io/v2/assets",
//       headers: {
//         Authorization: "Bearer 8f09fb25-7f82-4035-b0d4-1ce552d5e874",
//       }
//     };
//     let result = await axios(options)
//     let details = result.data
    //console.log(object.keys(details))-----
//     let coins = details.data


//   let coinarr = coins.map(a =>{
//     return {
//       Symbol:a.Symbol,
//       name :a.name,
//       marketCapUsd:a.priceUsd,
//       chagerPercent24Hr: a.changePercent24Hr
//     }
//   })
//   coinarr = coinarr.sort((a,b) => {
//     a.chagerPercent24Hr - b.chagerPercent24Hr
//   })
//   coinarr = coinarr.sort((a,b) => {
//     a.changePercent24Hr - b.chagerPercent24Hr

//   })
   
//   for (let i = 0; i < 100; i++){
//     await coinModel.create(coinarr[i])
//   }
//    let sortedcoins = await coinModel.find()
//    return res.status(200).send({ status: true, msg: sortedcoins})

// }
// catch (err) {
//   console.log(err)
//   return res.status(500).send({ msg: err.message })

// }
// }
// ---------------------------------
//     console.log(result);
//     let data = result.data.data;
       
//      const sortVal = data.sort((a, b)=> {return a.changePercent24Hr - b.changePercent24Hr})
//     await coinModel.deleteMany()
//   const saveData = await coinModel.insertMany(sortVal)

//     res.status(200).send({ msg:sortVal, status: true });
//   } 
//   catch (err) {
//     res.status(500).send({ msg: err.message });
//   }
// };
// --------------------------------
// module.exports.getCrypto = getCrypto