// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import PropTypes from 'prop-types';
import '../box-styles.css'

// 💰 Use the className for the size and style (backgroundColor) for the color
// 💰 each of the elements should also have the "box" className applied

// 🐨 add a className prop to each of these and apply the correct class names
// 💰 Here are the available class names: box, box--large, box--medium, box--small

// 🐨 add a style prop to each of them as well so their background color
// matches what the text says it should be as well as `fontStyle: 'italic'`
const smallBox = <div className='box box--small' style={{backgroundColor:'lightblue'}}>small lightblue box</div>
const mediumBox = <div className='box box--medium' style={{backgroundColor:'pink'}}>medium pink box</div>
const largeBox = <div className='box box--large' style={{backgroundColor:'orange'}}>large orange box</div>

function Box({size='', backgroundColor='', children}) {
	const className = `box ${size? `box--${size}`:''}`, style = { fontStyle:'italic', backgroundColor}
	return <div {...{className, style, children}} />
}
Box.propTypes = {
	size: PropTypes.string,
	backgroundColor: PropTypes.string
}
function App() {
  return (
    <div>
			<Box size='small' backgroundColor='lightblue'>small lightblue box</Box>
			<Box size='medium' backgroundColor='pink'>medium pink box</Box>
      <Box size='large' backgroundColor='orange'>large orange box</Box>
			<Box>Sizeless box</Box>
    </div>
  )
}

export default App
