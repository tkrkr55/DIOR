import { createSlice } from '@reduxjs/toolkit'

let initalState ={
  productList:[],
  selectItem:null,
}

// function productReducer(state=initalState,action){
//   let{type,payload} =action
//   switch(type){
//     case "GET_PRODUCT_SUCCESS":
//       return {...state,productList:payload.data}
//     default : 
//     return{...state}
//     }

// }

// export default productReducer;

const productSlice =  createSlice ({
  name:"product",
  initalState,
  reducers:{
    getAllproduct(state,action){
      state.productList = action.payload.data
    },
    getSingleProduct(state,action){
        state.selectItem = action.payload.data
    }
  }
})

console.log("pppp",productSlice)
export const productAction = productSlice.action
export default productSlice.reducer;