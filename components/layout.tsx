import Meta from './meta'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen bg-city bg-cover">
        <main>{children}</main>
      </div>
    </>
  )
}

export default Layout
