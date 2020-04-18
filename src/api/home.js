import http from '@/utils/http';

export function fetchSwiper() {
  return http.get('/api/swiper');
}

export function fetchRecomd() {
  return http.get('/api/recomd-goods');
}

export function fetchGoods() {
  return http.get('/api/goods');
}