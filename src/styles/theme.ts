import { text } from '@fortawesome/fontawesome-svg-core'

const color = {
  white: '#ffff',
  mariner: '#446996',
  turbo: '#F4D713',
  solitude: '#eff0f6',
  contessa: '#c5716f',
  bostonBlue: '#3AA3AA',
  botticelli: '#9aa6b4',
  linkWater: '#eceff5',
  winterHazel: '#cfc888',
  comet: '#60647C',
  scooter: '#36a4a8',
  gainsboro: '#E3E3E3',
  emerald: '#6CD188',
}

const theme = {
  pallet: color,
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
      contrast: color.white,
    },
    secondary: {
      main: color.turbo,
      contrast: color.scooter,
    },
    active: {
      main: color.linkWater,
      contrast: color.scooter,
    },
    input: {
      main: color.linkWater,
      contrast: color.bostonBlue,
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
  defineWidth: (size: string) => {
    switch (size) {
      case 'sm':
        return '10%'
      case 'md':
        return '25%'
      case 'lg':
        return '50%'
      case 'xlg':
        return '100%'
      default:
        return 'auto'
    }
  },
}

export default theme
