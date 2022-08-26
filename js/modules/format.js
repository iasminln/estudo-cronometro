export default function Format(valor) {
  return valor < 10 ? `0${valor}` : valor;
}
