import logo from './logo.svg';
import './App.css';
import Header from "./MyComponents/Header";
import Todos from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";

function App() {
  let var1 = 345;
  let todos = [
    {
      srno:1,
      title:'go to the market',
      disc:"you need to go to the market to get this done"
    },
    {
      srno:2,
      title:'go to the mall',
      disc:"you need to go to the market to get this done3"
    },
    {
      srno:3,
      title:'go to the office',
      disc:"you need to go to the market to get this done2"
    }
  ]
  return (
    <>
      <Header title="demo" seachBar={ false }/>
      <Todos todos={todos}/>
      <Footer/>
    </>
  );
}

export default App;
