import React, { Component } from 'react';
import PropTypes from 'prop-types';
var connect = function(WrappedComponent) {
  return class Connect extends Component {
    static contextTypes = {
      store: PropTypes.object,
    };
    render() {
      // 高阶组件
      return <WrappedComponent store={this.context.store}></WrappedComponent>;
    }
  };
};

export default connect;
