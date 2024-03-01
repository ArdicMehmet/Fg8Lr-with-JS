import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useFormik } from 'formik';
import { useLocation, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';

import {authChange} from '../../redux/user/userSlice.js'

import WelcomeIntroduction from '../../components/introduction/welcome'
import InputGroup from '../../components/inputGroup/index'
import ClassicBtn from '../../components/buttons/classic'

import { validateForm as registerValidate } from '../../validations/registerValidation'
import { validateForm as loginValidate } from '../../validations/loginValidation.jsx'
import LogoXl from '../../images/logo/logo-xl.png'
import { baseUrl } from "../../api/pitonTechnology.jsx";

function RegisterAndLoginPage() {
  const [pageType, setPageType] = useState('');
  const [remember, setRemember] = useState(false);
  const { user } = useSelector(state => state.user);
  let navigate = useNavigate();
  let location = useLocation();

  const dispatch = useDispatch();

  useEffect(() => {
    setPageType(location.pathname)
    localStorage.getItem("auth") ? navigate('/home'): ''
  }, [location])

  const registerFormik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    onSubmit: values => {
      const formTest = registerValidate(values);
      let errorDescription = {}
      if (!formTest.status) {

        formTest.errors.name ? errorDescription["name"] = formTest.errors.name : ''
        formTest.errors.email ? errorDescription["email"] = formTest.errors.email : ''
        formTest.errors.password ? errorDescription["password"] = formTest.errors.password : ''

        alert(`Register is unsuccessfully, ${JSON.stringify(errorDescription)}`)
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
            alert(`Register is successfully, you are being directed...,`)
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
      rememberMe: false,
    },
    onSubmit: values => {
      const formTest = loginValidate(values);
      let errorDescription = {}
      if (!formTest.status) {

        formTest.errors.email ? errorDescription["email"] = formTest.errors.email : ''
        formTest.errors.password ? errorDescription["password"] = formTest.errors.password : ''
        alert(`Login is unsuccessfully, ${JSON.stringify(errorDescription)}`)

      }
      else {
        axios({
          method: 'post',
          url: `${baseUrl}api/rest/login`,
          headers: {},
          data: {
            email: values.email,
            password : values.password
          }
        }).then(response => {

          if (response.status == 200) {
            dispatch(authChange()); 
            if(remember){
              localStorage.setItem('auth', true);
            }
            alert('"Login is successfully, you are being directed..."')
            navigate('/home');
            
            
          }
        }).catch(e => {
          
          alert(`Register is unsuccessfully, please try again ${JSON.stringify(e)}`)
        })
      }

    },
  });
  const handleClick= ()=>{
    setRemember(prev=> !prev)
  } 

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
            <form className='flex flex-col pb-1 justify-between' onSubmit={loginFormik.handleSubmit}>
              <div className='mb-5'>
                <InputGroup labelName={"E-mail"} inputType={"text"} inputName={"email"} placeHolder={"john@mail.com"} formik={loginFormik} />
                <InputGroup labelName={"Password"} inputType={"password"} inputName={"password"} placeHolder={"● ● ● ● ● ● ● ● ●"} formik={loginFormik} />
                <div className='mb-5 flex items-center'>
                  <input type="checkbox" onClick={handleClick} name={"remember"} id={"rememberMe"} className={`w-4 h-4 me-2 mt-1 accent-deep_purple border-deep_purple`} />
                  <label htmlFor={"rememberMe"} className={`text-left text-xl text-deep_purple font-semibold text-base text-deep_purple-400`}>{"Remember Me"}</label>
                </div>
              </div>
              <div className='pb-[40px]'>
                <ClassicBtn type={"submit"} name={"Login"} />
                <ClassicBtn type={"button"} name={"Register"} />
              </div>
            </form>
            :
            <form className='flex flex-col pb-10' onSubmit={registerFormik.handleSubmit}>
              <div>
                <InputGroup labelName={"Name"} inputType={"text"} inputName={"name"} placeHolder={"John Doe"} formik={registerFormik} />
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