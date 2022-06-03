import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCat, faDove } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
  return (
    <div>
      <h1>Welcome</h1>
      <ul>
        <li>
          <FontAwesomeIcon icon={faCat} />
        </li>
        <li>
          <FontAwesomeIcon icon={faDove} />
        </li>
        <li>
          <FontAwesomeIcon icon="fa-rabbit" />
        </li>
      </ul>
    </div>
  )
}
