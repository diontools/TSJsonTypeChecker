export interface T {
    n: number
    s: string
    b: boolean
    u: null
    d: undefined
    a: any
    na: number[]
    sa: string[]
    ba: boolean[]
    ua: null[]
    da: undefined[]
    nad?: number[]
    nd?: number
    sd?: string
    bd?: boolean
    ud?: null
    x: X
    xd?: X
    xud?: X | null
    xa: X[]
}

export interface X {
    n2: number
    xd?: X
}