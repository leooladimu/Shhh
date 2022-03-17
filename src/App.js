import { useState, useEffect } from "react";
import alanBtn from '@alan-ai/alan-sdk-web';

const App = () => {
  const [cart, setCart] = useState([])
  const [menuItems, setMenuItems] = useState([])

  useEffect(() => {
    alanBtn({
      key: '56d70623604d20c15d64abcb3a33ec2e2e956eca572e1d8b807a3e2338fdd0dc/stage',
      onCommand: (commandData) => {
        if (commandData.command === 'getMenu') {
          setMenuItems(commandData.data)
        } 
      },
    })
  }, []);
  
  const addToCart = (menuItem) => {
    setCart((oldCart) => {
      return [...oldCart, menuItem]
    })
  }

  return (
    <div className="App">
      { menuItems.map(menuItem => (
        <li key={ menuItem.name }>
          { menuItem.name } - ${ menuItem.price } - { menuItem.category }
          <button onClick={() => addToCart(menuItem)}>Add to Cart</button>
        </li>
      ))}
      <h2>Cart</h2>
      { cart.map(cartItem => (
        <li key={ cartItem.name }>
          { cartItem.name } - ${ cartItem.price } - { cartItem.category }
        </li>
      ))}
    </div>
  )
}

export default App;
