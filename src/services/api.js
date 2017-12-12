const url = process.env.REACT_APP_API_URL;

const wrap = promise => {
  return promise.then(response => {
    console.log('initial reponse: ',response);

    if(!response.ok) return Promise.reject(new Error(response.statusText));
    return response.json().then(res => console.log('JSON response: ',res));
  });
};
const token =  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjVhMzAzMzdhOGVlZGNjOTk4NDJiNjBlOCIsImlhdCI6MTUxMzEwODM0Nn0.t_RbtzpaS83KuSv7Z-Y61x4QT2VZPuV6WeKa1GU7hC0';
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