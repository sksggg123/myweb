import axios from 'axios';

function getStorageJSON() {
  return axios.get('https://raw.githubusercontent.com/sksggg123/myweb/setp1_domain/frontend/src/storage/storage.json');
}


export {
  getStorageJSON,
}
