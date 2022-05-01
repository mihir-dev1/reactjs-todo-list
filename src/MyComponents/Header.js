/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import PropTypes from 'prop-types'
export default function Header(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand">{props.myData.title}</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link">Home <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item active">
          <a className="nav-link">About</a>
        </li>
      </ul>
      {props.myData.SearchBar ? <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success my-2 my-sm-0">Search</button>
      </form>: ''}
    </div>
  </nav>
  )
}

Header.defaultProps = {
  title:'my title',
  SearchBar: true
}

Header.propTypes = {
  title: PropTypes.string,
  SearchBar:PropTypes.bool.isRequired
}