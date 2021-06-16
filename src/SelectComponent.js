const SelectComponent = ( props ) => {
  function handleChange( event ) {
    props.handler( event.target.value );
  }
  return (
    <select value={ props.selectedValue } 
            onChange={ handleChange }>
      <option disabled
              value="">
        { props.defaultText }
      </option>
      { props.items.map( item => (
        <option key={ item.value } 
                value={ item.value }>
          { item.name }
        </option>
      ) ) }
    </select>
  );
};

export default SelectComponent;