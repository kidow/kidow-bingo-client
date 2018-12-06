import React from 'react';
import './Table.scss'

const Table = ({
  onBingoChange,
  cell_1_1, cell_1_2, cell_1_3, cell_1_4, cell_1_5,
  cell_2_1, cell_2_2, cell_2_3, cell_2_4, cell_2_5,
  cell_3_1, cell_3_2, cell_3_3, cell_3_4, cell_3_5,
  cell_4_1, cell_4_2, cell_4_3, cell_4_4, cell_4_5,
  cell_5_1, cell_5_2, cell_5_3, cell_5_4, cell_5_5,
}) => {
  return (
    <div className='table'>
      <div className='row-1'>
        <input name='cell_1_1' onChange={onBingoChange} value={cell_1_1}/>
        <input name='cell_1_2' onChange={onBingoChange} value={cell_1_2}/>
        <input name='cell_1_3' onChange={onBingoChange} value={cell_1_3}/>
        <input name='cell_1_4' onChange={onBingoChange} value={cell_1_4}/>
        <input name='cell_1_5' onChange={onBingoChange} value={cell_1_5}/>
      </div>
      <div className='row-2'>
        <input name='cell_2_1' onChange={onBingoChange} value={cell_2_1}/>
        <input name='cell_2_2' onChange={onBingoChange} value={cell_2_2}/>
        <input name='cell_2_3' onChange={onBingoChange} value={cell_2_3}/>
        <input name='cell_2_4' onChange={onBingoChange} value={cell_2_4}/>
        <input name='cell_2_5' onChange={onBingoChange} value={cell_2_5}/>
      </div>
      <div className='row-3'>
        <input name='cell_3_1' onChange={onBingoChange} value={cell_3_1}/>
        <input name='cell_3_2' onChange={onBingoChange} value={cell_3_2}/>
        <input name='cell_3_3' onChange={onBingoChange} value={cell_3_3}/>
        <input name='cell_3_4' onChange={onBingoChange} value={cell_3_4}/>
        <input name='cell_3_5' onChange={onBingoChange} value={cell_3_5}/>
      </div>
      <div className='row-4'>
        <input name='cell_4_1' onChange={onBingoChange} value={cell_4_1}/>
        <input name='cell_4_2' onChange={onBingoChange} value={cell_4_2}/>
        <input name='cell_4_3' onChange={onBingoChange} value={cell_4_3}/>
        <input name='cell_4_4' onChange={onBingoChange} value={cell_4_4}/>
        <input name='cell_4_5' onChange={onBingoChange} value={cell_4_5}/>
      </div>
      <div className='row-5'>
        <input name='cell_5_1' onChange={onBingoChange} value={cell_5_1}/>
        <input name='cell_5_2' onChange={onBingoChange} value={cell_5_2}/>
        <input name='cell_5_3' onChange={onBingoChange} value={cell_5_3}/>
        <input name='cell_5_4' onChange={onBingoChange} value={cell_5_4}/>
        <input name='cell_5_5' onChange={onBingoChange} value={cell_5_5}/>
      </div>
    </div>
  );
};

export default Table;