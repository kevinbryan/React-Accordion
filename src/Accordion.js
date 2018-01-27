import React, { Component } from 'react';
import AccordionItem from './AccordionItem';
import data from './data.js';

class Accordion extends Component {
  constructor(props){
    super(props);

    this.state = {
      active: null,
      data
    };

  }

  // This function takes in the item Index (when used within the map function within the render method).
  // It then compares the current active state against the items index to see if it is already active.
  // If it is set the active state back to null, if not then set the active state to the current item index.

  activeSelect(e,itemIndex) {
    this.state.active === itemIndex ? 
    this.setState({active: null}) : 
    this.setState({active: itemIndex})
  }

  render() {         
    const accordionItems = this.state.data.map((item,index) => {

      const isActive = this.state.active === index;

      return (
        <AccordionItem
         ariaHidden={isActive ? false : true}
         className={isActive ? 'is-active' : ''}
         data={item}
         key={item.title}
         onActiveSelect={(e,item) => this.activeSelect(e,index)} />
        );
    });

    return (
      <ul>
        {accordionItems}
      </ul>
    );

  }

}

export default Accordion;
