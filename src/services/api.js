const url = process.env.REACT_APP_API_URL;

const wrap = async promise => {
  
  const response = await promise;
  console.log(response);
  if(response.ok) return response.json();

  
  const contentType = response.headers.get('content-type');
  
  const error = contentType && contentType.startsWith('application/json')
    ? await response.json()
    : await response.text();
  
  throw error;
};

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