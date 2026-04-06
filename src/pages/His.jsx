import React, { useEffect } from 'react'
import { GetHistoryAPI } from '../services/allAPI'
import Paper from '@mui/material/Paper'
import { FaTrash } from 'react-icons/fa'
import {deleteHistoryAPI } from '../services/allAPI'


function His() {
    const [history, setHistory] = React.useState([])
    console.log(history);
    
    useEffect(() => {
        getHistory()
    }, [])

    const getHistory = async () => {
        const result = await GetHistoryAPI()
        console.log(result);
        if (result.status >= 200 && result.status < 300) {
            setHistory(result.data)
        }

    }

    const removeHistory=async (resumeId)=>{
      try {
        const result = await deleteHistoryAPI(resumeId)
        getHistory()
       
        
      }
      catch (err) {
        console.log(err);
        
      }
    }
    return (
       <div className='row m-5'>

        {
            history?.length >0?
            history.map(resume=>(
                <div className='col-md-4'>
                <Paper elevation={3} sx={{my:5,p:5,textAlign:'center'}}>
                    <div className='d-flex align-items-center justify-content-between'>
                        <h6>Review At:{resume.timestamp}</h6>
                        <button onClick={()=>removeHistory(resume.id)} className='btn text-danger'><FaTrash/></button>
                    </div>
                    <div>
                        <img src={resume.imgURL} alt="" className='w-100' />
                    </div>

                </Paper>

            </div>
            ))
            :
            <div className='text-danger fw-bold p-5'>
                No Resume Generated Yet 

            </div>
        }

       </div>
   


    )
}

export default His