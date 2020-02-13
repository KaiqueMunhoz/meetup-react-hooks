import React, { Component } from 'react';
import debounce from 'debounce';

export default withScreenSize = Comp => {
  return class extends Component {
    state = { width: null, height: null };

    updateScreenSize = debounce(() => {
      this.setState({
        width: window.screen.width,
        height: window.screen.height,
      });
    }, 17);

    componentDidMount() {
      window.addEventListener('resize', this.updateScreenSize);
    }
    componentWillUnmount() {
      window.removeEventListener('resize', this.updateScreenSize);
    }

    render() {
      return <Comp {...this.props} screenSize={this.state} />;
    }
  };
};
