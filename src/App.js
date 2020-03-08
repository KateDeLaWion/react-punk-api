

import React from 'react';
import './App.css';
import ContactForm from './components/ContactForm';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link  
} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
      <div>

        <nav>
            
              <Link to="/home">*Home*</Link> 
          
              <Link to="/contact">*Requirements*</Link> 
           
              <Link to="/profile">*Profile*</Link> 
        
              <Link to="/signup">*Feedback*</Link> 
       
        </nav>
   
        <Switch>

          <Route exact path="/home"> 
            <Home />
          </Route>
          <Route path="/contact"> 
            <Contact />
          </Route>
          <Route  path="/profile"> 
            <Profile />
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
    
    </div>
  );
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

function Profile() {
  return (
    <>
    <h1>under construction</h1>
  
  </>
)

}

function ThankYou() {
  return <h2>Your submission was received.  ThankYou!</h2>;
}

export default App;














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
