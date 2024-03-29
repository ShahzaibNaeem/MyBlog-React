import { useReducer,useState} from "react";
import { reducer } from "../../reducers/app/reducer";
import AppContext from "./AppContext"

const AppProvider=(props)=>{

   const initialState={
      herotop:"",
      name:"",
      image:"",
      services:[]
   }
   const [progress, setProgress] = useState(0)
   const [OpenMenu, setOpenMenu] = useState(false)
   const[state,dispatch]=useReducer(reducer,initialState);

   // -----------Home & About----------
   const updateHomePage=()=>{
      setProgress(100)
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
      setProgress(100)
      return dispatch({
         type:"ABOUT_UPDATE",
         payload:{
            herotop:"Welcome to my Website",
            name:"Shahzaib Blog",
            image:"./images/about.svg"
         }
      })
   }



   return ( 
   <AppContext.Provider value={{...state,updateHomePage,updateAboutPage,progress,setProgress,OpenMenu,setOpenMenu}}>
     {props.children}
    </AppContext.Provider>
   )
}

export default AppProvider;