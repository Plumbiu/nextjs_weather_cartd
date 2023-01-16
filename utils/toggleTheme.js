const toggleTheme = (mode) => {
  if(mode) {
    document.body.setAttribute('arco-theme', mode)
  } else {
    document.body.removeAttribute('arco-theme')
  }
}