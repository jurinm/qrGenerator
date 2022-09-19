import React from 'react'
import styles from './registration.module.css'
import { RegistrationForm } from '../../Components'
const Registration = () => {
  return (
    <div className={styles.registration}>
      <RegistrationForm />
    </div>
  )
}

export default Registration