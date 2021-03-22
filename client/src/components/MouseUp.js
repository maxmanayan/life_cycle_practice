import React from 'react'


class MouseUp extends React.Component {
  componentDidMount = () => {
    // We pass it a function on our class so we don't have to handle if the `onEvent` prop changes on any given render
    window.addEventListener("mouseup", this.handleEvent);
  };
  componentWillUnmount = () => {
    window.removeEventListener("mouseup", this.handleEvent);
  };
  handleEvent = (e) => {
    this.props.onEvent(e);
  };
  render() {
    return(
      <>
        {this.props.children}
      </>
    );
  }
}

export default MouseUp;