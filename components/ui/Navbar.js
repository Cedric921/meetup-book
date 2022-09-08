import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import classes from './Navbar.module.css';

const Navbar = () => {
	const router = useRouter();
	const goHome = () => {
		router.push('/');
	};

	return (
		<nav className={classes.navbar}>
			<h3 className={classes.title} onClick={goHome}>
				Meetup
			</h3>

			<ul className={classes.menu}>
				<li>
					<Link href={'/new-meetup'}>New meetup</Link>
				</li>
				<li>
					<Link href={'/'}>All meetups</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
