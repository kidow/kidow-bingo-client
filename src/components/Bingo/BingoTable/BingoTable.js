import React from 'react';
import './BingoTable.scss'

const BingoTable = () => {
  return (
    <div className='bingo-table'>
      <div className='row-1'>
        <div className={localStorage.getItem('cell11') ? 'yes' : 'no'}>{localStorage.getItem('cell11value')}</div>
        <div className={localStorage.getItem('cell12') ? 'yes' : 'no'}>{localStorage.getItem('cell12value')}</div>
        <div className={localStorage.getItem('cell13') ? 'yes' : 'no'}>{localStorage.getItem('cell13value')}</div>
        <div className={localStorage.getItem('cell14') ? 'yes' : 'no'}>{localStorage.getItem('cell14value')}</div>
        <div className={localStorage.getItem('cell15') ? 'yes' : 'no'}>{localStorage.getItem('cell15value')}</div>
      </div>
      <div className='row-2'>
        <div className={localStorage.getItem('cell21') ? 'yes' : 'no'}>{localStorage.getItem('cell21value')}</div>
        <div className={localStorage.getItem('cell22') ? 'yes' : 'no'}>{localStorage.getItem('cell22value')}</div>
        <div className={localStorage.getItem('cell23') ? 'yes' : 'no'}>{localStorage.getItem('cell23value')}</div>
        <div className={localStorage.getItem('cell24') ? 'yes' : 'no'}>{localStorage.getItem('cell24value')}</div>
        <div className={localStorage.getItem('cell25') ? 'yes' : 'no'}>{localStorage.getItem('cell25value')}</div>
      </div>
      <div className='row-3'>
        <div className={localStorage.getItem('cell31') ? 'yes' : 'no'}>{localStorage.getItem('cell31value')}</div>
        <div className={localStorage.getItem('cell32') ? 'yes' : 'no'}>{localStorage.getItem('cell32value')}</div>
        <div className={localStorage.getItem('cell33') ? 'yes' : 'no'}>{localStorage.getItem('cell33value')}</div>
        <div className={localStorage.getItem('cell34') ? 'yes' : 'no'}>{localStorage.getItem('cell34value')}</div>
        <div className={localStorage.getItem('cell35') ? 'yes' : 'no'}>{localStorage.getItem('cell35value')}</div>
      </div>
      <div className='row-4'>
        <div className={localStorage.getItem('cell41') ? 'yes' : 'no'}>{localStorage.getItem('cell41value')}</div>
        <div className={localStorage.getItem('cell42') ? 'yes' : 'no'}>{localStorage.getItem('cell42value')}</div>
        <div className={localStorage.getItem('cell43') ? 'yes' : 'no'}>{localStorage.getItem('cell43value')}</div>
        <div className={localStorage.getItem('cell44') ? 'yes' : 'no'}>{localStorage.getItem('cell44value')}</div>
        <div className={localStorage.getItem('cell45') ? 'yes' : 'no'}>{localStorage.getItem('cell45value')}</div>
      </div>
      <div className='row-5'>
        <div className={localStorage.getItem('cell51') ? 'yes' : 'no'}>{localStorage.getItem('cell51value')}</div>
        <div className={localStorage.getItem('cell52') ? 'yes' : 'no'}>{localStorage.getItem('cell52value')}</div>
        <div className={localStorage.getItem('cell53') ? 'yes' : 'no'}>{localStorage.getItem('cell53value')}</div>
        <div className={localStorage.getItem('cell54') ? 'yes' : 'no'}>{localStorage.getItem('cell54value')}</div>
        <div className={localStorage.getItem('cell55') ? 'yes' : 'no'}>{localStorage.getItem('cell55value')}</div>
      </div>
    </div>
  );
};

export default BingoTable;