export const formatMoeda = (atual: number | string | undefined) =>
  atual &&
  atual
    .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
    .replace('.', ',')
