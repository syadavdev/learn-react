import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent'
import UserGreeting from './components/UserGreeting'
import NameList from './components/NameList'
import StyleSheet from './components/StyleSheet'
import Inline from './components/inline'
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <Form />
      {/* <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1> */}
      {/* <EventBind></EventBind> */}
      {/* <Counter></Counter>
      <Greet name = "Sandeep" sirname = "yadav">
        <p>this is sandeep paragraph</p>  
      </Greet>
      <Greet name = "Kuldeep" sirname = "yadav">
        <button>Action</button>
      </Greet>
      <Welcome name = "sandeep" sirname = "yadav">
        <button>Action</button>
      </Welcome>
      <Message></Message>
      <Hello /> */}
      {/* <FunctionClick></FunctionClick> */}
      {/* <ClassClick></ClassClick> */}
      {/* <ParentComponent></ParentComponent> */}
      {/* <UserGreeting></UserGreeting> */}
      {/* <NameList></NameList> */}
      {/* <StyleSheet primary={true}/> */}
      {/* <Inline /> */}
    </div>
  );
}

export default App;
