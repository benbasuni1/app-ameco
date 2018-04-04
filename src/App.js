// Stylesheets
import './bootstrap.min.css';
import './App.css';

// React Dependencies
import React, { Component } from 'react';

// Componenets
import TopNav from './components/TopNav';
import MainContent from './components/MainContent';
import Products from './components/Products';
import ProductList from './components/ProductList';
import PopupImage from './components/PopupImage';
import Footer from './components/Footer';

class App extends Component {
  state = {
    showModal: false
  }

  triggerModal() {
    this.setState({
      showModal: true
    });
  }

  closeModal() {
    this.setState({
      showModal: false
    });
  }

  render() {
    return (
      <div>
        <TopNav />
        <MainContent/>
        <Products/>
        <ProductList 
          triggerModal={this.triggerModal.bind(this)}
        />
        <PopupImage 
          showModal={this.state.showModal}
          closeModal={this.closeModal.bind(this)}
        />
        <Footer />
      </div>
    )
  }
}

export default App;
