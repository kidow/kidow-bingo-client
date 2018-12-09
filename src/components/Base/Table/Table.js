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
        <textarea name='cell11' onChange={onBingoChange} value={cell11}/>
        <textarea name='cell12' onChange={onBingoChange} value={cell12}/>
        <textarea name='cell13' onChange={onBingoChange} value={cell13}/>
        <textarea name='cell14' onChange={onBingoChange} value={cell14}/>
        <textarea name='cell15' onChange={onBingoChange} value={cell15}/>
      </div>
      <div className='row-2'>
        <textarea name='cell21' onChange={onBingoChange} value={cell21}/>
        <textarea name='cell22' onChange={onBingoChange} value={cell22}/>
        <textarea name='cell23' onChange={onBingoChange} value={cell23}/>
        <textarea name='cell24' onChange={onBingoChange} value={cell24}/>
        <textarea name='cell25' onChange={onBingoChange} value={cell25}/>
      </div>
      <div className='row-3'>
        <textarea name='cell31' onChange={onBingoChange} value={cell31}/>
        <textarea name='cell32' onChange={onBingoChange} value={cell32}/>
        <textarea name='cell33' onChange={onBingoChange} value={cell33}/>
        <textarea name='cell34' onChange={onBingoChange} value={cell34}/>
        <textarea name='cell35' onChange={onBingoChange} value={cell35}/>
      </div>
      <div className='row-4'>
        <textarea name='cell41' onChange={onBingoChange} value={cell41}/>
        <textarea name='cell42' onChange={onBingoChange} value={cell42}/>
        <textarea name='cell43' onChange={onBingoChange} value={cell43}/>
        <textarea name='cell44' onChange={onBingoChange} value={cell44}/>
        <textarea name='cell45' onChange={onBingoChange} value={cell45}/>
      </div>
      <div className='row-5'>
        <textarea name='cell51' onChange={onBingoChange} value={cell51}/>
        <textarea name='cell52' onChange={onBingoChange} value={cell52}/>
        <textarea name='cell53' onChange={onBingoChange} value={cell53}/>
        <textarea name='cell54' onChange={onBingoChange} value={cell54}/>
        <textarea name='cell55' onChange={onBingoChange} value={cell55}/>
      </div>
    </div>
  );
};

export default Table;