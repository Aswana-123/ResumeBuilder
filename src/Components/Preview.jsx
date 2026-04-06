import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom'
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { FaFileDownload } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import Edit from '../Components/Edit'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import { AddHistoryAPI } from '../services/allAPI';


function Preview({ userInput, userOutput, resumeId, setUserInput }) {
  console.log(userInput);
  const [downloadStatus, setDownloadStatus] = useState(false)

 

  const downloadCV = async () => {
    //get element for taking screenshort
    try {
      const input = document.getElementById("result")
      //convert DOM into canvas
      const canvas = await html2canvas(input, { scale: 1 })
      const imgURL = canvas.toDataURL('image/png')
      console.log(imgURL);

      //create pdf
      const pdf = new jsPDF()
      const pdfWidth = pdf.internal.pageSize.getWidth()
      const pdfHeight = pdf.internal.pageSize.getHeight()

      //add image to pdf
      pdf.addImage(imgURL, 'PNG', 0, 0, pdfWidth, pdfHeight)
      pdf.save('resume.pdf')

      //get current date and time

      const locatTime = new Date()
      const timeStamp = `${locatTime.toLocaleDateString()}, ${locatTime.toLocaleTimeString()}`
      console.log(timeStamp);


      try {
        const result = await AddHistoryAPI({ ...userInput, imgURL, timeStamp })
        console.log(result);
        if (result.status >= 200 && result.status < 300) {
          setDownloadStatus(true)
        }

      }
      catch (err) {
        console.log(err);

      }
    }
    catch (err) {
      console.log("pdf generation failed", err);

    }
  }
  return (

    <>
      {
        userInput.personalData.name != "" &&

        <div style={{ marginTop: '70px' }}>
          {
            userOutput &&
            <Stack direction={'row'} sx={{ justifyContent: 'flex-end', alignItems: 'center' }}>
              {/* download */}
              <button onClick={downloadCV} className='btn fs-3 text-primary'><FaFileDownload /></button>
              {
                downloadStatus &&
                <>
                  {/* edit */}
                  <Edit resumeId={resumeId} setUpdatedUserinput={setUserInput}  />
                  {/* history */}
                  <Link to={'/history'} className='btn fs-3 text-primary'><FaHistory /></Link>
                </>
              }

              {/* back */}
              <Link to={'/'} className='btn fs-5 text-primary'>Back</Link>

            </Stack>
          }

          <Box component="section">
            <Paper elevation={3} sx={{ p: 2, textAlign: 'center' }} id="result">
              <h3>{userInput.personalData.name}</h3>
              <h6>{userInput.personalData.jobTitle}</h6>
              <p><span>{userInput.personalData.location}</span>|<span>{userInput.personalData.email}</span>|<span>{userInput.personalData.phone}</span></p>
              <p>
                <Link hrefLang={''}>{userInput.personalData.github}</Link>|
                <Link hrefLang={''}>{userInput.personalData.linkedln}</Link>|
                <Link hrefLang={''}>{userInput.personalData.portfolio}</Link>
              </p>
              <Divider sx={{ fontSize: '23px' }}>SUMMARY</Divider>
              <p className='fs-5 text-start'> {userInput.summary}</p>
              <Divider sx={{ fontSize: '23px', marginBottom: '20px' }}>EDUCATION</Divider>
              <h6 className='text-start'>{userInput.education.course}</h6>
              <p><span>{userInput.education.college}</span>|<span>{userInput.education.university}</span>|<span>{userInput.education.year}</span></p>
              <Divider sx={{ fontSize: '23px', marginBottom: '20px' }}>PROFESSIONAL EXPERIENCE</Divider>
              <h6 className='text-start'>{userInput.experience.jobRole}</h6>
              <p><span>{userInput.experience.company}</span>|<span>{userInput.experience.jobLocation}</span>|<span>{userInput.experience.duration}</span></p>
              <Divider sx={{ fontSize: '23px', marginBottom: '20px' }}>SKILLS</Divider>
              <Stack justifyContent={'space-evenly'} direction="row" spacing={2} sx={{ flexWrap: 'Wrap', gap: '10px' }}>
                {
                  userInput.skill.map(skill => (
                    <Button variant="contained">{skill}</Button>
                  ))
                }


              </Stack>

            </Paper>
          </Box>
        </div>
      }
    </>
  )
}

export default Preview
