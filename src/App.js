import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Navbar from './Component/Navbar/Navbar'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Store from './Pages/Store/Store'
import Login from './Pages/Auth/Login'
import Signup from './Pages/Auth/Signup'
import Contexts from './Contexts/Contexts'
import Rental from './Pages/Rental/Rental'
import Footer from './Component/Footer/Footer'
import Aucation from './Pages/Aucation/Aucation'
import Services from './Pages/Services/Services'
import WebDev from './Pages/Services/WebDev'
import SignleItemDetail from './Pages/Store/SignleItemDetail'
import Sale from './Pages/Sale/Sale'
import Freelance from './Pages/Freelance/Freelance'
import FreelanceForm from './Pages/Auth/FreelanceForm'
import ResumeForm from './Pages/Auth/ResumeForm'
import FreelancerProfile from './Pages/Freelance/FreelanceProfile'
import UserDashboard from './Pages/UserDashboard/UserDashboard'
import './App.css'


function App() {

  return (
    <div className="app-container">
      <Router>
        <Contexts>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/rental" component={Rental} />
              <Route exact path="/aucation" component={Aucation} />
              <Route exact path="/about" component={About} />
              <Route exact path="/services" component={Services} />
              <Route exact path="/web-developement" component={WebDev} />
              <Route exact path="/store" component={Store} />
              <Route exact path="/profile" component={UserDashboard} />
              <Route exact path="/item/:id" component={SignleItemDetail} />
              <Route exact path="/sale" component={Sale} />
              <Route exact path="/freelance" component={Freelance} />
              <Route exact path="/freelancer/:id" component={FreelancerProfile} />
              <Route exact path="/freelance-form" component={FreelanceForm} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/create-resume" component={ResumeForm} />
            </Switch>
            <Footer />
        </Contexts>
      </Router>
    </div>
  )
}

export default App;


