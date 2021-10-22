const postman = require("postman-request");

const geocode = (address, callback) => {
  const url = `http://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=pk.eyJ1IjoiZ2lyamFzaGFua2FyIiwiYSI6ImNrdHY2MzRrdzA2enEyc3BqcndmaHNvdWsifQ.JxaGtkhRPEwxU_Q2JGsgBg`;

  postman({ url, json: true }, (error, {body}) => {
    if (error) {
      callback(
        "something is wrong man with this api..unable to connect",
        undefined
      );
    } else if (body.features.length ==0) {
      callback("places is not provided", undefined);
    } else {
      callback(undefined, {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        place: body.features[0].place_name,
      });
    }
  });
};

module.exports = geocode;








//   const data2=(responce.body)
//   const maindata2=(data2.features[0].place_name)
//   console.log(maindata2)
//   const maindata=(data2.features[0].center)
//   const longitude=maindata[0]
//     const latitude=maindata[1]
//   console.log("longitude is ",maindata[0])
//   console.log("latitude is ",maindata[1])

//     const url=`http://api.weatherstack.com/current?access_key=4a24ecf87731f1438d368ebc02dd5c46&query=${data.latitude},${data.longitude}`
//     //  console.log (long)
//     //  console.log (lati)

//      postman({url:url , json:true},(error,responce)=>{
//     //     const data=( JSON.parse(responce.body) )
//     if(error){
//         console.log("something is wrong connecting with weatherstack api")
//     }
//     else if(responce.body.error){
//         console.log("insufficient data",responce.body.error.info)
//         console.log("the error code is ",responce.body.error.code)

//     }

//      else{
//    const data=(responce.body.current)
//    console.log("There is "+data.temperature+"  temperature and there is "+data.precip+" % change of raining i.e, overall "+data.weather_descriptions)
//    console.log("There is "+data.temperature+"  but it feels like "+data.feelslike+" bkh")  }

// })
