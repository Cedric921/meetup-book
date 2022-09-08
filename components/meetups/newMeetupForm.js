import React, { useState } from 'react';

const NewMeetupForm = () => {
	const [newMeetup, setNewMeetup] = useState({
		title: '',
		address: '',
		image: '',
		description: '',
	});
	const submitHandler = (e) => {
		e.preventDefault();
	};
	return (
		<div>
			<form onSubmit={submitHandler}>
				<div className='form-goup'>
					<label htmlFor='title'>Title</label>
					<input
						type='text'
						name='title'
						id='title'
						placeholder='Title'
						onChange={(e) =>
							setNewMeetup(...newMeetup, { [e.target.id]: e.target.value })
						}
					/>
				</div>
				<div className='form-goup'>
					<label htmlFor='title'>Address</label>
					<input
						type='text'
						name='adress'
						id='address'
						placeholder='Address'
						onChange={(e) =>
							setNewMeetup(...newMeetup, { [e.target.id]: e.target.value })
						}
					/>
				</div>
				<div className='form-goup'>
					<label htmlFor='title'>Image</label>
					<input
						type='text'
						name='image'
						id='image'
						placeholder='Images'
						onChange={(e) =>
							setNewMeetup(...newMeetup, { [e.target.id]: e.target.value })
						}
					/>
				</div>
				<div className='form-goup'>
					<label htmlFor='title'>Description</label>
					<input
						type='text'
						name='description'
						id='description'
						placeholder='Description'
						onChange={(e) =>
							setNewMeetup(...newMeetup, { [e.target.id]: e.target.value })
						}
					/>
				</div>
			</form>
		</div>
	);
};

export default NewMeetupForm;
