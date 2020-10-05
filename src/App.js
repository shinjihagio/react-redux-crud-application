import React, { Component } from 'react';

// class App extends Component {
//   render() {
//     return(
//       <React.Fragment>
//         <label htmlFor="bar">bar</label>
//         <input type="text" onClick={() => {console.log("I am Clicked")}} />
//       </React.Fragment>
//       )
//   }
// }
const App = () => {
  const profiles = [
    {
      name: "Taro",
      age: 10
    },
    {
      name: "Hanako",
      age: 8
    },
    {
      name: "Chinatsu",
      age: 2
    },
    {
      name: "Shinji",
    }
  ]
  return (
    <div>
      {
        profiles.map((value, index) => {
          return <User name={value.name} age={value.age} key={index} />
        })
      }
    </div>
  )
}

const User = (props) => {
  return (
  <div>
    Hi, I am {props.name}, {props.age} years old!
  </div>)
}

User.defaultProps = {
  age: 1
}

export default App;
