import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useFormik } from 'formik';
import { useLocation, useNavigate } from 'react-router-dom'

import WelcomeIntroduction from '../../components/introduction/welcome'
import InputGroup from '../../components/inputGroup/index'
import ClassicBtn from '../../components/buttons/classic'

import {validateForm} from '../../validations/registerValidation'

import LogoXl from '../../images/logo/logo-xl.png'
import { baseUrl } from "../../api/pitonTechnology.jsx";

function RegisterAndLoginPage() {
  const [pageType, setPageType] = useState('');
  let navigate = useNavigate();
  let location = useLocation();

  useEffect(() => {
    setPageType(location.pathname)
    // Burda beni hatırla mevcutsa home a yönlendir
  }, [location])
   
  const registerFormik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    onSubmit: values => {
      console.log("On submit values: ", values);
      const formTest = validateForm(values);
      console.log("form test : ", formTest);
      let errorDescription = {}
      if (!formTest.status) {

        formTest.errors.name ? errorDescription["name"] = formTest.errors.name : ''
        formTest.errors.email ? errorDescription["email"] = formTest.errors.email : ''
        formTest.errors.password ? errorDescription["password"] = formTest.errors.password : ''

        alert(JSON.stringify(errorDescription));
      }
      else {
        axios({
          method: 'post',
          url: `${baseUrl}api/rest/register`,
          headers: {},
          data: {
            ...values
          }
        }).then(response => {
          if (response.status == 200) {
            alert('Register is successfully, you are being directed...')
            navigate('/login');
          }
        }).catch(e => {
          console.log(e);

        })
      }

    },
  });
  const loginFormik = useFormik({
    initialValues: {
      email: '',
      password: '',
      rememberMe:false,
    },
    onSubmit: values => {    
      console.log(values);

      axios({
        method: 'post',
        url: `${baseUrl}api/rest/login`,
        headers: {}, 
        data: {
          ...values
        }
      }).then(response => {
        console.log("Then icinde response", response);

        if(response.status != 200){
          alert('Register is successfully, you are being directed...')
          navigate('/home');
        }
      }).catch(e=>{

        alert('Register is unsuccessfully but you are being directed...')
        navigate('/home');
      })


    },
  });

  return (
    <div className='w-full flex'>
      <div className="leftPicture bg-[url('/src/images/Background.png')] bg-cover w-1/2 h-screen relative"></div>
      <div className="px-40 flex flex-col justify-between w-1/2">
        <div className='flex justify-center w-[400px] pt-14 pb-14'>
          <img className='w-[120px] h-[78px]' src={LogoXl} alt="Logo" />
        </div>
        <WelcomeIntroduction />
        {
          pageType == '/login' ?
            <form className='flex flex-col pb-10' onSubmit={loginFormik.handleSubmit}>
              <div className='mb-10'>
                <InputGroup labelName={"E-mail"} inputType={"text"} inputName={"email"} placeHolder={"john@mail.com"} formik={loginFormik} />
                <InputGroup labelName={"Password"} inputType={"password"} inputName={"password"} placeHolder={"● ● ● ● ● ● ● ● ●"} formik={loginFormik} />
              </div>

              <div>
                <ClassicBtn type={"submit"} name={"Login"} />
                <ClassicBtn type={"button"} name={"Register"} />
              </div>
            </form>
            :
            <form className='flex flex-col pb-10' onSubmit={registerFormik.handleSubmit}>
              <div>
                <InputGroup labelName={"Name"} inputType={"text"} inputName={"name"} placeHolder={"John Doe"} formik={registerFormik}/>
                <InputGroup labelName={"E-mail"} inputType={"text"} inputName={"email"} placeHolder={"john@mail.com"} formik={registerFormik} />
                <InputGroup labelName={"Password"} inputType={"password"} inputName={"password"} placeHolder={"● ● ● ● ● ● ● ● ●"} formik={registerFormik} />
              </div>

              <div>
                <ClassicBtn type={"submit"} name={"Register"} />
                <ClassicBtn type={"button"} name={"Login"} />
              </div>
            </form>
        }
      </div>
    </div>
  )
}

export default RegisterAndLoginPage