import Link from 'next/link'
import { LinkProps } from '@/types/global'
import { StyleAncor } from '@/styles/LinkItem'

export const LinkItem = ({ children, url }: LinkProps) => {
  return (
    // eslint-disable-next-line @next/next/link-passhref
    <Link href={url}>
      <StyleAncor role="link-item">{children}</StyleAncor>
    </Link>
  )
}
