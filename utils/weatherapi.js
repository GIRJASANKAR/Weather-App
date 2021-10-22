const postman=require('postman-request')

  const weatherapi=(data,callback)=>{
    const url = `http://api.weatherstack.com/current?access_key=4a24ecf87731f1438d368ebc02dd5c46&query=${data.latitude},${data.longitude}`
 
    postman({ url, json: true }, (error, {body}) => {
   if (error) {
    callback("something is wrong connecting with weatherstack api",undefined)
  } else if (body.error) {
  
    callback("insufficient data",undefined)
  }
  else{
      callback(undefined,body.current)

  }
    })

}
   

  // console.log("insufficient data", responce.body.error.info);
    // console.log("the error code is ", responce.body.error.code);


// const url = `http://api.weatherstack.com/current?access_key=4a24ecf87731f1438d368ebc02dd5c46&query=${data.latitude},${data.longitude}`;
// postman({ url: url, json: true }, (error, responce) => {
//   if (error) {
//     console.log("something is wrong connecting with weatherstack api");
//   } else if (responce.body.error) {
//     console.log("insufficient data", responce.body.error.info);
//     console.log("the error code is ", responce.body.error.code);
//   }
//   else{
//     const data=(responce.body.current)
//     console.log("There is "+data.temperature+"  temperature and there is "+data.precip+" % change of raining i.e, overall "+data.weather_descriptions)
//     console.log("There is "+data.temperature+"  but it feels like "+data.feelslike+" bkh") 
//  }


// });



module.exports=weatherapi;