import React from 'react';

const AccordionItem = (props) => {
    return (
      <li className={props.active ? 'is-active' : ''}>        
          <h2 onClick={props.onActiveSelect}>{props.data.title}</h2>
          <div aria-hidden={props.active ? false : true}>
            {props.data.content}
          </div>
      </li>
    );
};

export default AccordionItem;
