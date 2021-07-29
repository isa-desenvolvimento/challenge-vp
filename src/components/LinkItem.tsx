import Link from 'next/link'
import { LinkProps } from '@/types/global'
import { StyleAncor } from '@/styles/LinkItem'

export const LinkItem = ({ children, url }: LinkProps) => {
  return (
    <Link href={url}>
      <StyleAncor>{children}</StyleAncor>
    </Link>
  )
}
