import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

// as propriedades que esse componente irá receber são todas as props que uma div pode receber.
// eu preciso juntas as classes, ou seja, o className que a div desse componente tem ali determinada, e outras estilizações que eu passar para esse componente quando ele for chamado => para isso precisamos de um modulo chamado Tailwind Merge (npm i tailwind-merge) que essa é a melhohr forma de conseguir unir varias classes
// se eu não utilizasse o tailwind merge as classes seriam substituidas
export function Skeleton({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      className={twMerge('bg-zinc-50/10 animate-pulse rounded-md', className)}
      {...props}
    />
  )
}
