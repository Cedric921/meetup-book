import React from 'react';
import MeetupDetails from '../../components/meetups/MeetupDetails';

const Index = () => {
	return <MeetupDetails />;
};

export const getStaticPaths = () => {
	return {
		fallback: false,
		paths: [{ params: { meetupId: 'm1' } }, { params: { meetupId: 'm2' } }],
	};
};

export const getStaticProps = async (context) => {
	// fetch single meetup from server
	const id = context.params.meetupId;
	console.log(id);
	return {
		props: {
			meetupData: {
				id: id,
				title: 'second meetup',
				image:
					'https://dwj199mwkel52.cloudfront.net/assets/core/banners/banner-home-4f942e047c0e2c428d7b4f19dbf9704327349fa6dda769e1add5b2ec26991b94.jpg',
				address: 'goma, himbi',
				description: 'second  meetup description',
			},
		},
	};
};

export default Index;
