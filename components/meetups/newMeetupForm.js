import React, { useState } from 'react';

import classes from './newMeetupForm.module.css';

const NewMeetupForm = ({onAdd}) => {
	const [newMeetup, setNewMeetup] = useState({
		title: '',
		address: '',
		image: '',
		description: '',
	});
	const submitHandler = (e) => {
		e.preventDefault();
		onAdd(newMeetup);
		
	};
	return (
		<>
			<form onSubmit={submitHandler} className={classes.meetupForm}>
				<div className='form-goup'>
					<label htmlFor='title'>Title</label>
					<input
						type='text'
						name='title'
						id='title'
						placeholder='Title'
						className='form-control'
						onChange={(e) =>
							setNewMeetup((prev) => ({
								...prev,
								[e.target.id]: e.target.value,
							}))
						}
					/>
				</div>
				<div className='form-goup'>
					<label htmlFor='title'>Address</label>
					<input
						type='text'
						name='adress'
						id='address'
						className='form-control'
						placeholder='Address'
						onChange={(e) =>
							setNewMeetup((prev) => ({
								...prev,
								[e.target.id]: e.target.value,
							}))
						}
					/>
				</div>
				<div className='form-goup'>
					<label htmlFor='title'>Image</label>
					<input
						type='text'
						name='image'
						id='image'
						className='form-control'
						placeholder='Images'
						onChange={(e) =>
							setNewMeetup((prev) => ({
								...prev,
								[e.target.id]: e.target.value,
							}))
						}
					/>
				</div>
				<div className='form-goup'>
					<label htmlFor='title'>Description</label>
					<textarea
						type='text'
						name='description'
						id='description'
						className='form-control'
						placeholder='Description'
						onChange={(e) =>
							setNewMeetup((prev) => ({
								...prev,
								[e.target.id]: e.target.value,
							}))
						}
					></textarea>
				</div>
				<div className={classes.actions}>
					<button type='submit'>Enregistrer</button>
				</div>
			</form>
		</>
	);
};

export default NewMeetupForm;
