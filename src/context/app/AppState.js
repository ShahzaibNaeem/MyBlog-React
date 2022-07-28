import { useReducer } from "react";
import { reducer } from "../../reducers/app/reducer";
import AppContext from "./AppContext"

const AppProvider=(props)=>{
   const initialState={
    herotop:"",
    name:"",
    image:""
   }
   const updateHomePage=()=>{
      return dispatch({
         type:"HOME_UPDATE",
         payload:{
            herotop:"This is me",
            name:"Shahzaib Naeem",
            image:"./images/hero.svg"
         }
      })
   }
   const updateAboutPage=()=>{
      return dispatch({
         type:"ABOUT_UPDATE",
         payload:{
            herotop:"Welcome to my Website",
            name:"Shahzaib Blog",
            image:"./images/about.svg"
         }
      })
   }
   
   const[state,dispatch]=useReducer(reducer,initialState);

   return ( 
   <AppContext.Provider value={{...state,updateHomePage,updateAboutPage}}>
     {props.children}
    </AppContext.Provider>
   )
}

export default AppProvider;