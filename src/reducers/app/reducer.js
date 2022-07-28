export const reducer=(state,action)=>{
    if(action.type==="HOME_UPDATE"){
        return  {...state,herotop:action.payload.herotop, name:action.payload.name, image:action.payload.image}
    }
    if(action.type==="ABOUT_UPDATE"){
        return  {...state,herotop:action.payload.herotop, name:action.payload.name, image:action.payload.image}
    }
    return state;
}