import { useRouter } from 'next/router';

const SingleNewPage = () => {
	const router = useRouter();
	console.log(router.query.slug);
	return <div>SingleNewPage</div>;
};

export default SingleNewPage;
