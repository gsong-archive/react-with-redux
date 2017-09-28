// TODO: async/await

const baseUrl = process.env.REACT_APP_BASE_URL;

export const getTodos = () =>
  fetch(baseUrl).then(res => res.json());

export const createTodo = name =>
  fetch(baseUrl, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, isComplete: false }),
  }).then(res => res.json());

export const updateTodo = todo =>
  fetch(`${baseUrl}/${todo.id}`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(todo),
  }).then(res => res.json());

export const destroyTodo = id =>
  fetch(`${baseUrl}/${id}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
