import data from '../../data.json'

// traz apenas o array dos produtos em destaque
export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  const featuredProducts = data.products.filter((produc) => produc.featured)

  return Response.json(featuredProducts)
}
