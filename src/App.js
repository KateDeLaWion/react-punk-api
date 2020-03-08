
import React, { Component } from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link  
} from 'react-router-dom';

import './App.css';
import View from './components/View';
import ContactForm from './components/ContactForm';
import { UserProvider } from './components/UserContext';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // data: {}, can work too. 
      mydata: [],
      punkData: []
    };
  }


  setPunkData() {
    this.setState({
      punkData: this.state.mydata.data
    })

    // console.log(this.state.punkData);
  }


  componentDidMount() {
    fetch('https://api.punkapi.com/v2/beers')
      .then((anythingone) => {
        return anythingone.json();
      })
      .then((theirdata) => {
        console.log(theirdata);
              
        this.setState({
          mydata: theirdata
        })

       // this.setPunkData();
      })
  }

  render() {
    console.log(this.state.mydata)
    return (
      
      <div className="App">
        <UserProvider value = {this.state.mydata}>
      <Router>
      <div>

        <nav>
            
              <Link to="/home">*Home*</Link> 
          
              <Link to="/contact">*Requirements*</Link> 
           
              <Link to="/view">*View*</Link> 
        
              <Link to="/signup">*Feedback*</Link> 
       
        </nav>
   
        <Switch>

          <Route exact path="/home"> 
            <Home />
          </Route>
          <Route path="/contact"> 
            <Contact />
          </Route>
          <Route  path="/view"> 
            <View />
          </Route>
          <Route  path="/signup"> 
            <ContactForm />
          </Route>
          <Route  path="/thank-you"> 
            <ThankYou />
          </Route>
          
        </Switch>
      </div>
    </Router>
    </UserProvider>
    </div>
      
    )
  }
}



 function Home() {
  return (
  <>
    <h2>Welcome to my MOD2 W3 D2: Context API Fetch</h2>
  
  </>
)
}

function Contact() {
  return (
    <>
    <h1>Requirements</h1>
  <br></br>
  <h3>Fetch the data from punk api</h3>
  <h3>implement routing</h3>
  </>
)
}


function ThankYou() {
  return <h2>Your submission was received.  ThankYou!</h2>;
}


















// React original format:
// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
