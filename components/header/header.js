import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='bg-black'>
      <header className='container border border-[#202020] border-t-0 flex justify-between items-center py-8'>
        <Link href="/" className='text-white text-xl font-light tracking-wide'>lucas.design</Link>

        <ul className='flex gap-6'>
          <Link href='/' className='text-[#808080] text-base tracking-tight font-light hover:text-white'>projetos</Link>
          <Link href='/' className='text-[#808080] text-base tracking-tight font-light hover:text-white'>sobre</Link>
        </ul>
      </header>
    </div>
  )
}

export default Header