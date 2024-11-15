import { Outlet } from "react-router-dom";
import { useState,useEffect ,useRef} from "react";
import useRefreshToken from "../hooks/useRefreshToken";
import useAuth from "../hooks/useAuth";

const PersistLogin =()=>{
    const [loading,setLoading] = useState(true)
    const refresh = useRefreshToken()
    const {auth }= useAuth()
    const setUseffect = useRef(false)
    useEffect(()=>{
         
        const verifyRefreshToken=async()=>{
            try{
             const response = await refresh()
            }
            catch(err){
                console.error(err)
                
            }
            finally{
                setLoading(false)

            }

        }

   
      if(!auth?.accessToken){
        verifyRefreshToken()
    }
      else{
        setLoading(false)
    }
    },[])




    
    return(
        
        <>
        {

          
            loading?<p>Loading</p>
            :<Outlet/> 
           
        }
        </>
    )
}

export default PersistLogin