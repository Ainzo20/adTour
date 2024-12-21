type validationErrors={
    field:string;
    message:string;
};

type FormData={
    name:string;
    email:string;
    phone:string;
    password:string;
};

export const validateFormData=(data:FormData): validationErrors[]=>{
    const errors:validationErrors[]=[];
    //Name validation
    if(data.name){
        if(!/^[a-zA-Z\s]{2,50}$/.test(data.name)){
            errors.push({
                field:"name",
                message:"Name must be 2-50 characters Long and only contain letters and spaces."
            });
        }
    }else{
        errors.push({field:"name",message:"Name is required"});
    };
    //Email validation
    if(data.email){
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(data.email)){
            errors.push({
                field: "email",
                message: "Invalid email format.",
            });
         }
    } else {
        errors.push({ field: "email", message: "Email is required." });
      };
      //phone validation
    if(data.phone){
        const phoneRegex=/^\+?\d{10,15}$/;
        if(!phoneRegex.test(data.phone)){
            errors.push({
                field:"phone",
                message:"Phone number must be 10-15 digits and can include a '+' prefix."
            })
        }
    }else{
        errors.push({field:"phone",message:"phone number is required"})
    };
    //password validation
    if(data.password){
     const passwordRegex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
     if(!passwordRegex.test(data.password)){
        errors.push({
            field:"password",
            message:"Password must be at least 8 characters long, include one uppercase letter, one number, and one special character."
        })
     }
    }else{
        errors.push({field:"password",message:"Password is required"});
    };
    return errors;
};