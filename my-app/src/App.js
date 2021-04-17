import React from 'react';
import './App.css';
import Header from './Componant/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../fonts/fontawesome-webfont.eot?v=4.7.0'
//import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render (){
    return (
      <div className="Ifloor">
        <Header />
      </div>
    );
  }
}
export default App;
