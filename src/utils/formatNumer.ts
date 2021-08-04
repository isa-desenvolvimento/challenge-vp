export const formatMoeda = (atual: number | string | undefined) =>
  atual && atual.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
