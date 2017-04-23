export const updateEditor = (editor) => ({
  type: RECEIVE_RATING_AND_REVIEW_COUNT,
  store,
  storeAppId,
  data,
});

export function updateEditor(message) {
  return {
    type: 'ADD_TODO',
    message: message,
    completed: false
  };
}
