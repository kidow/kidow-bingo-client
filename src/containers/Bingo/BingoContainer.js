import React, { Component } from 'react';
import { BingoWrapper } from 'components/Bingo';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as bingoActions from 'store/bingo'

import throttle from 'lodash/throttle'

class BingoContainer extends Component {
  
  initialize = async () => {
    const { BingoActions, id } = this.props
    try {
      await BingoActions.getData(id)
    } catch (e) {
      console.log(e)
    }
  }

  initializeLocalStorage = () => {
    const { bingo } = this.props.post.toJS()
    const temp = Object.entries(Object.assign({}, bingo))
    temp.forEach(item => {
      localStorage.removeItem(item[0])
      localStorage.removeItem(`${item[0]}value`)
    })
  }

  onYesClick = throttle(() => {
    const { BingoActions, bingoIndex, post } = this.props
    const { bingo } = post.toJS()
    const temp = Object.entries(Object.assign({}, bingo))
    temp.forEach((item, index) => {
      if (index === bingoIndex) {
        localStorage.setItem(item[0], true)
        localStorage.setItem(`${item[0]}value`, item[1])
      }
    })
    BingoActions.check()
    if (bingoIndex === 24) {
      if (localStorage.getItem('cell11') && localStorage.getItem('cell12') && localStorage.getItem('cell13') && localStorage.getItem('cell14') && localStorage.getItem('cell15')) {
        BingoActions.bingoCount()
      }
      if (localStorage.getItem('cell21') && localStorage.getItem('cell22') && localStorage.getItem('cell23') && localStorage.getItem('cell24') && localStorage.getItem('cell25')) {
        BingoActions.bingoCount()
      }
      if (localStorage.getItem('cell31') && localStorage.getItem('cell32') && localStorage.getItem('cell33') && localStorage.getItem('cell34') && localStorage.getItem('cell35')) {
        BingoActions.bingoCount()
      }
      if (localStorage.getItem('cell41') && localStorage.getItem('cell42') && localStorage.getItem('cell43') && localStorage.getItem('cell44') && localStorage.getItem('cell45')) {
        BingoActions.bingoCount()
      }
      if (localStorage.getItem('cell51') && localStorage.getItem('cell52') && localStorage.getItem('cell53') && localStorage.getItem('cell54') && localStorage.getItem('cell55')) {
        BingoActions.bingoCount()
      }
      if (localStorage.getItem('cell11') && localStorage.getItem('cell21') && localStorage.getItem('cell31') && localStorage.getItem('cell41') && localStorage.getItem('cell51')) {
        BingoActions.bingoCount()
      }
      if (localStorage.getItem('cell12') && localStorage.getItem('cell22') && localStorage.getItem('cell32') && localStorage.getItem('cell42') && localStorage.getItem('cell52')) {
        BingoActions.bingoCount()
      }
      if (localStorage.getItem('cell13') && localStorage.getItem('cell23') && localStorage.getItem('cell33') && localStorage.getItem('cell43') && localStorage.getItem('cell53')) {
        BingoActions.bingoCount()
      }
      if (localStorage.getItem('cell14') && localStorage.getItem('cell24') && localStorage.getItem('cell34') && localStorage.getItem('cell44') && localStorage.getItem('cell54')) {
        BingoActions.bingoCount()
      }
      if (localStorage.getItem('cell15') && localStorage.getItem('cell25') && localStorage.getItem('cell35') && localStorage.getItem('cell45') && localStorage.getItem('cell55')) {
        BingoActions.bingoCount()
      }
      if (localStorage.getItem('cell11') && localStorage.getItem('cell22') && localStorage.getItem('cell33') && localStorage.getItem('cell44') && localStorage.getItem('cell55')) {
        BingoActions.bingoCount()
      }
      if (localStorage.getItem('cell15') && localStorage.getItem('cell24') && localStorage.getItem('cell33') && localStorage.getItem('cell42') && localStorage.getItem('cell51')) {
        BingoActions.bingoCount()
      }
    }
  }, 1000)

