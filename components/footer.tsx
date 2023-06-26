import Link from "next/link"

const Footer = () => {

  return (
    <footer className="bg-green-500 hidden lg:block w-[90%]">
        <div className="grid grid-cols-2 sm:py-6 sm:px-7 py-5 px-4">
            <div className="hidden lg:flex items-center justify-start">
                <Link 
                  href={'/games'}
                  className="bg-white"
                >
                    <p className="rounded-lg bg-orange-500 px-4 mx-4 py-2 my-2">Games</p>
                </Link>
            </div>
            <div className="hidden lg:flex items-center justify-end">
                <Link 
                  href={'/projects'}
                  className="bg-white"
                >
                    <p className="rounded-lg bg-orange-500 px-4 mx-4 py-2 my-2">Projects</p>
                </Link>
            </div>
        </div>
    </footer>
  )
}

export default Footer
