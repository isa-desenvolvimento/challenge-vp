export const formatMoeda = (atual: number | string) =>
  atual
    .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
    .replace('.', ',')
