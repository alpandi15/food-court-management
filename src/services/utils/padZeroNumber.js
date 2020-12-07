function pad (num, size) {
  let s = `000000000${num}`
  return s.substr(s.length - size)
}

export {
  pad
}
