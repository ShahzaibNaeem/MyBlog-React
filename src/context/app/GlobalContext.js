import { useContext } from "react"
import AppContext from "./AppContext"

const GlobalContext=()=>{
    return useContext(AppContext);
}

export default GlobalContext;