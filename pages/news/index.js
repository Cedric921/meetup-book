import Link from 'next/link';
import React from 'react';

const newsPage = () => {
	return (
		<>
			<div>newsPage</div>
			<ul>
				<li>
					<Link href='/news/next-js-awesome'>Next js is awesome</Link>
				</li>
				<li>
					<Link href='/news/react-powefull'>React is powefull for web</Link>
				</li>
				<li>
					<Link href='/news/js'>Javascript all in one</Link>
				</li>
			</ul>
		</>
	);
};

export default newsPage;
