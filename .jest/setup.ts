import '@testing-library/jest-dom'
import 'jest-styled-components'
require('jest-fetch-mock').enableMocks()

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faSearch,
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'
library.add(faSearch, faChevronLeft, faChevronRight)
