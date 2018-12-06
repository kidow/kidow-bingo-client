import React, { Component } from 'react';
import { BingoWrapper } from 'components/Bingo';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as bingoActions from 'store/bingo'

class BingoContainer extends Component {
  initialize = async () => {
    const { BingoActions, id } = this.props
    try {
      await BingoActions.getData(id)
    } catch (e) {
      console.log(e)
    }
  }

  componentDidMount() {
    this.initialize()
  }

  render() {
    const { post, loading } = this.props
    if (loading) return null
    const { bingo, oneBingo, twoBingo, threeBingo } = post.toJS()
    const cells = Object.assign({}, bingo)
    return (
      <BingoWrapper
        cells={cells}
        oneBingo={oneBingo}
        twoBingo={twoBingo}
        threeBingo={threeBingo}
      />
    );
  }
}

export default connect(
  state => ({
    post: state.bingo.get('post'),
    loading: state.pender.pending['bingo/GET_DATA']
  }),
  dispatch => ({
    BingoActions: bindActionCreators(bingoActions, dispatch)
  })
)(BingoContainer);