import React from 'react';
import './Table.scss'

const Table = ({
  onBingoChange, bingo
}) => {
  return (
    <div className='table'>
      <div className='row-1'>
        <textarea name='cell11' onChange={onBingoChange} value={bingo['cell11']}/>
        <textarea name='cell12' onChange={onBingoChange} value={bingo['cell12']}/>
        <textarea name='cell13' onChange={onBingoChange} value={bingo['cell13']}/>
        <textarea name='cell14' onChange={onBingoChange} value={bingo['cell14']}/>
        <textarea name='cell15' onChange={onBingoChange} value={bingo['cell15']}/>
      </div>
      <div className='row-2'>
        <textarea name='cell21' onChange={onBingoChange} value={bingo['cell21']}/>
        <textarea name='cell22' onChange={onBingoChange} value={bingo['cell22']}/>
        <textarea name='cell23' onChange={onBingoChange} value={bingo['cell23']}/>
        <textarea name='cell24' onChange={onBingoChange} value={bingo['cell24']}/>
        <textarea name='cell25' onChange={onBingoChange} value={bingo['cell25']}/>
      </div>
      <div className='row-3'>
        <textarea name='cell31' onChange={onBingoChange} value={bingo['cell31']}/>
        <textarea name='cell32' onChange={onBingoChange} value={bingo['cell32']}/>
        <textarea name='cell33' onChange={onBingoChange} value={bingo['cell33']}/>
        <textarea name='cell34' onChange={onBingoChange} value={bingo['cell34']}/>
        <textarea name='cell35' onChange={onBingoChange} value={bingo['cell35']}/>
      </div>
      <div className='row-4'>
        <textarea name='cell41' onChange={onBingoChange} value={bingo['cell41']}/>
        <textarea name='cell42' onChange={onBingoChange} value={bingo['cell42']}/>
        <textarea name='cell43' onChange={onBingoChange} value={bingo['cell43']}/>
        <textarea name='cell44' onChange={onBingoChange} value={bingo['cell44']}/>
        <textarea name='cell45' onChange={onBingoChange} value={bingo['cell45']}/>
      </div>
      <div className='row-5'>
        <textarea name='cell51' onChange={onBingoChange} value={bingo['cell51']}/>
        <textarea name='cell52' onChange={onBingoChange} value={bingo['cell52']}/>
        <textarea name='cell53' onChange={onBingoChange} value={bingo['cell53']}/>
        <textarea name='cell54' onChange={onBingoChange} value={bingo['cell54']}/>
        <textarea name='cell55' onChange={onBingoChange} value={bingo['cell55']}/>
      </div>
    </div>
  );
};

export default Table;