const url = process.env.REACT_APP_API_URL;

const wrap = promise => {
  return promise.then(response => {
    console.log(response);
    response.json().then(res => console.log(res));
    if(!response.ok) return Promise.reject(new Error(response.statusText));
    return response.json();
  });
};

export const get = path => wrap(fetch(`${url}${path}`));

export const post = (path, data) => wrap(
  fetch(`${url}${path}`, {
    method: 'post',
    body: JSON.stringify(data),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
);

export const patch = (path, data) => wrap(
  fetch(`${url}${path}`, {
    method: 'PATCH',
    body: JSON.stringify(data),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
);

export const remove = path => wrap(
  fetch(`${url}${path}`, {
    method: 'DELETE'
  })
);