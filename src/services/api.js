const url = process.env.REACT_APP_API_URL;

const wrap = promise => {
  return promise.then(response => {
    if(!response.ok) return Promise.reject(new Error(response.statusText));
    return response.json();
  });
};
// const token =  localStorage.getItem('token');
// console.log(token);
export const get = (path) => wrap(fetch(`${url}${path}`, {
  method: 'get',
  headers: {
    'Authorization': localStorage.getItem('token'),
    'Content-Type': 'application/json'
  }
}));

export const post = (path, data) => wrap(
  fetch(`${url ? url : ''}${path}`, {
    method: 'post',
    body: JSON.stringify(data),
    headers: {
      'Authorization': localStorage.getItem('token'),
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
);

export const patch = (path, data) => wrap(
  fetch(`${url ? url : ''}${path}`, {
    method: 'PATCH',
    body: JSON.stringify(data),
    headers: {
      'Authorization': localStorage.getItem('token'),
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
);

export const remove = (path) => wrap(
  fetch(`${url ? url : ''}${path}`, {
    method: 'DELETE',
    headers: {
      'Authorization': localStorage.getItem('token'),
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
);