function isDevMode() {
  return (
    process.env.NODE_ENV === 'development' ||
    localStorage.getItem('dev_mode') === 'true'
  )
}

export default isDevMode
