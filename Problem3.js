//Coding Problem 3
//We want to start our Todos function, create an instance and assign it to the request variable. I'm thinking this would then give us the right to make an HTTP request.
const getTodos = () => {
  const request = new XMLHttpRequest();
  //we create an event listener for readystatechange.
  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      console.log(request.responeText);
    } else if (request.readyState === 4) {
      console.log("could not fetch the data");
    }
  });
  //here we want to open and send our HTTP request
  request.open("GET", "httpa://jsonplaceholder.typicode.com/todos");
  request.send();
};

getTodos();
getTodos();
//calling twice will allow us to make to HTTP request
