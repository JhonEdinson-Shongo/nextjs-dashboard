
interface ApiResponse {
  items: {
    id: number;
    name: string;
  }[]
  meta: {
    totalItems: number
    itemCount: number
    itemsPerPage: number
    currentPage: number
  }
}
 const Page = async () => {
  async function load(): Promise<ApiResponse> {
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve(true)
      }, 2000)
    })
    const responseApi = await fetch(
      'https://dragonball-api.com/api/characters'
    ).then((res) => res.json())
    return responseApi
  }

  const response = await load()
  return (
    <>
      <p className="mb-5">Dashboard Page</p>
      <ol>
        {response.items.map((item: any) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ol>
    </>
  )
}

export default Page