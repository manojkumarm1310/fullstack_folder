export default function validation(data){
    const error ={}

    if(data.fullname === ""){
        error.fullname="* Name is Required!"
    }
    else{
        error.fullname="";
    }
    if(data.email === ""){
        error.email ="* Email is Required"
    }
    else{
        error.email="";
    }
    if(data.password === ""){
        error.password = "* Password is Required"
    }
    else{
        error.password="";
    }
    if(data.confirmpassword === ""){
        error.confirmpassword="* Confirm password is Required"
    }
    else if(data.password !== data.confirmpassword){
        error.confirmpassword ="* Confirm password did'nt match"
    }
    else{
        error.confirmpassword="";    }

    return error
}