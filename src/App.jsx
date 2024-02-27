import './App.css'
import './css/font.css'
import ClassicBtn from './components/buttons/classic';
import WelcomeIntroduction from './components/introduction/welcome';
import InputGroup from './components/inputGroup';

function App() {

  return (
    <>
      <WelcomeIntroduction/>
      <ClassicBtn name={"Register"} type={1} />
      <ClassicBtn name={"Login"} type={2} />
      <InputGroup labelName={"E-mail"} inputName={"email"} inputType={"text"} placeHolder={"john@email.com"} />
      <InputGroup labelName={"Password"} inputName={"password"} inputType={"password"} placeHolder={"*******"} />
    </>
  )
}

export default App
