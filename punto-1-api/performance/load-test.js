import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '1m', target: 100 },  // inicio con 100 usuarios
    { duration: '1m', target: 250 },  // escala a 250
    { duration: '1m', target: 400 },  // escala a 400
    { duration: '1m', target: 550 },  // escala a 550
    { duration: '1m', target: 700 },  // escala a 700
    { duration: '1m', target: 850 },  // escala a 850
    { duration: '1m', target: 1000 }, // escala a 1000
    { duration: '2m', target: 0 },    // rampa hacia abajo
  ],
};

export default function () {
  // Endpoint: Listar todos los productos
  let res1 = http.get('https://fakestoreapi.com/products');
  check(res1, { 'status 200 listar': (r) => r.status === 200 });

  // Endpoint: Crear un producto
  let res2 = http.post('https://fakestoreapi.com/products', JSON.stringify({
    title: `Producto Test ${Math.floor(Math.random() * 10000)}`,
    price: Math.random() * 1000,
    description: "Simulación QA",
    image: "https://i.imgur.com/test.png",
    category: "electronics"
  }), {
    headers: { 'Content-Type': 'application/json' },
  });

  check(res2, { 'status 200/201 crear': (r) => r.status === 200 || r.status === 201 });

  sleep(1);
}

import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export function handleSummary(data) {
  return {
    "resultado.html": htmlReport(data),
  };
}
