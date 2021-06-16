const ResultsRow = ( props ) => {
  return (
		<tr>
			<td>{ props.item['recipient-name'] }</td>
			<td>{ props.item['locality'] }</td>
			<td className="url-col">
				<a href={ props.item['URL'] }
					 rel="noreferrer"
					 target="_blank">
					{ props.item['URL'] }
				</a>
			</td>
		</tr>		
 	);
};

export default ResultsRow;