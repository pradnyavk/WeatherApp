const request = require('request')

const geocode = (address,callback) =>{
    const url ='https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoicHJhZG55YS1rYXRpZ2FyIiwiYSI6ImNsMWl3MzNjbzAzZ3Uza2sxZW16c2dxdnoifQ.EXXmmFf08JPdOvP0QI-Bhw&limit=1'
    request({url:url,json:true},(error,{body})=>{
        if(error){
            callback('Unable to connect to location services!',undefined)
        }else if(body.features.length === 0){
            callback('Unable to find location. Try another search.',undefined)
        }else{
            callback(undefined,{
                latitude:body.features[0].center[1],
                longitude:body.features[0].center[0],
                location:body.features[0].place_name
            })
        }
    })
}


module.exports = geocode