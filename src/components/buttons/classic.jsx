import { useNavigate } from "react-router-dom";
import { btnType1, btnType2 } from "../../tailwindClass/buttons";

function ClassicBtn({name,type}) {
  
  let navigate = useNavigate();

  function redirectControl(){
    if(type == "button") {
      navigate(`/${name.toLowerCase()}`)
    }
  }

  return (
    <button type={type} onClick={redirectControl} className= {type == "submit" ? btnType1 : btnType2} >{name}</button>
  )
}

export default ClassicBtn