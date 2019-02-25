import { generate } from 'ts-json'
import { T as M, X } from './types'

const fileName = './generated.ts'

generate<number>("parseN")
generate<string>("parseS")
generate<boolean>("parseB")
generate<object>("parseO")
generate<undefined>("parseD")
generate<null>("parseU")
generate<M>("parseM")

generate<number[]>("parseNA")
generate<string[]>("parseSA")
generate<boolean[]>("parseBA")
generate<object[]>("parseOA")
generate<undefined[]>("parseDA")
generate<null[]>("parseUA")
generate<M[]>("parseMA")
generate<number[][]>("parseNAA")

generate<number | string | undefined>("parseNSD")
generate<number | null | undefined>("parseNUD")
generate<M | null>("parseT")
generate<X | undefined>("parseX")
generate<(number | string | number[] | X)[] | undefined | X>("parseNSA")