  onNoClick = throttle(() => {
    const { BingoActions, bingoIndex, post } = this.props
    const { bingo } = post.toJS()
    const temp = Object.entries(Object.assign({}, bingo))
    temp.forEach((item, index) => {
      if (index === bingoIndex) {
        localStorage.setItem(item[0], '')
        localStorage.setItem(`${item[0]}value`, item[1])
      }
    })
    BingoActions.check()
    if (bingoIndex === 24) {
      if (localStorage.getItem('cell11') && localStorage.getItem('cell12') && localStorage.getItem('cell13') && localStorage.getItem('cell14') && localStorage.getItem('cell15')) {
        BingoActions.bingoCount()
      }
      if (localStorage.getItem('cell21') && localStorage.getItem('cell22') && localStorage.getItem('cell23') && localStorage.getItem('cell24') && localStorage.getItem('cell25')) {
        BingoActions.bingoCount()
      }
      if (localStorage.getItem('cell31') && localStorage.getItem('cell32') && localStorage.getItem('cell33') && localStorage.getItem('cell34') && localStorage.getItem('cell35')) {
        BingoActions.bingoCount()
      }
      if (localStorage.getItem('cell41') && localStorage.getItem('cell42') && localStorage.getItem('cell43') && localStorage.getItem('cell44') && localStorage.getItem('cell45')) {
        BingoActions.bingoCount()
      }
      if (localStorage.getItem('cell51') && localStorage.getItem('cell52') && localStorage.getItem('cell53') && localStorage.getItem('cell54') && localStorage.getItem('cell55')) {
        BingoActions.bingoCount()
      }
      if (localStorage.getItem('cell11') && localStorage.getItem('cell21') && localStorage.getItem('cell31') && localStorage.getItem('cell41') && localStorage.getItem('cell51')) {
        BingoActions.bingoCount()
      }
      if (localStorage.getItem('cell12') && localStorage.getItem('cell22') && localStorage.getItem('cell32') && localStorage.getItem('cell42') && localStorage.getItem('cell52')) {
        BingoActions.bingoCount()
      }
      if (localStorage.getItem('cell13') && localStorage.getItem('cell23') && localStorage.getItem('cell33') && localStorage.getItem('cell43') && localStorage.getItem('cell53')) {
        BingoActions.bingoCount()
      }
      if (localStorage.getItem('cell14') && localStorage.getItem('cell24') && localStorage.getItem('cell34') && localStorage.getItem('cell44') && localStorage.getItem('cell54')) {
        BingoActions.bingoCount()
      }
      if (localStorage.getItem('cell15') && localStorage.getItem('cell25') && localStorage.getItem('cell35') && localStorage.getItem('cell45') && localStorage.getItem('cell55')) {
        BingoActions.bingoCount()
      }
      if (localStorage.getItem('cell11') && localStorage.getItem('cell22') && localStorage.getItem('cell33') && localStorage.getItem('cell44') && localStorage.getItem('cell55')) {
        BingoActions.bingoCount()
      }
      if (localStorage.getItem('cell15') && localStorage.getItem('cell24') && localStorage.getItem('cell33') && localStorage.getItem('cell42') && localStorage.getItem('cell51')) {
        BingoActions.bingoCount()
      }
    }
  }, 1000)

  

  componentDidMount = async () => {
    await this.initialize()
    this.initializeLocalStorage()
  }

  render() {
    const { post, loading, bingoIndex, bingoCount } = this.props
    const { onYesClick, onNoClick } = this
    if (loading) return null
    const { bingo, oneBingo, twoBingo, threeBingo } = post.toJS()
    return (
      <BingoWrapper
        bingo={bingo}
        oneBingo={oneBingo}
        twoBingo={twoBingo}
        threeBingo={threeBingo}
        bingoIndex={bingoIndex}
        onYesClick={onYesClick}
        onNoClick={onNoClick}
        bingoCount={bingoCount}
      />
    );
  }
}

export default connect(
  state => ({
    post: state.bingo.get('post'),
    bingoIndex: state.bingo.get('bingoIndex'),
    loading: state.pender.pending['bingo/GET_DATA'],
    bingoCount: state.bingo.get('bingoCount')
  }),
  dispatch => ({
    BingoActions: bindActionCreators(bingoActions, dispatch)
  })
)(BingoContainer);