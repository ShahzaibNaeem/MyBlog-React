import { useReducer,useEffect,useState} from "react";
import { reducer } from "../../reducers/app/reducer";
import AppContext from "./AppContext"

const AppProvider=(props)=>{

   const API="https://shahzaibblogapi.herokuapp.com/myservices";

   const initialState={
      herotop:"",
      name:"",
      image:"",
      services:[],
      progress:0
   }
   const [progress, setProgress] = useState(0)
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

   // -----------Services---------
   const getServices=async(api)=>{
    try {
      setProgress(30);
      const response= await fetch(api);
      const data= await response.json();
      setProgress(100);
      dispatch({type:"GET_SERVICES",payload:data})
    } catch (error) {
      console.log(error);
    }
   }
    useEffect(() => {
      getServices(API);
      // eslint-disable-next-line
    }, [])

   return ( 
   <AppContext.Provider value={{...state,updateHomePage,updateAboutPage,progress,setProgress}}>
     {props.children}
    </AppContext.Provider>
   )
}

export default AppProvider;