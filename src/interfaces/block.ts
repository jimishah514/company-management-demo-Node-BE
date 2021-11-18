export interface Block {
  hash: any,
  height : number,
  weight : number,
  size : number,
  age : number,
  transactions: number,
  prev_block : number,
  block_index : number
}