import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { addResumeAPI } from '../services/allAPI';
import swal from 'sweetalert2'

const steps = ['Basic Information', 'Contact Details', 'Education Details','Work Experience','Skills & Certifications','Review & Submit'];
function Steps({userInput,setUserInput,setUserOutput,setResumeId}) {
  const skillSuggestionArray=['NODE JS','EXPRESS','MONGO DB','GIT','ANGULAR','REACT','HTML','CSS','TAILWIND','BOOTSTRAP']
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  //  state for storing user input data
  


  const inputRef=React.useRef()

  console.log(userInput);
  
   const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

   const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };
  const handleReset = () => {
    setActiveStep(0);
  };

  const addSkill=(inputSkill)=>{
  
    if(inputSkill){
      if(userInput.skill.includes(inputSkill.toLowerCase())){
        alert("skill already exist")
      }
      else{
        setUserInput({...userInput,skill:[...userInput.skill,inputSkill.toLowerCase()]})
      }
    }
  }

  const removeSkill=(skill)=>{
    setUserInput({...userInput,skill:userInput.skill.filter(sk=>sk!=skill)})
  }
  //render the content corresponding to the array index

  const renderStepArrayContent=(stepCount)=>{
    switch(stepCount){

      case 0:return(
        <div>
          <h3>Personal Details</h3>
         <div className='mt-3 p-3 row'>
           <TextField onChange={(e)=>setUserInput({...userInput,personalData:{...userInput.personalData,name:e.target.value}})} id="standard-name" label="Full Name" variant="standard" value={userInput.personalData.name} />
           <TextField onChange={(e)=>setUserInput({...userInput,personalData:{...userInput.personalData,jobTitle:e.target.value}})}  id="standard-job" label="Job Title" variant="standard" value={userInput.personalData.jobTitle} />
           <TextField onChange={(e)=>setUserInput({...userInput,personalData:{...userInput.personalData,location:e.target.value}})}  id="standard-loc" label="Locaton" variant="standard" value={userInput.personalData.location} />
           </div>
        </div>
      )

      case 1:
        return(
        <div>
          <h3>Contact Details</h3>
         <div className='mt-3 p-3 row'>
           <TextField onChange={(e)=>setUserInput({...userInput,personalData:{...userInput.personalData,email:e.target.value}})}  id="standard-email" label="Email" variant="standard" value={userInput.personalData.email}/>
           <TextField onChange={(e)=>setUserInput({...userInput,personalData:{...userInput.personalData,phone:e.target.value}})}  id="standard-phone" label="Phone Number" variant="standard"value={userInput.personalData.phone} />
           <TextField onChange={(e)=>setUserInput({...userInput,personalData:{...userInput.personalData,github:e.target.value}})}  id="standard-github" label="Github Profile Link" variant="standard"  value={userInput.personalData.github}/>
           <TextField onChange={(e)=>setUserInput({...userInput,personalData:{...userInput.personalData,linkedln:e.target.value}})}  id="standard-linkedln" label="Linkedln Profile Link" variant="standard" value={userInput.personalData.linkedln} />
           <TextField onChange={(e)=>setUserInput({...userInput,personalData:{...userInput.personalData,portfolio:e.target.value}})}  id="standard-portfolio" label="Portfolio Link" variant="standard" value={userInput.personalData.portfolio}/>
           </div>
        </div>
      )

      case 2:
        return(
        <div>
          <h3>Education Details</h3>
         <div className='mt-3 px-3 pb-3 row'>
           <TextField onChange={(e)=>setUserInput({...userInput,education:{...userInput.education,course:e.target.value}})}  id="standard-course" label="Course" variant="standard" value={userInput.education.course}/>
           <TextField  onChange={(e)=>setUserInput({...userInput,education:{...userInput.education,college:e.target.value}})} id="standard-college" label="College" variant="standard" value={userInput.education.college} />
           <TextField  onChange={(e)=>setUserInput({...userInput,education:{...userInput.education,university:e.target.value}})} id="standard-university" label="University" variant="standard" value={userInput.education.university} />
           <TextField  onChange={(e)=>setUserInput({...userInput,education:{...userInput.education,year:e.target.value}})} id="standard-year" label="Year Of Passout" variant="standard" value={userInput.education.year} />
          
           </div>
        </div>
      )
      case 3:
        return(
        <div>
          <h3>Professional Details</h3>
         <div className='mt-1 p-3 row'>
           <TextField  onChange={(e)=>setUserInput({...userInput,experience:{...userInput.experience,job:e.target.value}})} id="standard-jobInt" label="Job Or Internship" variant="standard" value={userInput.experience.job} />
           <TextField onChange={(e)=>setUserInput({...userInput,experience:{...userInput.experience,company:e.target.value}})} id="standard-company" label="Company" variant="standard" value={userInput.experience.company}/>
           <TextField onChange={(e)=>setUserInput({...userInput,experience:{...userInput.experience,jobLocation:e.target.value}})} id="standard-jobloc" label="Location" variant="standard" value={userInput.experience.jobLocation}  />
           <TextField onChange={(e)=>setUserInput({...userInput,experience:{...userInput.experience,duration:e.target.value}})} id="standard-duration" label="Duration" variant="standard" value={userInput.experience.duration}/>
          
           </div>
        </div>
      )
      case 4:
        return(
        <div>
          <h3>Skills</h3>
         <div className='mt-3 d-flex align-items-center justify-content-between'>
           <input ref={inputRef} id="standard-job" label="Job Or Internship" placeholder='add skill' className='form-control' sx={{width:'100%'}} />
           <Button onClick={()=>addSkill(inputRef.current.value)} variant='contained' className='ms-3'>ADD</Button>
           
           </div>
           <h5 className='mt-3'>Suggestions:</h5>
           <div className='d-flex flex-wrap justify-content-between align-items-center mt-3 gap=1'>

              {skillSuggestionArray.map(skill=>(
                <Button onClick={()=>addSkill(skill)} key={skill} variant='contained' className='ms-3'>{skill}</Button>
              ))}
           </div>
           <h5 className='mt-3'>Added Skills:</h5>
           <div className='d-flex flex-wrap justify-content-between align-items-center mt-3 gap-1'>
            {
              userInput.skill.length>0 && 
              userInput.skill.map(skill=>(
              <span className='btn btn-primary text-light'>{skill}<button onClick={()=>removeSkill(skill)} className='btn text-light'>x</button></span>
              ))
            }
            
           </div>
        </div>
      )
      case 5:
        return(
          <div>
            <h3>Professional Summary</h3>
            <div className='mt-1 p-3 row'>
              <TextField  onChange={(e)=>setUserInput({...userInput,summary:e.target.value})}  id="standard-duration" label="write a short summary of yourself" variant="standard" value={userInput.summary}/>
            </div>
          </div>
        )
        default: return null
    }
  }

  //addresume

  const handleAddResume = async()=>{
    const {name, jobTitle,location} = userInput.personalData
    if(name && jobTitle && location){
      try{
            const result=await addResumeAPI(userInput)
          console.log(result);
          if(result.status>=200 && result.status<300)
          {
            setResumeId(result?.data?.id)
         swal.fire("Resume successfully generated") 
         setUserOutput(true)  
         }
         else {
          setUserOutput(false)
         }
      }
      catch (err){
        console.log(err);
        
      }
    }
    else {
      alert("enter complete information")
    }
    
    
  }
  
  return (
    <div>
      <Box sx={{ width: '100%' }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps={};
            const labelProps={};
            if (isStepOptional(index)) {
              labelProps.optional = (
                <Typography variant="caption">Optional</Typography>
              );
            }
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1} </Typography>
              {/* view of each step */}
              <Box>
               {renderStepArrayContent(activeStep)}
  
              </Box>
            
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              {isStepOptional(activeStep) && (
                <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                  Skip
                </Button>
              )}
              {
              activeStep === steps.length - 1 ?
              <Button onClick={handleAddResume}> 
                 Finish 
              </Button>:
              <Button onClick={handleNext}>
                  Next    
              </Button>
               }


            </Box>
          </React.Fragment>
        )}
      </Box>
    </div>
  )
}

export default Steps