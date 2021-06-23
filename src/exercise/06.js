// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
	const userInputElRef = React.useRef(null);
	// const [ error, setError ] = React.useState(null)
	const [ usernameValue, setUsernameValue ] = React.useState('');
  function handleSubmit(event){
		event.preventDefault();
		const userNameDOM = event.target.elements.userName.value;
		onSubmitUsername(usernameValue);
	}

	function handleChange(event){
		const { value } = event.target;
		setUsernameValue(value.toLowerCase());
		// setError(value === value.toLowerCase() ? null: 'Username must be lower case')
	}

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="userName">Username:</label>
        <input onChange={handleChange} ref={userInputElRef} id="userName" type="text" value={usernameValue} />
				{/* {error && <p role="alert">{error}</p>} */}
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}



function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
