import Form from "../../generic/form/Form.jsx";
import styleApp from '../../app.module.css'
import SmallHistory from "./smallHistory/SmallHistory.jsx";
import style from './home.module.css'

const Home = () => {
  return (
    <main className={`${style.main} ${styleApp.pageContent}`}>
      <SmallHistory/>

      <Form inputs={['id', 'link', 'date', 'dateEnd', 'percent']} buttonText='Создать задачу'/>
    </main>
  );
};

export default Home;