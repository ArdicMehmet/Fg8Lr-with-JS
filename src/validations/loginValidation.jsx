export function validateForm (values){
    
    const errors = {
      email:'',
      password:''
    };
   
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    if (!values.password) {
      errors.password = 'Required';
    } else if (!/^[a-zA-Z0-9_]*$/i.test(values.password)) {
      errors.password = 'Must be 20 characters or less';
    }

    if(!errors.email && !errors.password){
        return {
            status:true,
            errors:errors
        }
    }
    else{
        return {
            status:false,
            errors:errors
        }
    }
  };