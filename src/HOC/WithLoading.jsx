import React, { useEffect, useState } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const useStyle = makeStyles({
    spinner: {
        position: 'relative',
        top: '50vh',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    }
})

const WithLoading = (WrappedComponent, url) => {
    
    const WithLoadingComponent = (props) => {
        const [data, setData] = useState(null)
        const [isLoading, setIsLoading] = useState(true)

        const classes = useStyle()
        useEffect(() => {
            try{
                fetchData()
            }catch{
                toast.error('request failed')
            }
            
        }, [url])
        
        // console.log(url + props.history.location.pathname);
        const fetchData = async () => {
            const response = await fetch(url + props.history.location.pathname)
            const data = await response.json()
            setData(data)
            setIsLoading(false)
        }

        return(
            <>
                {isLoading 
                ? <CircularProgress color="secondary" className={classes.spinner}/> 
                : <WrappedComponent data={data} {...props}/>
                }
            </>
        )
    }

    return WithLoadingComponent
}

export default WithLoading



// const fetchTasks = async (id) => {
//   try{
//     const response = await fetch(`http://localhost:5000/tasks${id? '/'+id : ''}`)
//     const data = await response.json() 
    
//     return data
//   } catch (err){
//     toast.error('request failed')
//   }
// }