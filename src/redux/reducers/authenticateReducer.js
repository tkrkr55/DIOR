let initalState={
id:'',
password:'',
authenticate:false
}

function authenticateReducer(state=initalState,action){
let{type,payload} =action
switch(type){
  case "LOGIN_SUCCESS":
    
    return {...state,id:payload.id,password:payload.password}

    default:
      return{...state}
}
}

export default authenticateReducer