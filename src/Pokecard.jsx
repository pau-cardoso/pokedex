export default function Pokecard(props){
	return (
	  <div className="col-3 p-4">
		  <div className="card shadow-sm rounded">
			<img className="card-img-top" alt="" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`} />
			<div className="card-body text-center">
				<h5>{props.name}</h5>
				<p>Type: {props.type}</p>
				<p>EXP: {props.base_experience}</p>
			</div>
		  </div>
	  </div>
	);
}
