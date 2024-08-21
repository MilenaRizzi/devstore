// criando um route handler

import { z } from 'zod'
import data from '../../data.json'

export async function GET(
  _: Request,
  { params }: { params: { slug: string } },
) {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // confere se slug realmente é uma string
  const slug = z.string().parse(params.slug)

  // com base no slug vai-se agora buscar um produto
  // dentro de products quero encontrar um produto onde o slug do produto seja igual ao    slug que estou recebendo como parâmetro
  const product = data.products.find((product) => product.slug === slug)
  // validando caso um produto não exista

  if (!product) {
    return Response.json({ message: 'Product not found.' }, { status: 400 })
  }

  return Response.json(product)
}
