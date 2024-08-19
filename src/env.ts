// arquivo para validar as variáveis ambiente. Valida que a aplicação está executando com as variáveis de preenchidas
// instalamos o zod para validação

import { z } from 'zod'

const envSchema = z.object({
  NEXT_PUBLIC_API_BASE_URL: z.string().url(),
})

// pega o valor enviado como parâmetro (process.env) e vai fazer um parse, vai validar que o process.env está seguindo o formato do schema
const parsedEnv = envSchema.safeParse(process.env)

if (!parsedEnv.success) {
  console.error(
    'Invalid environment variables',
    parsedEnv.error.flatten().fieldErrors,
  )
  // método flatten vai transformar os erros da validação em um formato mais legível
  throw new Error('Invalid environment variables.')
}

export const env = parsedEnv.data
