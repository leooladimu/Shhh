// const menuItems = [
//   {name: "Shrimp Burger", quantity: 9.99, location: 'fish'},
//   {name: "Lobster Roll", quantity: 23.05, location: 'fish'},
//   {name: "Chicken Head",  quantity: 10.00, location: 'poultry'},
//   {name: "Green Limes", quantity: 1.05, location: 'fruit'},
//   {name: "Jack Daniels", quantity: 25.98,  location: 'breads and cereals'},
//   {name: "Cesar Salad", quantity: 12.65,  location: 'vegetable'},
//   {name: "Tater Tots", quantity: 13.99,  location: 'vegetable'},
//   {name: "honey", quantity: 3.45,  location: 'vegetable'}
// ]


// intent('show me the list', 'give me the list', p => {
//     p.play({command: 'getMenu', data: menuItems});
//     p.play('here you go');
// });
    

// intent('order by $(ORDER_BY name|quantity|location)', p => {
    
//     const orderByField = p.ORDER_BY.value;
//     let orderedMenuItems = menuItems;
//     switch(orderByField) {
//         case 'name':
//             orderedMenuItems = menuItems.sort((p1, p2) => p1.name.localeCompare(p2.name));
//             break;
//         case 'location':
//             orderedMenuItems = menuItems.sort((p1, p2) => p1.location.localeCompare(p2.location));
//             break;
//         case 'quantity': 
//             orderedMenuItems = menuItems.sort((p1, p2) => p1.quantity - p2.quantity);
//             break;
            
//         }
    
//         p.play({command: 'getMenu', data: orderedMenuItems});
//         p.play( `Ordering by ${p.ORDER_BY.value}`);
     
// });

// const menu = menuItems.map(item => item.name).join('|');

// intent(`Put $(ITEM , ${menu}) in the cart`,
//        'Put $(UNKNOWN_ITEM* .*) in the cart',
//        p => {
    
//     if(p.UNKNOWN_ITEM) {
//         p.play(`That's not on the list`);
//     } else {
//         const itemName = p.ITEM.value;
//         const itemForCart = menuItems.find((menuItem) => {
//             return menuItem.name.toLowerCase() === itemName.toLowerCase();
//     })
//     p.play({command: 'addToCart', data: itemForCart});    
//     p.play(`${p.ITEM.value} going in the cart`);
//     }
// });

// import React, { useState } from 'react';
// import './ExpenseForm.css';

// const ExpenseForm = (props) => {
//   const [enteredName, setEnteredName] = useState('');
//   const [enteredAmount, setEnteredAmount] = useState('');
//   const [enteredDate, setEnteredDate] = useState('');
//   // const [userInput, setUserInput] = useState({
//   //   enteredTitle: '',
//   //   enteredAmount: '',
//   //   enteredDate: '',
//   // });

//   const nameChangeHandler = (event) => {
//     setEnteredName(event.target.value);
//     // console.log(event, '✠');
//     // setUserInput((prevState) => {
//     //   return { ...prevState, enteredTitle: event.target.value };
//     // });
//   };

//   const amountChangeHandler = (event) => {
//     setEnteredAmount(event.target.value);
//     // console.log(event, '✠');
//     // setUserInput((prevState) => {
//     //   return { ...prevState, enteredAmount: event.target.value };
//     // });
//   };

//   const dateChangeHandler = (event) => {
//     setEnteredDate(event.target.value);
//     // console.log(event, '✠');
//     // setUserInput((prevState) => {
//     //   return { ...prevState, enteredDate: event.target.value };
//     // });
//   };

//   const submitHandler = (event) => {
//     event.preventDefault();
//     const expenseData = {
//       name: enteredName,
//       amount: enteredAmount,
//       date: new Date(enteredDate),
//     };
//     props.onSaveExpenseData(expenseData);
//     setEnteredName('');
//     setEnteredAmount('');
//     setEnteredDate('');
//   };

//   return (
//     <form onSubmit={submitHandler}>
//       <div className="form__controls">
//         <div className="form__control">
//           <label>Name</label>
//           <input
//             type="text"
//             value={enteredName}
//             onChange={nameChangeHandler}
//           />
//         </div>
//         <div className="form__control">
//           <label>Amount</label>
//           <input
//             type="number"
//             value={enteredAmount}
//             min="0.01"
//             step="0.01"
//             onChange={amountChangeHandler}
//           />
//         </div>
//         <div className="form__control">
//           <label>Date</label>
//           <input
//             type="date"
//             value={enteredDate}
//             min="2021-12-14"
//             max="2222-12-31"
//             onChange={dateChangeHandler}
//           />
//         </div>
//       </div>
//       <div className="form__actions">
//         <button type="submit">Add Expense</button>
//       </div>
//     </form>
//   );
// };

// export default ExpenseForm;
