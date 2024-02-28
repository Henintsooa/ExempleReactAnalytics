import './App.css';
import Header from './components/Header';
// import '/assets/css/styles.css';
import Item from './components/Item';
import Aside from './components/Aside';
import Footer from './components/Footer';
import React, { useState, useEffect } from 'react';

function App() {
  const initialItems = [
    {
      img: '/assets/img/1.png',
      img1: '/assets/img/3.jpg',
      img2: '/assets/img/2.jpg',
      img3: '/assets/img/1.png',
      price: 15000,
      stock: 9,
      button: 'Add to cart',
    },
    {
      img: '/assets/img/2.jpg',
      img1: '/assets/img/3.jpg',
      img2: '/assets/img/2.jpg',
      img3: '/assets/img/1.png',
      price: 10000,
      stock: 9,
      button: 'Add to cart',
    },
    {
      img:'/assets/img/3.jpg',
      img1:'/assets/img/2.jpg',
      img2:'/assets/img/1.png',
      img3:'/assets/img/3.jpg',
      price:20000,
      stock:9,
      button:'Add to card',
    },
    {
      img: '/assets/img/1.png',
      img1: '/assets/img/3.jpg',
      img2: '/assets/img/2.jpg',
      img3: '/assets/img/1.png',
      price: 15000,
      stock: 9,
      button: 'Add to cart',
    },
    {
      img: '/assets/img/2.jpg',
      img1: '/assets/img/3.jpg',
      img2: '/assets/img/2.jpg',
      img3: '/assets/img/1.png',
      price: 10000,
      stock: 9,
      button: 'Add to cart',
    },
    {
      img:'/assets/img/3.jpg',
      img1:'/assets/img/2.jpg',
      img2:'/assets/img/1.png',
      img3:'/assets/img/3.jpg',
      price:20000,
      stock:9,
      button:'Add to card',
    }
  ];
  const [items, setItems] = useState(initialItems);
  const [filteredItems, setFilteredItems] = useState([]); 

  const filterProducts = (minPrice, maxPrice) => {
  const filtered = items.filter(item => {
    const price = item.price;
    return (price >= minPrice || isNaN(minPrice)) && (price <= maxPrice || isNaN(maxPrice));
  });
    setFilteredItems(filtered);
  };
  
  useEffect(() => {
    filterProducts();
  }, []);
  return (
    <div className="App">
        <header className="App-header">
        <Header
            img={"/assets/img/Fichier 3.png"} 
            input="text"
            button="search"
          />        
        </header>
      <h4>All Products</h4>
        <div className="bigContainer">
        <div className="App-container">
        {filteredItems.map((item, index) => (
            <div className="container1" key={index}>
              <Item
                img={item.img}
                img1={item.img1}
                img2={item.img2}
                img3={item.img3}
                price={item.price}
                stock={item.stock}
                button={item.button}
              />
            </div>
          ))}
        </div>     
            <aside>
            <Aside  
            filterProducts={filterProducts}
            titre1="Price min: " 
            titre2="Price max: "
            input1="text" 
            input2="text"
            button="search" 
            />
            </aside>
        </div>
        <footer>
          <Footer
          name1="Contact us"
          name2="About us"
          name3="Facebook"
          name4="Instagram"
          />
        </footer>
      </div>      

  );
}

export default App;
