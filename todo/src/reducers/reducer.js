import React from 'react';

export const initialState = [
  {
    item: 'Change brake fluid',
    completed: false,
    id: Math.random(),
  },
  {
    item: 'Check daily planner',
    completed: false,
    id:  Math.random(),
  },
];
export const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [action.payload,...state ];
    case 'TASK_COMPLETED':
      return (
          state.map(task => action.payload === task.id ? {...task, completed: !task.completed}: task)
      )
    case 'DELETE COMPLETED':
      return action.payload.filter(task => !task.completed)
    default:
      return state;
  }
};
