var reducer = function(state, action) {
  if (!state) {
    return {
      title: 'reducer初始化title',
      content: 'reducer初始化content',
    };
  }
  switch (action.type) {
    case 'CHANGE_TITLE':
      return {
        ...state,
        title: action.newTitle,
      };
    case 'CHANGE_CONTENT':
      return {
        ...state,
        content: action.newContent,
      };
    default:
      return state;
  }
};
export default reducer;
