const generateOption = (datas) => {
  let options = []
  datas.map((value) => {
    return options.push({
      value: String(value.id),
      label: value.name
    })
  })

  return options
}

export default generateOption
