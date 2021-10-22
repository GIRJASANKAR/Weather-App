//if you want to use same variable name to create a object then you can 
//use the same variable name


const namee="gst"
const age=25
const jkdu=543

const about={
   age,
   namee,
   risk:jkdu
}

// console.log(about)


// object destructuring

const products={
    label:'red label',
    price:5000,
    stock:80,
    salesPrice:undefined
}
const {label,stock}=products
// console.log(label,stock)

// but  if you use any other name other than property then the undefined is assigned to that variable

const {salesPrice,unknown}=products
//console.log(unknown)


//but if you want you can add the property to the object like this

const {ram=55}=products
// console.log(ram)

// how to pass a object in a function

const afunction=(type,{label,price,radhe='kuntiputr'})=>{
   console.log(type)
   console.log(price)
   console.log(label)
   console.log(radhe)
   
}
afunction('yes u can',products)