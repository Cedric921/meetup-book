import React from 'react';
import Navbar from '../ui/Navbar';

import classes from './Layout.module.css';

const Layout = (props) => {
	return (
		<div>
			<Navbar />
			<main className={classes.main}>{props.children}</main>
		</div>
	);
};

export default Layout;
