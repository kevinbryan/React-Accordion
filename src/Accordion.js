import React, { Component } from 'react';
import AccordionItem from './AccordionItem';
import listContent from './data.js';

class Accordion extends Component {
  constructor(props){
    super(props);

    this.state = {
      activeTab: false,
      data: listContent
    };

  }

  handleClick(e,activeTab){
    this.state.activeTab === activeTab ? this.setState({activeTab: !activeTab}) : this.setState({activeTab})
  }

  render() {
    const accordionItems = this.state.data.map((item,index) => {
      return (
        <AccordionItem         
         key={item.title}
         data={item}
         activeTab={this.state.activeTab === index}
         onClicked={(e,item) => this.handleClick(e,index)} />
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
