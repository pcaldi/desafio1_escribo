
export default function divisiveis3e5(numero) {
  let somatorio = 0;
  for (let i = 0; i < numero; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      somatorio += i;
    }
  }
  return somatorio;
}
