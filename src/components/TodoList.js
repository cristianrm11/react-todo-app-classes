import React from 'react';

const TodoList = ({items, removeItem}) => (
  <ul className="list-group">
    {
      items.map((item) => 
        <li className="list-group-item" key={item.id}>{item.todo}
            <button onClick={() => removeItem(item.id)} type="button" className="close" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button> 
        </li>
      )
    }
  </ul>
);

export default TodoList;