import AjaxUtils from 'ajax_utils';
import querystring from 'querystring';
import Promise from 'bluebird'

module.exports = {
  searchCraigslist: (() => {
    let timeout;
    return (query) => {
      return new Promise((resolve, reject) => {      
        let queryObj = {
          search: query
        };
        if (timeout) {
          clearTimeout(timeout)
        }
        timeout = setTimeout(() => {
          AjaxUtils.get(`/craigslist/search?${querystring.stringify(queryObj)}`).then((query) => {
            resolve(query);
          })
        }, 250);
      })
    }
  })()
}
