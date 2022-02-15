import { Component } from 'react';
import Products from './components/Products'
import Layout from './components/Layout'
import Title from './components/Title'
import Navbar from './components/Navbar'


class App extends Component{

  state = {
    products: [
      {name: 'Tomato', price: 1500, img: '/productos/tomate.jpg'},
      {name: 'Peas', price: 2500, img: '/productos/arbejas.jpg'},
      {name: 'Lettuce', price: 500, img: '/productos/lechuga.jpg'},
    ],
    cart: [],
    isCartVisible: false,
  }

  addToCart = (product) => {
    const { cart } = this.state
    if (cart.find(x => x.name === product.name)){
      
      const newCart = cart.map(x => x.name === product.name ? ({ ...x, quantity: x.quantity + 1}) : x)

      return this.setState({cart: newCart})
    }
    return this.setState({
      cart: this.state.cart.concat({
        ...product,
        quantity: 1
      })
    })
  }

  showCart = () => {
    if(!this.state.cart.length){
      return;
    }
    this.setState({isCartVisible: !this.state.isCartVisible})
  }

  render(){
    const { showCart, isCartVisible } = this.state
    return (
      <div>
        <Navbar 
          isCartVisible={isCartVisible} 
          showCart={this.showCart} 
          cart={this.state.cart}
        />
        <Layout>
          <Title />
          <Products 
            addToCart={this.addToCart}
            products={this.state.products}
          />
        </Layout>
      </div>
    )
  }
}

export default App;