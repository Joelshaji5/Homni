"use client"
import { data } from 'autoprefixer'
import React, { useEffect, useState } from 'react'

function Test() {


    const [productDetail, setProductDetail] = useState();
    const [buttonClciked, setButtonClicked] = useState(false);


    async function fetchdata(){
      try{
      const data = await fetch("https://dummyjson.com/products");
      const jsondata = await data.json();
      setProductDetail(jsondata.products);}
      catch(error){
        console.log(error.message)
      }  }

useEffect(()=>{
    fetchdata();

},[])

console.log(productDetail);

function clickedfun(){
  setButtonClicked(!buttonClciked)
  console.log(buttonClciked)
}


function showData(item){
  return(

    <div key={id}>
    <h1>{title}</h1>
    <p>{description}</p>
    {/* <h1>{item?.title}</h1> */}
    </div>
    )
}

  return ((
    
    <div>
      {
        productDetail?.map((item )=>
        {
          return(
            <h1>Update</h1>
            )
})
      }
      <h1>hello</h1>
      <button onClick={clickedfun}>click me</button>
    </div>
    
  ))
}

export default Test