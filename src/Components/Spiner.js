import React, { Component } from 'react'


export default class Spiner extends Component {
  render() {
    return (
      <div className='text-center my-4'>
        <img src='/loading.gif' alt='loading' ></img>
      </div>
    )
  }
}
