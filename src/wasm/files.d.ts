declare module ASModule {
  type i8 = number;
  type i16 = number;
  type i32 = number;
  type i64 = bigint;
  type isize = number;
  type u8 = number;
  type u16 = number;
  type u32 = number;
  type u64 = bigint;
  type usize = number;
  type f32 = number;
  type f64 = number;
  type bool = boolean | number;
  export function write_full(address: i32, value: i16): void;
  export function set8_l(address: i16, value: i8): void;
  export function set8_h(address: i16, value: i8): void;
  export function read_full(address: i32): i16;
}
export default ASModule;
