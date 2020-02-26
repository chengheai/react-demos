import React, { Component } from 'react';
import connect from './connect';

class Content extends Component {
  render() {
    const { store } = this.props;
    return <p>{store.getState().content}</p>;
  }
}
Content = connect(Content);
class Title extends Component {
  render() {
    const { store } = this.props;
    const { title } = store.getState();
    return (
      <h3
        onClick={() => {
          store.dispatch({ type: 'CHANGE_TITLE', newTitle: '新的title' });
        }}
      >
        {title}点一下换一个title <Content></Content>
      </h3>
    );
  }
}
export default connect(Title);
