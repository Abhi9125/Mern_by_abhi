# Promise

## Learning in promise

- What is callback hell
- Inversion of Control
- How to resolve Inversion Control
- Use of Promise
- Erro handling in promise
- How promise resolve callback hell problem
- How with the help of promise we resolve callback hell problem
- how to create our own promise
- What is promises chaining
- Advanced Error Handling

> 1. Before promise we used to depend on callback functions which would result in 1.) Callback Hell (Pyramid of doom)
> 2. Inversion of control is overcome by using promise.
>    2.1) A promise is an object that represents eventual completion/failure of an asynchronous operation.

    2.2) A promise has 3 states: pending | fulfilled | rejected.
    2.3) As soon as promise is fulfilled/rejected => It updates the empty object which is assigned undefined in pending state.
    2.4) A promise resolves only once and it is immutable.
    2.5) Using .then() we can control when we call the cb(callback) function.

3. To avoid callback hell (Pyramid of doom) => We use promise chaining. This way our code expands vertically instead of horizontally. Chaining is done using '.then()'

4. A very common mistake that developers do is not returning a value during chaining of promises. Always remember to return a value. This returned value will be used by the next .then()

```Javascript
// -------------------------------------------
// 1. Callback Hell -- > when multiple call depend on eachother is know as callback hell
// -------------------------------------------

const cart = ["Shoes", "Sweater", "Hoods"];

// two step to place a order
// 1. createOrder
// 2. proceedPayment

// normal call
//below function are async functions
api.createOrder();
api.proceedPayment();
api.confirmPayment();

// assuming above each one depend on each other like when order is creaded then proceespayment call
// and when proceedPayment donethen comfirmPayment call

api.createOrder(cart, function () {
 api.proceedPayment(function () {
   api.confirmPayment(function () {
     api.orderSummary(); //callbackhell
   });
 });
});

// ----------------------------------------------
// 2. Inversion of control -- We lose the control of our code when we use calling a function by callback
// ----------------------------------------------

api.createOrder(cart, function () {
 api.proceedPayment();
});

```

## How to resolve the inversion control problem -- By using promise

- Before promise thing are work like above code , in that code the major problem with inversion control for solving inversion control js introduce the concept of promises.

  > Promise -- promise is an empty object that will execute only once and it call by `.then` function if a promise return error that will handle by `.catch` function.

  > promise return three state --
  > i. pending state -- Nither fulfill or rejected
  > ii. fulfill state -- fullfill
  > iii. rejectected state -- rejected
  > promises are immutable

```javaScript
const cart = ["shoes", "pants", "kurta"];

// with callback(before promises)
// below code, it is resposibility of createOrder function to first create the order and then proceed for payment and call callback function proceedPayment

api.createOrder(function () {
  api.proceedPayment();
});

// in the above code the problem is inversion of control
// to fix this problem js introduce the promise conpect, promise thinis nothing but it is a empty object with some data object.
// now createOreder function return a promise that is store in a variabe watch below code.

const promiseRef = createOrder(cart);

// promiseRef access by '.then()'
// inisialy orderId is undefined and pending state bcz createOrder is a async function that take time to exicute
// inisialy it will be undefined so below code won't trigger after some time,when execution has finished and promiseRef has the data then automatically the below code will trigged.

promiseRef.then(function () {
  proceedPayment(orderId);
});
```

## How promise resolve callback hell problem -- With the help of promise chaining.

```javascript
createOrder(cart)
  .then(function () {
    return proceesPayment(OrderId);
  })
  .then(function () {
    return confirmPayment(PaymentStaus);
  })
  .then(function () {
    return UpdateWallet(balance);
  });
```

## Creating our own promise --

> How to create our own promise --> To create our own promise js provide a promise constructer that have a callback function and it take two parameter resove and reject. `resolve` and `reject` also a function that is internaly define by js.

```javascript
const cards4 = ["shoes", "pants", "kurta"];

// Consumer part of promises
const promise = createOrder(cards4);
// our expectation that above function return me a promise

console.log(promise); // inisialy it print undefined

promise
  .then(function (orderId) {
    console.log(orderId);
    // proceedToPayment(orderId);
  })
  // if promise give error so it will handle by `.catch()`
  .catch(function (err) {
    console.log(err);
  });

// production part of promise/ creatin gthe promise
function createOrder(cards4) {
  const promise = new Promise(function (resolve, reject) {
    // `resolve`,`reject` are functio which is passes by JS to us in rder to handle success and failure of function call.

    // let take a real world example
    // We want to create a order online store
    // Mock logic steps
    // 1. validateCard
    // 2. Insert in DB and get an orderID
    if (!validateCard(cards4)) {
      // if card is not valid
      const err = new Error("cart is not valid");
      reject(err);
    } else {
      const orderId = "12345"; //we got this id by calling to db (Assumption)
      setTimeout(function () {
        resolve(orderId);
      }, 5000);
    }
  });
  return promise; // if the promise return true so above promise will resolve
}

function validateCard(cards4) {
  return true; // assume
}

// output
// Promise {<pending>}
// script.js:267 12345
```

## Promise Chaining --

Promise Chaining -- In promise chaining whatever return from the frist `.then` function it become
data for the next `.then ` function and so on... / or
when each promise depend on each other is know as promise chaining.
At any point of promise chaining, if promise is rejected the execution will fallback to `.catch` and others promise would not run.

