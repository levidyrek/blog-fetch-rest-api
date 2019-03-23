import isoFetch from 'isomorphic-fetch';
import { logout } from './dummy.mjs';

/**
 * Wraps isomorphic-fetch and logs the user out if an unauthorized
 * response is received.
 *
 * @param {string} url    The url for the request.
 * @param {object} options  The options for the request.
 */
export default function fetch(url, options = {}) {
  return (
    isoFetch(url, options)
      .then((response) => {
        if (response.status === 401) {
          logout();
        }
        return response;
      })
  );
}
