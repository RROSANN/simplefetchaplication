import Person from './Person';

const LPerson = ({ Character }) => {
	return (
		<div>
			{
				<Person 
					key={0}
					name={Character.name}
					height={Character.height}
			          mass={Character.mass}
			          hair_color={Character.hair_color}
			          skin_color={Character.skin_color}
			          eye_color={Character.eye_color}
			          birth_year={Character.birth_year}
			          gender={Character.gender}
			        />
			   }
		</div>
		);
}

export default LPerson;


			