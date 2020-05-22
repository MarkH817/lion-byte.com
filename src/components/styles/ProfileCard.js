import React from 'react'

import './ProfileCard.less'

/**
 * @param {object} props
 * @param {React.ReactNode} props.children
 * @param {string} [props.className]
 * @param {boolean} [props.wrapReverse]
 */
function ProfileCard (props) {
  const { children, className = '', wrapReverse = false } = props
  return (
    <div
      className={`profile-card ${
        wrapReverse ? 'profile-card--wrap-reverse' : ''
      } ${className}`}
    >
      {children}
    </div>
  )
}

export default ProfileCard
