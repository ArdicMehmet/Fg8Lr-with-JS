import React from 'react'

function InputGroup({labelName,inputType,inputName,placeHolder,formik}) {
  return (
    <div className='mb-5'>
        <label className='font-semibold text-xl' htmlFor={inputName}>{labelName}</label>
        <input id={inputName} name={inputName} onChange={formik.handleChange} value={formik.values[inputName]}  type={inputType} className='w-[400px] h-[60px] px-4 py-4 text-xl block mt-2.5 bg-inputBg border-inputBg rounded outline-none' placeholder={placeHolder}/>
    </div>
  )
}

export default InputGroup