import React, { useEffect, useState } from 'react'
import WelcomeIntroduction from '../../components/introduction/welcome'
import InputGroup from '../../components/inputGroup/index'
import ClassicBtn from '../../components/buttons/classic'

import { useLocation } from 'react-router-dom'
import LogoXl from '../../images/logo/logo-xl.png'


function RegisterAndLoginPage() {
  const [pageType, setPageType] = useState('');
  let location = useLocation();

  useEffect(() => {
    setPageType(location.pathname)
  }, [location])

  return (
    <div className='w-full flex'>
      <div className="leftPicture bg-[url('/src/images/Background.png')] bg-cover w-1/2 h-screen relative"></div>
      <div className="px-40 flex flex-col justify-between w-1/2">
        <div className='flex justify-center w-100 pt-14 pb-14'>
          <img className='w-[120px] h-[78px]' src={LogoXl} alt="Logo" />
        </div>
        <WelcomeIntroduction />
        {
          pageType == '/login' ?
            <form className='flex flex-col pb-10'>
              <div className='mb-10'>
                <InputGroup labelName={"E-mail"} inputType={"text"} inputName={"email"} placeHolder={"john@mail.com"} />
                <InputGroup labelName={"Password"} inputType={"password"} inputName={"password"} placeHolder={"● ● ● ● ● ● ● ● ●"} />
              </div>

              <div>
                <ClassicBtn type={1} name={"Login"} />
                <ClassicBtn type={2} name={"Register"} />
              </div>
            </form>
            :
            <form className='flex flex-col pb-10'>
              <div>
                <InputGroup labelName={"name"} inputType={"ext"} inputName={"name"} placeHolder={"John Doe"} />
                <InputGroup labelName={"E-mail"} inputType={"text"} inputName={"email"} placeHolder={"john@mail.com"} />
                <InputGroup labelName={"Password"} inputType={"password"} inputName={"password"} placeHolder={"● ● ● ● ● ● ● ● ●"} />
              </div>

              <div>
                <ClassicBtn type={1} name={"Register"} />
                <ClassicBtn type={2} name={"Login"} />
              </div>
            </form>
        }
      </div>
    </div>
  )
}

export default RegisterAndLoginPage