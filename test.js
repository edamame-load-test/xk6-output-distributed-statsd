import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
  http.get('https://test-api.k6.io');
  sleep(0.5);
}