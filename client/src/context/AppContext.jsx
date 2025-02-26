import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

export const AppContent = createContext()

export const AppContextProvider = (props)=>{

    const backendUrl = 'http://localhost:4000'
    const [isLoggedin, setIsLoggedin] = useState(false)
    const [userData, setUserData] = useState(false)

    const getAuthState = async () => {
        try {
            const {data} = await axios.post(backendUrl + '/api/auth/is-auth')
            console.log('code data before', data);
            if (data.success) {
                console.log('code data', data);
                setIsLoggedin(true)
                getUserData()
            }
        } catch (error) {
            // toast.error(error.message)
            toast.error("Not Authenticated")
        }
    }

    const getUserData = async () => {
        try {
            const {data} = await axios.get(backendUrl + '/api/user/data')
            data.success ? setUserData(data.userData) : toast.error(data.message)
        } catch (error) {
            toast.error(error.message)
        }
    }

    // useEffect(() => {
    //     getAuthState();
    //     console.log(isLoggedin);
    // },[])

    const value = {
        backendUrl,
        isLoggedin, setIsLoggedin,
        userData, setUserData, 
        getUserData
    }

    return (
        <AppContent.Provider value={value}>
            {props.children}
        </AppContent.Provider>
      )
}
