
import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import './index.scss';



import Header from './components/Header/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './containers/user/Login/Login';
import Register from './containers/user/Register/Register';
import QuienesSomos from './containers/quienesSomos/QuienesSomos';
import Libros from './containers/libros/Libros';
import Materias from './containers/materias/Materias';
import Talleres from './containers/talleres/Talleres';
import DondeEstamos from './containers/dondeEstamos/DondeEstamos';
import Precios from './containers/precios/Precios';
import Inicio from './containers/inicio/Inicio';
import Users from './containers/users/Users';
import Profile from './containers/profile/Profile';
import User from './containers/user/User/User';
import Footer from './components/Footer/Footer';





function App() {
  return (

    <div className="App">

      <BrowserRouter>
        <Header />
        <Switch>
          <Route path='/' component={Inicio} exact />
          <Route path='/Inicio' component={Inicio} exact />
          <Route path='/login' component={Login} exact />
          <Route path='/register' component={Register} exact />
          <Route path='/quienessomos' component={QuienesSomos} exact />
          <Route path='/libros' component={Libros} exact />
          <Route path='/materias' component={Materias} exact />
          <Route path='/talleres' component={Talleres} exact />
          <Route path='/precios' component={Precios} exact />
          <Route path='/dondeestamos' component={DondeEstamos} exact />
          <Route path='/users' component={Users} exact />
          <Route path='/profile' component={Profile} exact />
          <Route path='/user/:id' component={User} exact />
        </Switch>
        <Footer />

         <Switch>
          <Route path='/footer' component={Footer} exact />
        </Switch>

        </BrowserRouter>
        
    </div>


  );
}

export default App;