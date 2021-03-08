import React from 'react'
import Link from '../../shared/Link/Link'

function Comment({ name, email, children }) {
    return <div className="Comment">
      {/* <img src={imageUrl} alt={imageAlt} /> */}
      <p>{name}!!!!!!!!!</p>
      <p>{email}</p>
      <teaxtarea>{children}</teaxtarea>
    </div>;
}

export default Comment;