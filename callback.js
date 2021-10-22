const names=['shubham','ram','ghuh','gst','girja']

const nothing=names.filter((name)=>{
    if(name.length<=4)
        return true
    
})



// const geocode=(address,callback)=>{
//       //this is not a asyncronous fuuction and return statememnt is not gonna help inside our  asyncronous function.
//   setTimeout(()=>{
//     const data ={
//         longitude:0,
//         latitude:0
//     }

//    console.log("late ho gaya ",data)
//   },3000)

// }



// const geocode=(address,callback)=>{
//       //this is not a asyncronous fuuction and return statememnt is not gonna help inside our  asyncronous function.
//   setTimeout(()=>{
//     const data ={
//         longitude:120,
//         latitude:0
//     }
//       callback(data)
//   },3000)

// }


// geocode('mumbai',(data)=>{
//     console.log("now the latitude is become",data.latitude)
//     console.log("now the latitude is become",data.longitude)
// })




const add=(data1,data2,callback)=>{
    setTimeout(()=>{
     callback(data1+data2)
    },2000)
    // const shubham=()=>{
    //     callback(data1+data2)  //insted of using return you should use callback
    // }
    // shubham()
}


add(4,4,(sum)=>{
    console.log(sum)
})
