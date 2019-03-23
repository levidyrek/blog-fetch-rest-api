import { del, get, patch, post, put } from './api.mjs';

(
  get('https://reqres.in/api/users?page=2')
    .then((json) => {
      console.log('------------- GET 1 success -------------');
      console.log(json);
    })
    .catch((error) => {
      console.log('------------- GET 1 failure -------------');
      console.log(error);
    })
);

(
  get('https://reqres.in/api/users/23')
    .then((json) => {
      console.log('------------- GET 2 success -------------');
      console.log(json);
    })
    .catch((error) => {
      console.log('------------- GET 2 failure -------------');
      console.log(error);
    })
);

let data = {
  'email': 'sydney@fife',
  'password': 'pistol',
};
(
  post('https://reqres.in/api/register', data)
    .then((json) => {
      console.log('------------- POST 1 success -------------');
      console.log(json);
    })
    .catch((error) => {
      console.log('------------- POST 1 failure -------------');
      console.log(error);
    })
);

data = {
  'email': 'sydney@fife',
};
(
  post('https://reqres.in/api/register', data)
    .then((json) => {
      console.log('------------- POST 2 success -------------');
      console.log(json);
    })
    .catch((error) => {
      console.log('------------- POST 2 failure -------------');
      console.log(error);
    })
);

data = {
  'name': 'morpheus',
  'job': 'zion resident'
};
(
  put('https://reqres.in/api/users/2', data)
    .then((json) => {
      console.log('------------- PUT 1 success -------------');
      console.log(json);
    })
    .catch((error) => {
      console.log('------------- PUT 1 failure -------------');
      console.log(error);
    })
);

data = {
  'name': 'morpheus',
  'job': 'zion resident'
};
(
  patch('https://reqres.in/api/users/2', data)
    .then((json) => {
      console.log('------------- PATCH 1 success -------------');
      console.log(json);
    })
    .catch((error) => {
      console.log('------------- PATCH 1 failure -------------');
      console.log(error);
    })
);

(
  del('https://reqres.in/api/users/2', data)
    .then(() => {
      console.log('------------- DELETE 1 success -------------');
      console.log('Success!');
    })
    .catch((error) => {
      console.log('------------- DELETE 1 failure -------------');
      console.log(error);
    })
);
