import { text } from '@fortawesome/fontawesome-svg-core'

const color = {
  white: '#ffff',
  mariner: '#446996',
  turbo: '#F4D713',
  solitude: '#eff0f6',
  contessa: '#c5716f',
  bostonBlue: '#3AA3AA',
  botticelli: '#9aa6b4',
  linkWater: '#bec7d2',
  winterHazel: '#cfc888',
  comet: '#60647C',
  scooter: '#36a4a8',
}

// cabecalho lista #e3e3e3
// btn footer ffdc00
// #btn primary
//barra lateral #5e74a8
// verde #6fd583
// vermelhor #c97373
// amareloo #cac772
const theme = {
  colors: {
    sidebar: {
      main: color.mariner,
      contrast: color.white,
    },
    background: color.solitude,
    navbar: {
      main: color.linkWater,
      contrast: color.bostonBlue,
    },
    text: color.comet,
    primary: {
      main: color.scooter,
      content: color.white,
    },
    secondary: {
      main: color.turbo,
    },
    active: {
      main: color.linkWater,
      contrast: color.scooter,
    },
  },
  text: color.comet,
  fontSize: {
    sm: 100,
    md: 120,
    lg: 150,
  },
  logo: {
    url: '/logocompleta.png',
    sm: 64,
    md: 128,
    lg: 256,
  },
  borderRadius: '4px',
}

export default theme
