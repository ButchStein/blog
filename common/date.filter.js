export default (value, type) => {
  const data = new Date(value)
  if (type == 'date') {
    return data.toLocaleDateString()
  } else if (type == 'time') {
    return data.toLocaleTimeString()
  } else
    return data.toLocaleString()
}