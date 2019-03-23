import fetch from './fetch.mjs';

export function get(url, extraOpts = {}) {
  var opts = {
    credentials: 'include',
  };
  return (
    fetch(url, Object.assign(opts, extraOpts))
      .then(handleResponse)
  );
}

export function post(url, data, extraOpts = {}) {
  return update(url, 'POST', data, extraOpts);
}

export function put(url, data, extraOpts = {}) {
  return update(url, 'PUT', data, extraOpts);
}

export function patch(url, data, extraOpts = {}) {
  return update(url, 'PATCH', data, extraOpts);
}

function update(url, method, data, extraOpts = {}) {
  var opts = {
    method,
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  };
  return (
    fetch(url, Object.assign(opts, extraOpts))
      .then(handleResponse)
  );
}

export function del(url, extraOpts = {}) {
  var opts = {
    method: 'DELETE',
    credentials: 'include',
  };
  return (
    fetch(url, Object.assign(opts, extraOpts))
      .then(handleResponse)
  );
}

function handleResponse(response) {
  const contentType = response.headers.get('content-type');
  if (contentType && contentType.indexOf('application/json') !== -1) {
    return response.json().then((json) => {
      if (response.ok) {
        return json;
      }

      // Error response received. Reject the promise with the appropriate message.
      const userMsg = getUserError(response, json);
      return Promise.reject(userMsg);
    });
  }

  if (!response.ok) {
    const errorMsg = `An unexpected error occured: ${response.statusText}`;
    return Promise.reject(errorMsg);
  }

  return response;
}

function getUserError(response, json) {
  return json.error || response.statusText;
}
