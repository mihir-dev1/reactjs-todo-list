import React from 'react'

export const Footer = () => {
  let footerStyle = {
    width: "100%"
  }
  return (
    <footer className='bg-dark text-light text-center p-4' style={footerStyle}>
      <p>
        Copyright&copy; todoList.com
      </p>
    </footer>
  )
}
