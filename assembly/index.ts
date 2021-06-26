//! Intel 8086 memory simulation written in assemblyscript. 

store<i16>(14, 80);

export function write_full(address : i32, value: i16): void{
  store<i16>(address,value);
}
export function set8_l(address: i16, value: i8) : void {
  store<i8>(address,value);
}
export function set8_h(address: i16, value: i8) : void {
  store<i8>(address+1,value);
}
export function read_full(address: i32) : i16{
  return load<i16>(address);
}
