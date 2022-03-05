import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import styles from '../styles/Home.module.css'

import {connect} from 'react-redux'
import postAction from '../redux/action/postAction'

class Home extends React.Component{
  constructor(props){
    super(props)
  }

  async componentDidMount(){
    await this.props.getPosts()
    console.log('POSTS', this.props.posts);
    console.log('isLoading: ' + this.props.posts.isLoading)

  }
  render(){
    const { posts } = this.props;
    return(
      <div>
        <h1>Posts</h1>
        { this.props.posts.isLoading == true ? <p style={{ textAlign: 'center' }}>Loading....</p> : null }


      </div>
    )
  }
}

export default connect(
  state => state,
  postAction
)(Home)
