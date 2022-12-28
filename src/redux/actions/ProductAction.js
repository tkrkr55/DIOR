import { productAction } from "../reducers/productReducer"

function getProduct (searchQuery){
  return async(dispatch,getState)=>{
    let url=`https://my-json-server.typicode.com/tkrkr55/DIOR/products?q=${searchQuery}`
    let res = await fetch(url)
    let data = await res.json()
    dispatch({type:"GET_PRODUCT_SUCCESS",payload:{data}})
    dispatch(productAction.getAllproduct({data}))
  }
}


export const ProductAction={getProduct}