import { useEffect } from "react"
import { useState } from "react"

const useAdmin=email=>{
    const [isAdmin,setIsAdmin]=useState(false)
    const [isAdminLoading,setIsAdminLoading]=useState(true)
    useEffect(()=>{
        if(email){
            fetch(`https://bikroy-server.vercel.app/isadmin/${email}`)
            .then(res=>res.json())
            .then(data=>{
                setIsAdmin(data.isadmin)
                setIsAdminLoading(false)
            })
        }
    },[email])
    return [isAdmin,isAdminLoading]
}
export default useAdmin