import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
		<nav>
			<div className='logo'>
				<h2>Ninja list</h2>
			</div>
			<Link href={'/'}>Home</Link>
			<Link href={'/about'}>About</Link>
			<Link href={'/ninjas'}>Ninja list</Link>
		</nav>
	);
}

export default Navbar
