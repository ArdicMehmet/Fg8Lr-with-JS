import React from 'react'
import "../../css/header/style.css"

import logo_sm from "../../images/logo/logo-sm.png";
import profile_icon from "../../images/icons/Profile.png";
import heart_icon from "../../images/icons/Heart.png";
import shop_icon from "../../images/icons/Shop.png";
function Header() {
    return (
        <header className='container bg-white mx-auto px-[3rem] py-[1.75rem] flex justify-between drop-shadow'>
            <div><img src={logo_sm} alt="logo-sm" /></div>
            <div className='brand max-w-max relative flex justify-center mx-auto'><input type="text" className='bg-inputBg px-[50px] py-2.5 text-xl w-[800px] outline-none rounded' placeholder='Search' /></div>
            <div className='flex'>
                <img src={profile_icon} className='w-[50px] h-[50px] me-4 rounded' alt="profile_icon" />
                <img src={heart_icon} className='w-[50px] h-[50px] me-4 rounded' alt="heart_icon" />
                <img src={shop_icon} className='w-[50px] h-[50px] rounded' alt="shop_icon" />
            </div>

        </header>
    )
}

export default Header