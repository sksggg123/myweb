import axios from 'axios';

// 1. 기본 HTTP Request & Response와 관련된 기본 설정
const config = {
  baseUrl: 'https://api.hnpwa.com/v0/',
  localUrl: 'http://localhost:8080/'
}

// 2. API 함수들을 정리
function fetchNewsList() {
  //return axios.get(config.baseUrl + 'news/1.json');     // 위와 아래가 동일하다
  return axios.get(`${config.baseUrl}news/1.json`);  // 위와 아래가 동일하다
}

function fetchJobsList() {
  return axios.get(`${config.baseUrl}jobs/1.json`);
}

function fetchAskList() {
  return  axios.get(`${config.baseUrl}ask/1.json`);
}

function getContentList() {
  return axios.get(`${config.localUrl}postContents`)
}

export {
  fetchNewsList,
  fetchJobsList,
  fetchAskList,
  getContentList,
}
