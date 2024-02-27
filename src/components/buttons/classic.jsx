import { btnType1, btnType2 } from "../../tailwindClass/buttons";

function ClassicBtn({name,type}) {
  return (
    <button className= {type == 1 ? btnType1 : btnType2} >{name}</button>
  )
}

export default ClassicBtn