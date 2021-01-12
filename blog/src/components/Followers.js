import React from 'react'
import { connect } from 'react-redux';
import { addFollower } from '../redux/index'

const Followers = ({count, addFollower }) => {
  return (
    <div className="items">
      <p>팔로워 수: {count}</p>
      <button onClick={ () => addFollower() }>팔로우</button>
    </div>
  )
}

const mapStateToProps = ({followers}) => {
  return {
    count: followers.count
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addFollower: () => dispatch(addFollower())
//   }
// }

const mapDispatchToProps = {
  addFollower
}

export default connect(mapStateToProps, mapDispatchToProps)(Followers)