// Ek asynchronous operation define ki gayi hai
function asyncOperation() {
    return new Promise((resolve, reject) => {
      // setTimeout se simulate kiya gaya hai ki yeh operation 2000 milliseconds (2 seconds) mein complete ho jayega
      setTimeout(() => {
        resolve('Async operation completed!');
      }, 2000);
    });
  }
  
  // Timeout ke sath asynchronous operation ko run karne ke liye Promise.race ka istemal kiya gaya hai
  const asyncOperationWithTimeout = Promise.race([
    asyncOperation(), // Asynchronous operation
    new Promise((_, reject) => setTimeout(() => reject('Timeout!'), 1000)) // Timeout after 1000 milliseconds (1 second)
  ]);
  
  // Result ya error ke handle ke liye then aur catch ka istemal kiya gaya hai
  asyncOperationWithTimeout
    .then(result => console.log(result)) // Agar operation time se pehle complete hota hai, to result ko console par print karega
    .catch(error => console.log(error)); // Agar timeout hota hai, to error ko console par print karega
  