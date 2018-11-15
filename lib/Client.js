const fetch = require('node-fetch')

class Client {
  /**
   *
   * @param {String} key - Your Steam Ladder API key
   * @param {String} [baseUrl] - Base URL for the API. I don't know, maybe you're using some kind of proxy?
   */
  constructor (key, baseUrl = 'https://steamladder.com/api/v1') {
    this.key = key
    this.baseUrl = baseUrl
  }

  /**
   * Performs a GET request to and endpoint on the API
   * @param {String} enpoint - Endpoint to perform the request to
   * @returns {Promise} - Returned promise
   */
  get (enpoint) {
    return fetch(`${this.baseUrl}${enpoint}`, {
      headers: {
        'Authorization': `Token ${this.key}`
      }
    }).then(res => res.json())
  }

  /**
   * Performs a POST request to and endpoint on the API
   * @param {String} enpoint - Endpoint to perform the request to
   * @returns {Promise} - Returned promise
   */
  post (enpoint) {
    return fetch(`${this.baseUrl}${enpoint}`, {
      method: 'post',
      headers: {
        'Authorization': `Token ${this.key}`
      }
    }).then(res => res.json())
  }
}

module.exports = Client
