import React from 'react';
import Header from '../components/Header';
import ProductList from '../components/ProductList';
import Cart from '../components/Cart';
import NotFoundPage from '../components/NotFoundPage';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginComponent from '../components/LoginComponent';
import RegisterComponent from '../components/RegisterComponent';
import ForgetPassComponent from '../components/ForgetPassComponent';
import DegustacionesList from '../components/DegustacionesList';
import AddDegustacionComponent from '../components/AddDegustacionComponent';
import EditarPerfilVacioComponent from '../components/EditarPerfilVacioComponent';
import GalardonesList from '../components/GalardonesList';
import AddFriendComponent from '../components/AddFriendComponent';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={LoginComponent} exact={true} />
                <Route path="/degustaciones" component={DegustacionesList} />
                <Route path="/login" component={LoginComponent} />
                <Route path="/register" component={RegisterComponent} />
                <Route path="/passwordRecovery" component={ForgetPassComponent} />
                <Route path="/addDegustacion" component={AddDegustacionComponent} />
                <Route path="/cart" component={Cart} />
                <Route path="/editarPerfil" component={EditarPerfilVacioComponent} />
                <Route path="/galardones" component={GalardonesList} />
                <Route path="/addFriend" component={AddFriendComponent} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;