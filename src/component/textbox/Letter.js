import React from 'react';
import './Letter.css'

function Letter(props) {

  return (
    <span className={props.color}>
      {props.letter}
    </span>
  )
}

export default Letter;

// function defineLetter() {
//   if (props.input !== '' && props.input === props.textToCompare) {
//     return (
//       <span className="green">
//         {props.letter}
//       </span>
//     )
//   }
//   else if (props.input !== '' && props.input !== props.textToCompare) {
//     return (
//       <span className="red">
//         {props.letter}
//       </span>
//     )
//   }
//   else {
//     return (
//       <span className="black">
//         {props.letter}
//       </span>
//     )
//   }
// }
