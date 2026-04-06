import { FaEdit } from "react-icons/fa";
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { maxHeight } from "@mui/system";
import TextField from '@mui/material/TextField';
import swal from 'sweetalert2'
import { EditResumeAPI, getResumeAPI } from "../services/allAPI";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  maxHeight: '80vh',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  overflowY: 'auto'
};

function Edit({ resumeId, setUpdatedUserinput}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const inputRef = React.useRef()
  console.log(resumeId);


  const [userInput, setUserInput] = React.useState({})

React.useEffect(()=>{
  getResume()
},[resumeId])

  const getResume = async () => {
    try {
      const result = await getResumeAPI(resumeId)
      console.log(result);
      setUserInput(result?.data)

    }
    catch (err) {
      console.log(err);

    }
  }

  const addSkill = (inputSkill) => {
    let skill = inputSkill.current.value
    if (skill) {
      if (userInput.skill.includes(skill.toLowerCase())) {
        alert("skill already exist")
      }
      else {
        setUserInput({ ...userInput, skill: [...userInput.skill, skill.toLowerCase()] })
      }
      inputSkill.current.value = ""
    }
  }

  const removeSkill = (skill) => {
    setUserInput({ ...userInput, skill: userInput.skill.filter(sk => sk != skill) })
  }

  const updateResume = async () => {
    try {
      const result = await EditResumeAPI(resumeId, userInput)
      //console.log(result);
      if (result.status >= 200 && result.status < 300) {
        setUpdatedUserinput(result?.data)
        handleClose()
        swal.fire("Resume updated successfully ")
      }

    }
    catch (err) {
      console.log(err);

    }

  }

  return (
    <div>
      <button onClick={handleOpen} className='btn fs-3 text-primary'><FaEdit /></button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Details
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {/* personal details */}
            <h3>Personal Details</h3>
            <div className='mt-3 p-3 row'>
              <TextField onChange={(e) => setUserInput({ ...userInput, personalData: { ...userInput.personalData, name: e.target.value } })} id="standard-name" label="Full Name" variant="standard" value={userInput?.personalData?.name} />
              <TextField onChange={(e) => setUserInput({ ...userInput, personalData: { ...userInput.personalData, jobTitle: e.target.value } })} id="standard-job" label="Job Title" variant="standard" value={userInput?.personalData?.jobTitle} />
              <TextField onChange={(e) => setUserInput({ ...userInput, personalData: { ...userInput.personalData, location: e.target.value } })} id="standard-loc" label="Locaton" variant="standard" value={userInput?.personalData?.location} />
            </div>

            {/*contact details  */}
            <h3>Contact Details</h3>
            <div className='mt-3 p-3 row'>
              <TextField onChange={(e) => setUserInput({ ...userInput, personalData: { ...userInput.personalData, email: e.target.value } })} id="standard-email" label="Email" variant="standard" value={userInput?.personalData?.email} />
              <TextField onChange={(e) => setUserInput({ ...userInput, personalData: { ...userInput.personalData, phone: e.target.value } })} id="standard-phone" label="Phone Number" variant="standard" value={userInput?.personalData?.phone} />
              <TextField onChange={(e) => setUserInput({ ...userInput, personalData: { ...userInput.personalData, github: e.target.value } })} id="standard-github" label="Github Profile Link" variant="standard" value={userInput?.personalData?.github} />
              <TextField onChange={(e) => setUserInput({ ...userInput, personalData: { ...userInput.personalData, linkedln: e.target.value } })} id="standard-linkedln" label="Linkedln Profile Link" variant="standard" value={userInput?.personalData?.linkedln} />
              <TextField onChange={(e) => setUserInput({ ...userInput, personalData: { ...userInput.personalData, portfolio: e.target.value } })} id="standard-portfolio" label="Portfolio Link" variant="standard" value={userInput?.personalData?.portfolio} />
            </div>
            {/*  Education details */}
            <h3>Education Details</h3>
            <div className='mt-3 px-3 pb-3 row'>
              <TextField onChange={(e) => setUserInput({ ...userInput, education: { ...userInput.education, course: e.target.value } })} id="standard-course" label="Course" variant="standard" value={userInput?.education?.course} />
              <TextField onChange={(e) => setUserInput({ ...userInput, education: { ...userInput.education, college: e.target.value } })} id="standard-college" label="College" variant="standard" value={userInput?.education?.college} />
              <TextField onChange={(e) => setUserInput({ ...userInput, education: { ...userInput.education, university: e.target.value } })} id="standard-university" label="University" variant="standard" value={userInput?.education?.university} />
              <TextField onChange={(e) => setUserInput({ ...userInput, education: { ...userInput.education, year: e.target.value } })} id="standard-year" label="Year Of Passout" variant="standard" value={userInput?.education?.year} />

            </div>
            {/* Professional details */}
            <h3>Professional Details</h3>
            <div className='mt-1 p-3 row'>
              <TextField onChange={(e) => setUserInput({ ...userInput, experience: { ...userInput.experience, job: e.target.value } })} id="standard-jobInt" label="Job Or Internship" variant="standard" value={userInput?.experience?.job} />
              <TextField onChange={(e) => setUserInput({ ...userInput, experience: { ...userInput.experience, company: e.target.value } })} id="standard-company" label="Company" variant="standard" value={userInput?.experience?.company} />
              <TextField onChange={(e) => setUserInput({ ...userInput, experience: { ...userInput.experience, jobLocation: e.target.value } })} id="standard-jobloc" label="Location" variant="standard" value={userInput?.experience?.jobLocation} />
              <TextField onChange={(e) => setUserInput({ ...userInput, experience: { ...userInput.experience, duration: e.target.value } })} id="standard-duration" label="Duration" variant="standard" value={userInput?.experience?.duration} />

            </div>

            {/*skill  */}
            <h3>Skills</h3>
            <div className='mt-3 d-flex align-items-center justify-content-between'>
              <input ref={inputRef} id="standard-job" label="Job Or Internship" placeholder='add skill' className='form-control' sx={{ width: '100%' }} />
              <Button onClick={() => addSkill(inputRef)} variant='contained' className='ms-3'>ADD</Button>

            </div>

            <h5 className="mt-3">Added Skills:</h5>
            <div className='d-flex flex-wrap justify-content-between align-items-center mt-3 gap-1'>

              {
                userInput?.skill?.map(skill => (
                  <span className="btn btn-primary text-light">{skill} <button className="btn text-light" onClick={() => removeSkill(skill)}>x</button></span>
                ))
              }

            </div>
            {/* professional sumary */}
            <h3>Professional Summary</h3>
            <div className='mt-1 p-3 row'>
              <TextField onChange={(e) => setUserInput({ ...userInput, summary: e.target.value })} id="standard-duration" label="write a short summary of yourself" variant="standard" value={userInput?.summary} />
            </div>
          </Typography>
          {/* update */}
          <button onClick={updateResume} className="btn text-primary">Update</button>
        </Box>
      </Modal>
    </div >
  )
}

export default Edit
