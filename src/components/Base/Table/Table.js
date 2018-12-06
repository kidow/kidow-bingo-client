import React from 'react';
import './Table.scss'

const Table = ({
  onBingoChange,
  cell11, cell12, cell13, cell14, cell15,
  cell21, cell22, cell23, cell24, cell25,
  cell31, cell32, cell33, cell34, cell35,
  cell41, cell42, cell43, cell44, cell45,
  cell51, cell52, cell53, cell54, cell55,
}) => {
  return (
    <div className='table'>
      <div className='row-1'>
        <input name='cell11' onChange={onBingoChange} value={cell11}/>
        <input name='cell12' onChange={onBingoChange} value={cell12}/>
        <input name='cell13' onChange={onBingoChange} value={cell13}/>
        <input name='cell14' onChange={onBingoChange} value={cell14}/>
        <input name='cell15' onChange={onBingoChange} value={cell15}/>
      </div>
      <div className='row-2'>
        <input name='cell21' onChange={onBingoChange} value={cell21}/>
        <input name='cell22' onChange={onBingoChange} value={cell22}/>
        <input name='cell23' onChange={onBingoChange} value={cell23}/>
        <input name='cell24' onChange={onBingoChange} value={cell24}/>
        <input name='cell25' onChange={onBingoChange} value={cell25}/>
      </div>
      <div className='row-3'>
        <input name='cell31' onChange={onBingoChange} value={cell31}/>
        <input name='cell32' onChange={onBingoChange} value={cell32}/>
        <input name='cell33' onChange={onBingoChange} value={cell33}/>
        <input name='cell34' onChange={onBingoChange} value={cell34}/>
        <input name='cell35' onChange={onBingoChange} value={cell35}/>
      </div>
      <div className='row-4'>
        <input name='cell41' onChange={onBingoChange} value={cell41}/>
        <input name='cell42' onChange={onBingoChange} value={cell42}/>
        <input name='cell43' onChange={onBingoChange} value={cell43}/>
        <input name='cell44' onChange={onBingoChange} value={cell44}/>
        <input name='cell45' onChange={onBingoChange} value={cell45}/>
      </div>
      <div className='row-5'>
        <input name='cell51' onChange={onBingoChange} value={cell51}/>
        <input name='cell52' onChange={onBingoChange} value={cell52}/>
        <input name='cell53' onChange={onBingoChange} value={cell53}/>
        <input name='cell54' onChange={onBingoChange} value={cell54}/>
        <input name='cell55' onChange={onBingoChange} value={cell55}/>
      </div>
    </div>
  );
};

export default Table;