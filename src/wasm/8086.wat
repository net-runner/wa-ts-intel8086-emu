(module
 (type $i32_i32_=>_none (func (param i32 i32)))
 (type $none_=>_none (func))
 (type $i32_=>_i32 (func (param i32) (result i32)))
 (import "env" "memory" (memory $0 0))
 (export "write_full" (func $assembly/index/write_full))
 (export "set8_l" (func $assembly/index/set8_l))
 (export "set8_h" (func $assembly/index/set8_h))
 (export "read_full" (func $assembly/index/read_full))
 (export "memory" (memory $0))
 (start $~start)
 (func $assembly/index/write_full (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  i32.store16
 )
 (func $assembly/index/set8_l (param $0 i32) (param $1 i32)
  local.get $0
  i32.const 16
  i32.shl
  i32.const 16
  i32.shr_s
  local.get $1
  i32.store8
 )
 (func $assembly/index/set8_h (param $0 i32) (param $1 i32)
  local.get $0
  i32.const 1
  i32.add
  i32.const 16
  i32.shl
  i32.const 16
  i32.shr_s
  local.get $1
  i32.store8
 )
 (func $assembly/index/read_full (param $0 i32) (result i32)
  local.get $0
  i32.load16_s
 )
 (func $~start
  i32.const 14
  i32.const 80
  i32.store16
 )
)