```javascript
const carts = ["shoes", "pants", "kurta"];

// Below code of Promise chaining
createOrder(carts)
  .then(function (orderId) {
    console.log(orderId);
    return orderId; //return a promise
  })
  .then(function (orderId) {
    console.log("ProceedToPayment running");
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    console.log(paymentInfo);
  })
  .catch(function (err) {
    console.log(err);
  });

// production part of promise/ creating the promise
function createOrder(carts) {
  const promise1 = new Promise(function (resolve, reject) {
    if (!validateCard(carts)) {
      // if card is not valid
      const err = new Error("cart is not valid");
      reject(err);
    } else {
      const orderId = "12345";
      setTimeout(function () {
        resolve(orderId);
      }, 10000);
    }
  });
  return promise1; // if the promise return true so above promise will resolve
}

function validateCard(carts5) {
  return true; // assume
}

// Assume that proceedTOPayemnt return a resolve promise
function proceedToPayment(ID) {
  return new Promise(function (resolve, reject) {
    resolve("Payment Suceesfull");
  }); // asume return a promise
}

// output
// 12345
// ProceedToPayment running
// Payment Suceesfull
```

## Advanced Error Handling

> `.catch()` wo agr sable last me hai ar single `.catch()` to pure promise chining me koi bhi reject hoga to pura promise chaing uske bt reject ho jayega

- `.catch()` ko hm ko pertical promise check kne ke liye lga skte hai is condition me `.catch()` us promise se leke usse upar wale promise me error dekhega.
- agr `.catch()` promise chaining ke bich me lagate hai ar ast me koi `.catch()` to `.catch()` ke niche wale promise defenetly chlega.
- In simple word, `.catch()` eek level ki tarah km kr rha jis level pe hoga usse leke usse top wale me reject dekehega.
  >

```javaacript
createOrder(carts)
  .then(function (orderId) {
    console.log(orderId);
    return orderId; //return a promise
  })
  .then(function (orderId) {
    console.log("ProceedToPayment running");
    return proceedToPayment(orderId);
  })
  .catc(function(){
    console.log("Error Got");
  })
  .then(function (paymentInfo) {
    console.log("this is defenetly exicute");
  })

```

```JS
const carts = ["shoes", "pants", "kurta"];

// Below code of Promise chaining
createOrder(carts)
  .then(function (orderId) {
    console.log(orderId);
    return orderId; //return a promise
  })
  .then(function (orderId) {
    console.log("ProceedToPayment running");
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    console.log(paymentInfo);
  })
  .catch(function (err) {
    console.log(err);
  });

// production part of promise/ creating the promise
function createOrder(carts) {
  const promise1 = new Promise(function (resolve, reject) {
    if (!validateCard(carts)) {
      // if card is not valid
      const err = new Error("cart is not valid");
      reject(err);
    } else {
      const orderId = "12345";
      setTimeout(function () {
        resolve(orderId);
      }, 10000);
    }
  });
  return promise1; // if the promise return true so above promise will resolve
}

function validateCard(carts5) {
  return true; // assume
}

// Assume that proceedTOPayemnt return a resolve promise
function proceedToPayment(ID) {
  return new Promise(function (resolve, reject) {
    resolve("Payment Suceesfull");
  }); // asume return a promise
}
```

- Case 2: `.catch() use for perrticular promise`

```JS
const carts = ["shoes", "pants", "kurta"];

// Below code of Promise chaining
createOrder(carts)
  .then(function (orderId) {
    console.log(orderId);
    return orderId; //return a promise
  })
  .catch(function (err) {
    console.log(err);
  })
  .then(function (orderId) {
    console.log("ProceedToPayment running");
    return proceedToPayment(orderId);
  })
  .then(function () {
    console.log("This function defenatly run");
  });
// production part of promise/ creating the promise
function createOrder(carts) {
  const promise1 = new Promise(function (resolve, reject) {
    if (!validateCard(carts)) {
      // if card is not valid
      const err = new Error("cart is not valid");
      reject(err);
    } else {
      const orderId = "12345";
      setTimeout(function () {
        resolve(orderId);
      }, 10000);
    }
  });
  return promise1; // if the promise return true so above promise will resolve
}

function validateCard(carts5) {
  return false; // assume
}

// Assume that proceedTOPayemnt return a resolve promise
function proceedToPayment(ID) {
  return new Promise(function (resolve, reject) {
    resolve("Payment Suceesfull");
  }); // asume return a promise
}
// output
// Error: cart is not valid
// new Promise (<anonymous>)
// createOrder
// ProceedToPayment running
// Payment Suceesfull
```

- Case 3 : When `.catch()` a perticular promise and also in end `.catch()`

```JS
const carts = ["shoes", "pants", "kurta"];

//promise
createOrder(carts)
  .then(function (orderId) {
    console.log(orderId);
    return orderId; //return a promise
  })
  .catch(function (err) {
    console.log(err);
  })
  .then(function (orderId) {
    console.log("ProceedToPayment running");
    return proceedToPayment(orderId);
  })
  .catch(function (){
    console.log("Error Got");
  })
// production part of promise/ creating the promise
function createOrder(carts) {
  const promise1 = new Promise(function (resolve, reject) {
    if (!validateCard(carts)) {
      // if card is not valid
      const err = new Error("cart is not valid");
      reject(err);
    } else {
      const orderId = "12345";
      setTimeout(function () {
        resolve(orderId);
      }, 10000);
    }
  });
  return promise1; // if the promise return true so above promise will resolve
}

function validateCard(carts5) {
  return false; // assume
}

// Assume that proceedTOPayemnt return a resolve promise
function proceedToPayment(ID) {
  return new Promise(function (resolve, reject) {
    reject("Error");
  }); // asume return a promise
}
// Output
// Card is not valid
// ProceedToPayment running
// Error Got
```

---

## Async/Await - Episode - 04
