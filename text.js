console.log('starting.....')

// 4a24ecf87731f1438d368ebc02dd5c46

// 20210921225847
// http://api.weatherstack.com/current?access_key=4a24ecf87731f1438d368ebc02dd5c46&query=19.075984,72.877656

setTimeout(()=>{
    console.log("2 second timer")
},2000)

setTimeout(()=>{
    console.log("0 second timer")  // why this comes after stopping if i am
    //not waiting 
},)


// setInterval(() => {
//     console.log("just checqing asyncrouns javascript with setIntrval")
// }, 1000);

console.log('stoping.....')
