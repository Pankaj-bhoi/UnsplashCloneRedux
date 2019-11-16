import React, { Component } from 'react'
import './App.css';
import NavigationBar from './Components/Navbar';
import navStyle from '../src/style/NavStyle';
import 'bootstrap/dist/css/bootstrap.min.css';
import Images from './Components/Images';
import Cover from './Components/Cover';
import { Provider } from 'react-redux';
// import JumboCover from './Components/JumboCover';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <NavigationBar />
          <Cover />
          <Images />
        </div>
      </Provider>
    )
  }
}

// function App() {
//   return (
// <Provider>
//   <div>
//     <NavigationBar />
//     <Cover />
//     <Images />
//   </div>
// </Provider>
//   )
// }

export default App;
