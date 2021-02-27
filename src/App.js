import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {Provider} from 'react-redux';
import store from './redux/store'
import Header from './components/Header'
import Footer from './components/Footer'
import MainPage from './components/Page/MainPage'
import CatalogPage from './components/Page/CatalogPage'
import AboutPage from './components/Page/AboutPage'
import ContactsPage from './components/Page/ContactsPage'
import NotFoundPage from './components/Page/NotFoundPage'
import ProductPage from './components/Page/ProductPage'
import CartPage from './components/Page/CartPage'

import './App.css';

function App() {
  

  return (
    <Provider store={store}>
    <div className="App">
      <Router>
        <Header />
          <Switch>
            <Route path='/catalog/:id'>
              <ProductPage />
            </Route>
            <Route path='/catalog'>
              <CatalogPage />
            </Route>
            <Route path='/cart'>
              <CartPage />
            </Route>
            <Route path='/about'>
              <AboutPage />
            </Route>
            <Route path='/contacts'>
              <ContactsPage />
            </Route>
            <Route exact path='/'>
              <MainPage />
            </Route>
            <Route >
              <NotFoundPage />
            </Route>
          </Switch>
        <Footer />
      </Router>
    </div>
    </Provider>
  );
}

export default App;
