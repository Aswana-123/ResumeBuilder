import BASEURL from "./baseUrl";
import commonAPI from "./commonAPI";

//addResumeAPI

export const addResumeAPI=(resume)=>{
    return commonAPI("POST",`${BASEURL}/resume`,resume)
}

//getsingleResume
export const getResumeAPI=(resumeId)=>{
    return commonAPI("GET",`${BASEURL}/resume/${resumeId}`,{})
}
//editresumeAPI
export const EditResumeAPI=(resumeId,resume)=>{
 return commonAPI("PUT",`${BASEURL}/resume/${resumeId}`,resume)
}
//AddhistoryAPI
export const AddHistoryAPI=(resume)=>{
    return commonAPI("POST",`${BASEURL}/history`,resume)
}

//gethistoryAPi
export const GetHistoryAPI=()=>{
     return commonAPI("GET",`${BASEURL}/history`,{})
}

//deletehistoryAPI
export const deleteHistoryAPI=(resumeId)=>{
 return commonAPI("DELETE",`${BASEURL}/history/${resumeId}`,{})
}