import { useReducer,useEffect } from "react";
import { reducer } from "../../reducers/app/reducer";
import AppContext from "./AppContext"

const AppProvider=(props)=>{

   const API="https://shahzaibblogapi.herokuapp.com/myservices";

   const initialState={
      herotop:"",
      name:"",
      image:"",
      services:[]
   }
   
   const[state,dispatch]=useReducer(reducer,initialState);

   // -----------Home & About----------
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

   // -----------Services---------
   const getServices=async(api)=>{
    try {
      const response= await fetch(api);
      const data= await response.json();
      dispatch({type:"GET_SERVICES",payload:data})
    } catch (error) {
      
    }
   }
    useEffect(() => {
      getServices(API);
      // eslint-disable-next-line
    }, [])

   return ( 
   <AppContext.Provider value={{...state,updateHomePage,updateAboutPage}}>
     {props.children}
    </AppContext.Provider>
   )
}

export default AppProvider;