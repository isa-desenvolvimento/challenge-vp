import { StyleTagState } from '@/styles/TagStatus'
import { TagStateProps } from '@/types/global'

export const TagState = ({ children, status }: TagStateProps) => {
  return <StyleTagState status={status}>{children}</StyleTagState>
}
