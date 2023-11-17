// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'
import PropTypes from 'prop-types';

// 🐨 add a className prop to each div and apply the correct class names
// based on the text content
// 💰 Here are the available class names: box, box--large, box--medium, box--small
// 💰 each of the elements should have the "box" className applied

// 🐨 add a style prop to each div so their background color
// matches what the text says it should be
// 🐨 also use the style prop to make the font italic
// 💰 Here are available style attributes: backgroundColor, fontStyle

// const smallBox = (
//   <div
//     className={`box box--small`}
//     style={{ backgroundColor: 'lightblue', fontStyle: 'italic' }}
//   >
//     small lightblue box
//   </div>
// )
// const mediumBox = <div
//   className={`box box--medium`}
//   style={{ backgroundColor: 'pink', fontStyle: 'italic'}}
// >
//   medium pink box
// </div>
// const largeBox = <div
//   className={`box box--large`}
//   style={{ backgroundColor: 'orange', fontStyle: 'italic'}}
// >
//   large orange box
// </div>

// function App() {
//   return (
//     <div>
//       {smallBox}
//       {mediumBox}
//       {largeBox}
//     </div>
//   )
// }


// function Box({className = '', style, text, ...otherProps}) {
//   return (
//     <div
//       className={`box ${className}`}
//       style={{fontStyle: 'italic', ...style}}
//       {...otherProps}
//       >
//       {text}
//     </div>
//   )
// }

// const smallBox = (
//   <Box
//     className='box--small'
//     style={{backgroundColor: 'lightblue'}}
//     text='small lightblue box'
//   />
// );
// const mediumBox = (
//   <Box
//     className='box--medium'
//     style={{backgroundColor: 'pink'}}
//     text='medium pink box'
//   />
// );
// const largeBox = (
//   <Box
//     className='box--large'
//     style={{backgroundColor: 'orange'}}
//     text='large orange box'
//   />
// );

// function App() {
//   return (
//     <div>
//       {smallBox}
//       {mediumBox}
//       {largeBox}
//     </div>
//   )
// }

function Box({size, style, text, ...otherProps}) {
  return (
    <div
      className={`box box--${size}`}
      style={{fontStyle: 'italic', ...style}}
      {...otherProps}
      >
      {text}
    </div>
  )
}

Box.propTypes = {
  size: PropTypes.string.isRequired,
  style: PropTypes.object,
  text: PropTypes.string,
};

function App() {
  return (
    <div>
      <Box
        size='small'
        style={{backgroundColor: 'lightblue'}}
        text='small lightblue box'
      />
      <Box
        size='medium'
        style={{backgroundColor: 'pink'}}
        text='medium pink box'
      />
      <Box
        size='large'
        style={{backgroundColor: 'orange'}}
        text='large orange box'
      />
    </div>
  )
}

export default App
