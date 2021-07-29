import { FontAwesomeProps } from '@/types/global'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Icon = ({ faIcon, color }: FontAwesomeProps) => (
  <FontAwesomeIcon icon={faIcon} color={color} />
)
