import './App.css'
import './css/font.css'
import ClassicBtn from './components/buttons/classic';
import WelcomeIntroduction from './components/introduction/welcome';
import InputGroup from './components/inputGroup';
import CardComponent from './components/cards/cardComponent';
import CardPage from './components/cards/cardPage';
import CardDetail from './components/cards/cardDetail';

function App() {

  return (
    <>
      <WelcomeIntroduction/>
      <ClassicBtn name={"Register"} type={1} />
      <ClassicBtn name={"Login"} type={2} />
      <InputGroup labelName={"E-mail"} inputName={"email"} inputType={"text"} placeHolder={"john@email.com"} />
      <InputGroup labelName={"Password"} inputName={"password"} inputType={"password"} placeHolder={"*******"} />
      <CardComponent/>
      <CardPage/>
      <CardDetail/>
    </>
  )
}

export default App
