import Meta from './meta'
import { Box } from '@chakra-ui/react'
type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Meta />
      <Box bg='black'>
        <main>{children}</main>
      </Box>
    </>
  )
}

export default Layout
