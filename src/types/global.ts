export type ChildrenProps = {
  children?: any | any[]
}

export type FontAwesomeProps = {
  faIcon: any
  color?: string
}

export type LinkProps = {
  children?: any | any[]
  url: string
}

export type SizeProps = {
  size: string
}

export type InputComponentProps = {
  iconProps?: string
  placeholder?: string
  onChange: () => void
  size?: string
  value?: any
  primary?: boolean
  name?: string
}

export type ButtonProps = {
  iconProps?: string
  onClick: () => void
  primary?: boolean
  children?: any | any[]
  size?: string
}

export type ControlComboBoxProps = {
  children?: any | any[]
  rest?: any
}

export type ComboboxProps = {
  options?: any[]
  placeholder?: string
  primary?: boolean
}

export type CardProps = {
  header?: any | any[]
  content?: any | any[]
  footer?: any | any[]
  primary?: boolean
  display?: string
  styles?: any | any[]
  height?: string
}

export type TitleDescriptionProps = {
  title?: string
  description?: string
  date?: string
}

export type TagStateProps = {
  children?: any | any[]
  status: string
}

export type ItemProps = {
  id: number
  title?: string
  description?: string
  date?: string
  amount?: string
  status: string
}

export type ListProps = {
  withBorder?: boolean
  withTag?: boolean
  items: ItemProps[]
}
