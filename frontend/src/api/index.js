import axios from 'axios';

function getStorageJSON() {
  return axios.get('https://raw.githubusercontent.com/sksggg123/myweb/setp1_domain/frontend/src/storage/storage.json');
}

function doGithubLogin() {
  return axios.get('http://localhost:8080/login');
}

export {
  getStorageJSON,
  doGithubLogin,
}
