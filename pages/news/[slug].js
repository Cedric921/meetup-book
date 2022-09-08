import Link from 'next/link';
import { useRouter } from 'next/router';

const SingleNewPage = () => {
	const router = useRouter();
	// for getting params in url
	const slug = router.query.slug;
	return (
		<>
			<h3>
				<Link href='/news'>All News</Link>
			</h3>
			<div>SingleNewPage</div>
			<p>{slug}</p>
		</>
	);
};

export default SingleNewPage;
