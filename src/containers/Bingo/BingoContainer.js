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
    const {
      cell_1_1, cell_1_2, cell_1_3, cell_1_4, cell_1_5,
      cell_2_1, cell_2_2, cell_2_3, cell_2_4, cell_2_5,
      cell_3_1, cell_3_2, cell_3_3, cell_3_4, cell_3_5,
      cell_4_1, cell_4_2, cell_4_3, cell_4_4, cell_4_5,
      cell_5_1, cell_5_2, cell_5_3, cell_5_4, cell_5_5,
      oneBingo, twoBingo, threeBingo
    } = post.toJS()
    console.log(threeBingo)
    return (
      <BingoWrapper
        cell_1_1={cell_1_1}
        cell_1_2={cell_1_2}
        cell_1_3={cell_1_3}
        cell_1_4={cell_1_4}
        cell_1_5={cell_1_5}
        cell_2_1={cell_2_1}
        cell_2_2={cell_2_2}
        cell_2_3={cell_2_3}
        cell_2_4={cell_2_4}
        cell_2_5={cell_2_5}
        cell_3_1={cell_3_1}
        cell_3_2={cell_3_2}
        cell_3_3={cell_3_3}
        cell_3_4={cell_3_4}
        cell_3_5={cell_3_5}
        cell_4_1={cell_4_1}
        cell_4_2={cell_4_2}
        cell_4_3={cell_4_3}
        cell_4_4={cell_4_4}
        cell_4_5={cell_4_5}
        cell_5_1={cell_5_1}
        cell_5_2={cell_5_2}
        cell_5_3={cell_5_3}
        cell_5_4={cell_5_4}
        cell_5_5={cell_5_5}
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