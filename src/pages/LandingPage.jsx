import React from 'react'
import {Link} from 'react-router-dom'
function LandingPage() {
  return (
    <div>
      {/* first section */}
        <section style={{height:'550px', backgroundImage:"url('https://tjcjobs.com/wp-content/uploads/2019/04/Job-Connection-Office-Worker-1024x576.jpeg')", backgroundSize:'cover',backgroundAttachment:'fixed'}} className='d-flex align-items-center justify-content-center'> 

       <div style={{backgroundColor:'rgb(255,255,255,0.3)'}} className='border box-shadow rounded p-5 text-center'>
         <h3 style={{fontFamily: 'Dancing script'}}>Designed to get hired. </h3>
         <h4>Your skills,your story, <br /> your next job-all in love</h4>
         <Link to={'/resume'}>
         <button className='btn btn-dark mt-4'>Mark Your Resume</button>
         </Link>
       </div>
        </section>
    
     {/* second section */}
     <section className=''>
      <h1 className='text-center my-5' style={{fontFamily:'Dancing Script'}}>Tools</h1>
      <div className='row m-3 align-items-center'>
        <div className='col-md-6 ps-5'>
          <h4>Resume</h4>
          <p>Create unlimited new resumes and easily edit them afterwards</p>
          <h4>Cover letters</h4>
          <p>Easily write professional cover letters</p>
          <h4>Jobs</h4>
          <p>Automatically receive new and relevent job postings</p>
          <h4>Applications</h4>
          <p>Effortlessly manage and track your job applications is an organized manner</p>
          </div>
           <div className='col-md-6 p-5'>
            <img className='img-fluid' src="https://cdn-images.zety.com/images/zety/landings/builder/resume-builder-jumbotron-image@3x.png" alt="" />
           </div>
          </div>
     </section> 

    <section style={{height:'450px', backgroundImage:"url('https://tse3.mm.bing.net/th/id/OIP.69QYaKhaz_g7dLe0y2nn7QHaE-?pid=Api&P=0&h=180')", backgroundSize:'cover',backgroundPosition:'center', backgroundAttachment:'fixed'}} className='d-flex align-items-center justify-content-center'>

    </section>

    {/* Testimony */}

    <section className='p-5'>
      <h1 className='text-center my-5' style={{fontFamily:'Dancing Script'}}>Testimony</h1>
      <div className='row m-3 align-items-center'>
        <div className='col-md-6 ps-5'>
          <h3>Trusted by professionals worldwide</h3>
          <p className='mt-5'>At LiveCareer,we don't just help you create resumes - we help you land the job. Whether you're a seasoned professional or just starting out, our tools are designed to get results <br /> <br />
          In fact, users who used LiveCareer reported getting hired an average of 48 days faster. <br /> <br />
          Join thousands of job-seekers who've fast-tracked their careers with a resume that truly stands out.</p>
          </div>
           <div className='col-md-6 p-5'>
           <div className='row'>
            <div className='col-3'>
              <img src="https://tse2.mm.bing.net/th/id/OIP._Z8fVK1zPE3qsG58_yxavQHaHa?pid=Api&P=0&h=180" className='w-100' alt="" />
            </div>
            <div className='col-3'><img src="https://tse4.mm.bing.net/th/id/OIP.czfU8ea1Yp138bEW4lrRFwHaHa?pid=Api&P=0&h=180" className='w-100' alt="" /></div>
            <div className='col-3'><img src="https://tse3.mm.bing.net/th/id/OIP.vSXIH3bDfAhSe8i4tx-W4wHaHa?pid=Api&P=0&h=180" className='w-100' alt="" /></div>
            <div className='col-3'><img src="https://tse4.mm.bing.net/th/id/OIP.KTPL6oTUxRv8lmHaLdHLWgHaHa?pid=Api&P=0&h=180" className='w-100' alt="" /></div>
           </div>

            <div className='row mt-2'>
            <div className='col-3'>
              <img src="https://tse3.mm.bing.net/th/id/OIP.zG442lTo6Pf6wX3zQ4WlywHaHa?pid=Api&P=0&h=180" className='w-100' alt="" />
            </div>
            <div className='col-3'><img src="https://tse2.mm.bing.net/th/id/OIP.gzp3Wbpv3n9_8Ilr4i0TRwHaHa?pid=Api&P=0&h=180" className='w-100' alt="" /></div>
            <div className='col-3'><img src="https://tse3.mm.bing.net/th/id/OIP.os7uM5TJXlUufJbHt9t7UAHaHa?pid=Api&P=0&h=180" className='w-100' alt="" /></div>
            <div className='col-3'><img src="https://tse1.mm.bing.net/th/id/OIP.JL2Zk3Mtama3eT65HbqyxAHaHa?pid=Api&P=0&h=180" className='w-100' alt="" /></div>
           </div>

            <div className='row mt-2'>
            <div className='col-3'>
              <img src="https://tse2.mm.bing.net/th/id/OIP.HarE69NbmjDkDvrfkBoHUQHaHa?pid=Api&P=0&h=180" className='w-100' alt="" />
            </div>
            <div className='col-3'><img src="https://tse1.mm.bing.net/th/id/OIP.plQs4Z2EeFESD9rXqIzmeQHaHa?pid=Api&P=0&h=180" className='w-100' alt="" /></div>
            <div className='col-3'><img src="https://tse1.mm.bing.net/th/id/OIP.L9B1n8lj7aocldq2QeKEtgHaHa?pid=Api&P=0&h=180" className='w-100' alt="" /></div>
            <div className='col-3'><img src="https://tse1.mm.bing.net/th/id/OIP.a-60MXaJfCynn5w035WvlgHaHa?pid=Api&P=0&h=180" className='w-100' alt="" /></div>
           </div>

            <div className='row mt-2'>
            <div className='col-3'>
              <img src="https://tse3.mm.bing.net/th/id/OIP.qI3bUPlhbdJzxBT3utnchAHaHa?pid=Api&P=0&h=180" className='w-100' alt="" />
            </div>
            <div className='col-3'><img src="https://tse3.mm.bing.net/th/id/OIP.RFEm0W7gArHDrxGjSvgSigHaHa?pid=Api&P=0&h=180" className='w-100' alt="" /></div>
            <div className='col-3'><img src="https://tse3.mm.bing.net/th/id/OIP.Q1v4cBkiE1bHiho_m9pURAHaHa?pid=Api&P=0&h=180" className='w-100' alt="" /></div>
            <div className='col-3'><img src="https://tse1.mm.bing.net/th/id/OIP.Jife-pDdkX2FQ7fELxxBXwHaHa?pid=Api&P=0&h=180" className='w-100' alt="" /></div>
           </div>

           </div>
          </div>
    </section>/
    </div>
  )
}

export default LandingPage