const getData = async (key: any) => {
  return await localStorage.getItem(key)
}

const ClearData = async () => {
  await localStorage.clear()
}

const PostData = async (key: any, value: any) => {
  await localStorage.setItem(key, value)
}

export { getData, ClearData, PostData }
