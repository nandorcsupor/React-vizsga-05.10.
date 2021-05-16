import React from 'react';

const TodoList = ({ todos, setTodos }) => {
  const completed = t => {
    setTodos(todos.map(e => (e.id === t.id ? { ...e, completed: true } : e)));
  };
  const remove = t => {
    setTodos(todos.filter(e => e.id !== t.id));
  };

  return (
    <>
      <div className="container col-10 justify-content-center">
        <div className="m-2 list-group">
          {todos.map(t => (
            <div
              key={t.id}
              className={`list-group-item ${
                t.completed
                  ? 'list-group-item-success'
                  : 'list-group-item-alarm'
              }`}
            >
              <input
                className="p-3 m-3"
                type="checkbox"
                id={t.id}
                checked={t.completed ? 'checked' : ''}
                onClick={() => completed(t)}
              />
              <label htmlFor={t.id} />
              <div className="row align-items-center">
                <div className="col-6">{t.subject} </div>
                <div className="col-6 justify-content-end">
                  <button
                    className="btn btn-danger m-2"
                    onClick={() => remove(t)}
                  >
                    Törlés
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TodoList;
