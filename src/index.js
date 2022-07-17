import ReactDOM from "react-dom";
import Navbar from "./Navbar";
import Body from "./Body";
import Mobile from "./Mobile";

function App(){
  return (
    <div>
      <Navbar/>
      <Body/>
      <Mobile/>
    </div>
  ); 
}

ReactDOM.render(<App/>, document.querySelector('.root'));