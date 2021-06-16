import ResultsRow from "./ResultsRow.js";

const Results = ( props ) => {
	let vals = props.data;
	if ( props.selectedState ) {
		vals = vals.filter(
			item => item["state-territory"] === props.selectedState 
		)
	}
	vals.sort(
		(a, b) => ( a.locality > b.locality ) ? 1 : -1
	).reverse();
	if ( vals.length ) {
		return (
			<div className="results">
	     	<table>
	     		<thead>
	     			<tr>
	     				<th>Name</th>
	     				<th>Type</th>
	     				<th className="url-col">URL</th>
	     			</tr>
	     		</thead>
	     		<tbody>
	     			{ vals.map( ( item, index ) => (
			        <ResultsRow item={ item } key={ index }/>
			      ) ) }
	     		</tbody>
	     	</table>
	    </div>
	 	);
	}
  return (<div className="results">No results</div>)
};

export default Results;