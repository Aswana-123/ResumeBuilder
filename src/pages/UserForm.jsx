import React from 'react'
import Steps from '../Components/Steps'
import Preview from '../Components/Preview'

function UserForm() {
  const [userInput,setUserInput]=React.useState({
      personalData:{
        name:"",
        jobTitle:"",
        location:"",
        email:"",
        phone:"",
        github:"",
        linkedln:"",
        portfolio:""
      }, 
      education:{
        course:"",
        college:"",
        university:"",
        year:""
      },
      experience:{
        jobRole:"",
        company:"",
        jobLocation:"",
        duration:""
      },
      skill:[],
      summary:""
  
    })
    const [userOutput,setUserOutput]=React.useState(false)

    const [resumeId,setResumeId] =React.useState("")


  return (
    <>
      
     { 
      userOutput ?
      <div style={{minHeight:'100vh'}} className='d-flex align-items-center justify-content-center'>
         <Preview userInput={userInput}  userOutput={userOutput} resumeId={resumeId} setUserInput={setUserInput} />
      </div>
      :

      <div className='mt-5'>
        <div className='row p-5'>
          <div className='col-lg-6'>
            <Steps setResumeId={setResumeId} userInput={userInput} setUserInput={setUserInput} setUserOutput={setUserOutput}/>
          </div>
          <div className='col-lg-6'>
            <Preview userInput={userInput} userOutput={userOutput}/>
          </div>
  
        </div>
  
      </div>
      }


    </>
  )
}

export default UserForm