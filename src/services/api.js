const url = process.env.REACT_APP_API_URL;

const wrap = promise => {
  return promise.then(response => {
    console.log(response);
    // response.json().then(res => console.log(res));
    if(!response.ok) return Promise.reject(new Error(response.statusText));
    return response.json().then(res => console.log(res));
  });
};
const token =  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjVhMzAxYjczYTQ0MDRlNjM3NDFhYzYwZSIsImlhdCI6MTUxMzEwMjE5NX0.xydSN_E2W9_0n-1LU5XLtcndpp2P0Wq1UbS5TF5w2W4';
export const get = path => wrap(fetch(`${url}${path}`));

export const post = (path, data) => wrap(
  fetch(`${url}${path}`, {
    method: 'post',
    body: JSON.stringify(data),
    headers: {
      'Authorization': token,
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