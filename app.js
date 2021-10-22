const request = require("request");
const postman = require("postman-request");
const geocode = require("./utils/geocode");
const weatherapi= require('./utils/weatherapi')
const url =
  "http://api.weatherstack.com/current?access_key=4a24ecf87731f1438d368ebc02dd5c46&query=19.075984,72.877656&units=s";
const url1 =
  "http://api.ipstack.com/2401:4900:5c2c:f60a:5409:195a:78cb:4453?access_key=bed93f536ee4565bc7b8ae17877547f7";
const url2 =
  "http://api.mediastack.com/v1/news?access_key=16a863517545d1c118c4add135716c20";
  const ram=process.argv[2]

  if(ram){

    geocode(ram, (error, {place,latitude,longitude}) => {
  
      if (error) {
        console.log("lgta h no error " + error);
      } else {
        console.log( place + " laitude is " + latitude +  " longitude is " + longitude )
          
    const url7 = `http://api.weatherstack.com/current?access_key=4a24ecf87731f1438d368ebc02dd5c46&query=${latitude},${longitude}`
    postman({ url: url7, json: true }, (error, responce) => {
      if (error) {
        console.log("something is wrong connecting with weatherstack api");
      } else if (responce.body.error) {
        console.log("insufficient data", responce.body.error.info);
        console.log("the error code is ", responce.body.error.code);
      }
      else{
        const data=(responce.body.current)
        console.log("There is "+data.temperature+"  temperature and there is "+data.precip+" % change of raining i.e, overall "+data.weather_descriptions)
        console.log("There is "+data.temperature+"  but it feels like "+data.feelslike+" tbh") 
     }
    });
    
         
    }
        
      })
    


  }else{
    console.log('Enter a location in command line ...')
  }


















// const location={
//   latitude:28.6667,
//   longitude:77.21667
// }
// weatherapi(location,(error,responce)=>{
//   if(error){
//     console.log(error)
//   }
//   else{
//  const data=responce
//  console.log("There is "+data.temperature+"  temperature and there is "+data.precip+" % change of raining i.e, overall "+data.weather_descriptions)
//  console.log("There is "+data.temperature+"  but it feels like "+data.feelslike+" bkl") 
//   }
// })










 










// postman(url1,(error,responce)=>{
//   const data= JSON.parse((responce.body))
//   console.log(data.location.capital)

// })

// postman(url2,(error,responce)=>{
//     const data1=JSON.parse((responce.body))
//      console.log(data1.data[1].description)
// })

// postman({url:url , json:true},(error,responce)=>{
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
//    console.log("There is "+data.temperature+" kelvin temperature and there is "+data.precip+" % change of raining i.e, overall "+data.weather_descriptions)
//    console.log("There is "+data.temperature+" kelvin but it feels like "+data.feelslike+" kelvin")  }

// })

//{url:url} => opctional object in which url is must but also if you look into the documentation
//of weatherstack we can add things also if we set json=true {json in lowercase is must } it will automatically parse json datata for us and it automatically convert to be object

//geocoding-- am api which helps us to get latitude and longitude

// const geocoding_url='http://api.mapbox.com/geocoding/v5/mapbox.places/roorkee.json?access_token=pk.eyJ1IjoiZ2lyamFzaGFua2FyIiwiYSI6ImNrdHY2MzRrdzA2enEyc3BqcndmaHNvdWsifQ.JxaGtkhRPEwxU_Q2JGsgBg'

// postman({url:geocoding_url,json:true},(error,responce)=>{
//     if(error){
//            console.log('something is wrong man with this api..')
//     } else if(responce.body.features.length==0){
//             console.log("places is not provided")
//     }
//     else{
//       const data2=(responce.body)
//       const maindata2=(data2.features[0].place_name)
//       console.log(maindata2)
//       const maindata=(data2.features[0].center)
//       console.log("longitude is ",maindata[0])
//       console.log("latitude is ",maindata[1])
//     }
// })

// if we have 4 or 5 diffrent location it is not ideal to repeat the code we should
// use a function in which we give the location and it will give uas co-ordinates..

//const url='http://api.weatherstack.com/current?access_key=4a24ecf87731f1438d368ebc02dd5c46&query={maindata[0]},{maindata[1]}&units=s'

// const geocode=(address,callback)=>{

//     // console.log(address)
//     const geocoding_url=`http://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoiZ2lyamFzaGFua2FyIiwiYSI6ImNrdHY2MzRrdzA2enEyc3BqcndmaHNvdWsifQ.JxaGtkhRPEwxU_Q2JGsgBg`

//     postman({url:geocoding_url,json:true},(error,responce)=>{
//         if(error){
//                callback('something is wrong man with this api..unable to connect',undefined)
//         } else if(responce.body.features.length==0){
//                 callback("places is not provided",undefined)
//         }
//         else{
//         //   const data2=(responce.body)
//         //   const maindata2=(data2.features[0].place_name)
//         //   console.log(maindata2)
//         //   const maindata=(data2.features[0].center)
//         //   const longitude=maindata[0]
//         //     const latitude=maindata[1]
//         //   console.log("longitude is ",maindata[0])
//         //   console.log("latitude is ",maindata[1])

//             callback(undefined,{
//                 latitude:responce.body.features[0].center[1],
//                 longitude:responce.body.features[0].center[0],
//                 place:responce.body.features[0].place_name
//             })

//         }
//     })

// }

// geocode('philadelphia',(error,data)=> {
//     if (error){
//         console.log("lgta h no error "+error)
//     }
//         else{
//         console.log(data.place+" laitude is "+data.latitude+" longitude is "+data.longitude)

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
//         }

//  })
//
// request({url: url},(error,responce)=>{
//     const data=( JSON.parse(responce.body) )
//     console.log(data.current)
// })








