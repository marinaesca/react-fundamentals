// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault

  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   // const username = event.target.elements[0].value;
  //   const inputUsername = event.target.elements.usernameInput.value;
  //   onSubmitUsername(inputUsername);
  // }

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input
  // return (
  //   <form
  //     onSubmit={handleSubmit}
  //   >
  //     <div>
  //       <label htmlFor="usernameInput">Username:</label>
  //       <input id="usernameInput" type="text" />
  //     </div>
  //     <button type="submit">Submit</button>
  //   </form>
  // )


  // Another way to get the value is via a ref in React. A ref is an object that
  // stays consistent between renders of your React component. It has a current
  // property on it which can be updated to any value at any time. In the case of
  // interacting with DOM nodes, you can pass a ref to a React element and React
  // will set the current property to the DOM node that's rendered.
  //
  // So if you create an inputRef object via React.useRef, you could access the
  // value via: inputRef.current.value
  // (📜https://react.dev/reference/react/useRef)
  //
  // Try to get the usernameInput's value using a ref.

  // const inputRef = React.useRef();

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   const inputUsername = inputRef.current.value;
  //   onSubmitUsername(inputUsername);
  // }

  // return (
  //   <form
  //     onSubmit={handleSubmit}
  //   >
  //     <div>
  //       <label
  //         htmlFor="usernameInput"
  //       >
  //         Username:
  //       </label>
  //       <input
  //         id="usernameInput"
  //         ref={inputRef}
  //         type="text"
  //       />
  //     </div>
  //     <button type="submit">Submit</button>
  //   </form>
  // )


  // const [error, setError] = React.useState(null);

  // const inputRef = React.useRef();

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   const inputUsername = inputRef.current.value;
  //   onSubmitUsername(inputUsername);
  // }

  // function handleInputChange() {
  //   if (inputRef.current.value === '' ||
  //     inputRef.current.value === null ||
  //     inputRef.current.value === inputRef.current.value.toLowerCase()
  //     ) {
  //       setError(null);
  //     }
  //   else if (inputRef.current.value !== inputRef.current.value.toLowerCase()) {
  //     setError('Username must be lower case');
  //   }
  // }

  // return (
  //   <form
  //     onSubmit={handleSubmit}
  //   >
  //     <div>
  //       <label
  //         htmlFor="usernameInput"
  //       >
  //         Username:
  //       </label>
  //       <input
  //         id="usernameInput"
  //         onChange={handleInputChange}
  //         ref={inputRef}
  //         type="text"
  //       />
  //     </div>
  //     <div
  //       style={{
  //         color: 'red',
  //       }}
  //     >
  //       {error}
  //     </div>
  //     <button type="submit">Submit</button>
  //   </form>
  // )


  const [usernameText, setUsernameText] = React.useState('');

  const inputRef = React.useRef();

  function handleSubmit(event) {
    event.preventDefault();

    onSubmitUsername(usernameText);
  }

  function handleInputChange() {
    setUsernameText(inputRef.current.value.toLowerCase());
  }

  return (
    <form
      onSubmit={handleSubmit}
    >
      <div>
        <label
          htmlFor="usernameInput"
        >
          Username:
        </label>
        <input
          id="usernameInput"
          onChange={handleInputChange}
          ref={inputRef}
          type="text"
          value={usernameText}
        />
      </div>
      <div
        style={{
          color: 'red',
        }}
      >
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`);
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
