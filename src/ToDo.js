import { useState } from 'react';

const ToDo = (props) => {
  
  const [complete, setComplete] = useState(props.complete);
  
  if (complete === true) {
    return (
        <div className="strike" onClick={() => setComplete(false)}>
            <li>{props.name}</li>
        </div>
    );
  } else if (complete === false) {
    return (
        <div onClick={() => setComplete(true)}>
            <li>{props.name}</li>
        </div>
    );
  }
};

export default ToDo;
