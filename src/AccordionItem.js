import React from 'react';

const AccordionItem = (props) => {
    return (
      <li className={props.className}>        
          <h2 onClick={props.onActiveSelect}>{props.data.title}</h2>
          <div aria-hidden={props.ariaHidden}>
            {props.data.content}
          </div>
      </li>
    );
};

export default AccordionItem;
