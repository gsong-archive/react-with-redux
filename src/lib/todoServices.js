const baseUrl = process.env.REACT_APP_BASE_URL;

export const getTodos = async () => {
  const response = await fetch(baseUrl);
  return response.json();
};

export const createTodo = async name => {
  const response = await fetch(baseUrl, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, isComplete: false }),
  });
  return response.json();
};

export const updateTodo = async todo => {
  const response = await fetch(`${baseUrl}/${todo.id}`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(todo),
  });
  return response.json();
};

export const destroyTodo = async id =>
  fetch(`${baseUrl}/${id}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
