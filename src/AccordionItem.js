import React, { Component } from 'react';

const AccordionItem = (props) => {
    return (
      <li
        className={props.activeTab ? 'is-active' : ''}
        aria-hidden={props.activeTab ? false : true}
        onClick={props.onClicked}>
          {props.data.title}
      </li>
    );
};

export default AccordionItem;
