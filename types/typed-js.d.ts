declare module 'typed.js' {
  export type TypedOptions = {
    strings?: string[]
    typeSpeed?: number
    backSpeed?: number
    loop?: boolean
    [key: string]: unknown
  }

  export default class Typed {
    constructor(el: Element | null, options?: TypedOptions)
    destroy(): void
  }
}
