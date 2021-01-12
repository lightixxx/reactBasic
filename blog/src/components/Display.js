import React from 'react'
import { connect } from 'react-redux';

const Display = (props) => {
  return (
    <div>
      <p>팔로워: {props.count}</p>
    </div>
  )
}

const mapStateToProps = ({followers}) => {
  return {
    count: followers.count
  }
}

export default connect(mapStateToProps)(Display)
