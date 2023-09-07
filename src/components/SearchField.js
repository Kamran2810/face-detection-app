import React from 'react'

const SearchField = ({ onInputChange, onSubmit}) => {
  return (
    <div className="bgg flex center w-60 shadow-3 pa4 br4 shadow-3">
      <input
        type="text"
        className="input-reset ba b--black-20 pa2 mb2 db w-75"
        onChange={onInputChange}
      />
      <button 
      className="ba b--black-20  mb2 db w-25 grow"
      onClick={onSubmit}>Detect</button>
    </div>
  );
}

export default SearchField