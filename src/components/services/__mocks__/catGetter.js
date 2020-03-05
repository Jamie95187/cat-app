const fakeData = [
  {
    id: 1,
    url: 'url_test',
  }
]

export default async () => {
  return await new Promise ((resolve) => {
    resolve(fakeData)
  })
}
