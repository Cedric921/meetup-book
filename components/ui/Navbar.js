import React from 'react';

import classes from './Navbar.module.css';

const Navbar = () => {
	return (
		<nav className={classes.navbar}>
			<h3 className={classes.title}>Meetup</h3>

         <ul className={classes.menu}>
				<li>New meetup</li>
				<li>All meetups</li>
			</ul>
		</nav>
	);
};

export default Navbar;
