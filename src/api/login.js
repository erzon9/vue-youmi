import http from '../utils/http';

export function login(data) {
  return http.post('/api/login', data);
}

export function isLogin(data) {
  return http.post('/api/islogin', data);
}