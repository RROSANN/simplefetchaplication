import React from 'react';
import 'tachyons';

const Person = ({ name, birth_year, gender, height, mass, hair_color, skin_color, eye_color }) => {
	return (
		<div className='bg-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt='people' src={`https://robohash.org/something?200x200`} />
			<div>	
				<h2>{name}</h2>
				<p>Birth year: {birth_year}</p>
				<p>Gender: {gender}</p>
				<p>Height: {height} cm</p>
				<p>Mass: {mass} kg</p>
				<p>Hair Color: {hair_color}</p>
				<p>Skin color: {skin_color}</p>
				<p>Eye Color: {eye_color}</p>
			</div>
		</div>
	);
}

export default Person;