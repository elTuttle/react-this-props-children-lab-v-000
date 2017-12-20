// Code Invitation Component Here
import React from 'react';

class Invitation extends React.Component {
  render() {
    const childrenWithWrapperDiv = React.Children.map(this.props.children, child => {
     return (
       <div className="some-component-special-class">{child}</div>
     );
   });
    return (
      <div className="some-component">
        <h1>You've been invited!</h1>
        {childrenWithWrapperDiv}
      </div>
    );

  }
}

export default Invitation;
