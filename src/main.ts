//!Importing style
import "./style/style.scss"

//!Import 8086WASM
import wasmBuilder from "./wasm/8086.wasm"
import type Intel8086 from "./wasm/files"
//Main script file


const registers: string[] = [
    "AX",
    "--",
    "BX",
    "--",
    "CX",
    "--",
    "DX",
    "--",
    "SI",
    "--",
    "DI",
    "--",
    "BP",
    "--",
    "SP",
    "--",
    "IP",
    "--",
    "CS",
    "--",
    "ES",
    "--",
    "SS",
    "--",
    "DS"
]
const high_low_registers = {
    "AL" : 0,
    "AH" : 0,
    "BL" : 2,
    "BH" : 2,
    "CL" : 4,
    "CH" : 4,
    "DL" : 6,
    "DH" : 6,
}
type omg = typeof high_low_registers;

const input: HTMLInputElement = document.getElementById("main_input")! as HTMLInputElement;
input.placeholder = "Only MOV, XCHG, POP, PUSH instructions are available"

const mem_input: HTMLInputElement = document.getElementById("memory_input")! as HTMLInputElement;
mem_input.placeholder = "Start memory address"

const printInputError = (): void => {
    input.value = "Input command not recognized!";
    input.style.color = "red";
    setTimeout(() => {
        input.value= "";
        input.style.color = "inherit";
    }, 1000);
}

//Wasm 8086 init
const Intel = wasmBuilder<typeof Intel8086>({
    env: {
        memory: new WebAssembly.Memory({initial:17, maximum: 17}),
    }
}).then(wasm => {
    const Intel = wasm.instance.exports;
    const memory = Intel.memory as WebAssembly.Memory;

    const byteBuffer = new Uint8Array(memory.buffer);
    const wordBuffer = new Uint16Array(memory.buffer);


    populateMemoryContainer(0, byteBuffer);
    populateStackContainer(byteBuffer);

 

    mem_input.addEventListener("keypress", (e) => {
        mem_input.value = mem_input.value.toUpperCase();
        if(e.code === "Enter"){
      
            let val = mem_input.value
     
            if(val[0] !== "["){
                val = "[" + val;
            }
            if(val[val.length-1] !== "]"){
                val += "]";
            }
            const pontituro = calculatePointer(val,  byteBuffer,wordBuffer);
            populateMemoryContainer(pontituro.pointer, byteBuffer);
        }
    })
     
    input.addEventListener("keypress",(e) => {
        input.value = input.value.toUpperCase();
        if(e.code === "Enter"){
            const val = input.value
            const instruction = val[2];

            if(instruction === "V" || instruction === "H"){
                const command = val.split(",", 2);
                if(command.length === 2){
                    handleInput(command, instruction, byteBuffer,wordBuffer, Intel);
                    populateStackContainer(byteBuffer);
                }else{
                    printInputError();
                }
            }else{
                if(instruction === "S" || instruction === "P"){
                    const command = val.split(" ", 2);
                    handleInput(command, instruction, byteBuffer,wordBuffer, Intel);
                    populateStackContainer(byteBuffer);
                }else{
                    printInputError();
                }
            }
        }
    })



}).catch(e => {
    console.log(e)
});
/**
 * @description Function that populates memory div
 * @returns void
 */
const mem_cnt = document.getElementById("mem")!;
const populateMemoryContainer = (start_address: number, byteBuffer: Uint8Array) : void => {
    mem_cnt.innerHTML = "";
    if(start_address < 40) start_address = 40;
    for (let index = 0; index < 60; index++) {
        let elementorum = document.createElement("div");
        elementorum.className = "m";
        elementorum.innerHTML = byteBuffer[start_address+index].toString(16).length == 1 ? "0" +byteBuffer[start_address+index].toString(16) : byteBuffer[start_address+index].toString(16) + " ";
        mem_cnt.appendChild(elementorum);
    }
}
const staq_cnt = document.getElementById("staque")!;
const populateStackContainer = (byteBuffer: Uint8Array) : void => {
    let sp = getValue({pointer: 14, type: "X"}, byteBuffer);
    if(sp < 40) sp = 40;

    staq_cnt.innerHTML = ""

    for (let index = 0; index < 26; index = index + 2) {
        const element = document.createElement('div');
        element.className = "m x";
        let val = getValue({pointer: sp+index, type: "MEM"}, byteBuffer).toString(16);
        let add = "";
        switch(val.length){
            case 0:
                add = "0000";
                break;
            case 1:
                add = "000"
                break;
            case 2:
                add = "00"
                break;
            case 3:
                add = "0"
                break;
        }
        element.innerHTML = `${sp+index}: ${add+val}`;
        staq_cnt.appendChild(element);
        
    }

}

//All register elements
const ah = document.getElementById("AH");
const al = document.getElementById("AL");
const bh = document.getElementById("BH");
const bl = document.getElementById("BL");
const ch = document.getElementById("CH");
const cl = document.getElementById("CL");
const dh = document.getElementById("DH");
const dl = document.getElementById("DL");

const main_registers = [al,ah,bl,bh,cl,ch,dl,dh];

const si = document.getElementById("SI");
const di = document.getElementById("DI");
const bp = document.getElementById("BP");
const sp = document.getElementById("SP");

const ip = document.getElementById("IP");

const cs = document.getElementById("CS");
const ds = document.getElementById("DS");
const es = document.getElementById("ES");
const ss = document.getElementById("SS");


const other_registers = [si,di,bp,sp, ip,cs,ds,es,ss];

const populateAllRegisters =(byteBuffer:Uint8Array, wordBuffer: Uint16Array) => {
    populateMainRegisters(byteBuffer);
    populateOtherRegisters(wordBuffer);
}
const populateMainRegisters = (byteBuffer: Uint8Array): void => 
{
    for (let index = 0; index < main_registers.length; index++) {
        const element = main_registers[index];
        element!.innerHTML = byteBuffer[index].toString(16).length === 1 ? "0" +byteBuffer[index].toString(16)  : byteBuffer[index].toString(16);
       
    }
}
const populateOtherRegisters = (wordBuffer: Uint16Array): void => {

    for (let index = 0; index < other_registers.length; index++) {
        const element = other_registers[index];
        switch(wordBuffer[index +4].toString(16).length){
            case 0:
                element!.innerHTML ="0000";
                break;
            case 1:
                element!.innerHTML = "000" + wordBuffer[index+4].toString(16);
                break;
            case 2:
                element!.innerHTML = "00" + wordBuffer[index+4].toString(16);
                break;
            case 3:
                element!.innerHTML = "0" + wordBuffer[index+4].toString(16);
                break;
            default:
                element!.innerHTML = wordBuffer[index+4].toString(16);
                break;
        }
    }
}

const handleInput = (i: string[], ins: "V" | "H" | "S" | "P", byteBuffer:Uint8Array, wordBuffer: Uint16Array, Intel: typeof Intel8086) => {
    //MOV, XCHNG, PUSH, POP | REG & MEMORY
    let instruction,target,source;
    if(ins === "S" || ins === "P" ){
        instruction = i[0] as "PUSH" | "POP";

        // In 8086, PUSH & POP instructions can only work with 16-bit elements.
        let aval = i[1].trim()
        target = calculatePointer("SP",byteBuffer,wordBuffer);
        source = calculatePointer(aval, byteBuffer, wordBuffer);
        let flague = false;
        if(source.pointer === -1){
            if(!isNaN(parseInt(aval))){
                flague = true
            }else{
                printInputError()
                return;
            }
        }
        let spval = getValue(target, byteBuffer);

        if(instruction === "POP"){
            //SP + 2
            Intel.write_full(source.pointer, getValue({pointer: spval, type: "MEM"}, byteBuffer ));
            Intel.write_full(target.pointer, spval  + 2)
        }else{
            //SP - 2
            Intel.write_full(target.pointer, spval - 2)
            Intel.write_full(spval - 2, flague ? parseInt(aval) : getValue(source, byteBuffer))
        }
        input.value = "";
        populateAllRegisters(byteBuffer, wordBuffer);
    }else{
        const first = i[0].split(" ",2);
        instruction = first[0] as "MOV" | "XCHG";
    
        target = calculatePointer(first[1], byteBuffer, wordBuffer);
        const flague = !isNaN(parseInt(i[1].trim()[0]))
        source = calculatePointer(i[1].trim(), byteBuffer, wordBuffer);


        if(target.pointer < 0){
            printInputError()
            return; 
         }
         if(source.pointer < 0 && !flague){
            printInputError()
            return;  
        }

        if(instruction === "MOV"){
            const buffr = flague ? parseInt(i[1].trim()) : getValue(source, byteBuffer)
            if(target.type === "H"){
                Intel.set8_h(target.pointer, buffr)
                populateMainRegisters(byteBuffer);
            }else if(target.type === "L"){
                Intel.set8_l(target.pointer, buffr)
                populateMainRegisters(byteBuffer);
            }
            else{
                Intel.write_full(target.pointer, buffr);
                populateAllRegisters(byteBuffer,wordBuffer);
            }
            mem_input.value = target.pointer.toString();
            populateMemoryContainer(target.pointer,byteBuffer);
            input.value = "";
            return

        }

        if(instruction === "XCHG"){
            const buffr = getValue(target, byteBuffer)
            if(target.type === "H"){
                Intel.set8_h(target.pointer,  getValue(source, byteBuffer))
                Intel.write_full(source.pointer,  buffr);
                populateMainRegisters(byteBuffer);
            }else if(target.type === "L"){
                Intel.set8_l(target.pointer,  getValue(source, byteBuffer))
                Intel.write_full(source.pointer,  buffr);
                populateMainRegisters(byteBuffer);
            }
            else{
                Intel.write_full(target.pointer,  getValue(source, byteBuffer));
                Intel.write_full(source.pointer,  buffr);
                populateAllRegisters(byteBuffer,wordBuffer);
    
            }
            mem_input.value = target.pointer.toString();
            populateMemoryContainer(target.pointer,byteBuffer);
            input.value = "";
            return
        }

   
    }
   

}
interface Inde {
    type: "H" | "L" | "X" | "MEM",
    pointer: number
}
const calculatePointer = (input: string, byteBuffer:Uint8Array, wordBuffer: Uint16Array ): Inde => {
    let indexourum: Inde = {
        type: "X",
        pointer: -1
    }
    if(input[0] === "["){
        indexourum.type = "MEM";
        input = input.substring(1, input.length-1);
        let splitorum = input.split("+");
        let summarum = 0;
    
        for (let index = 0; index < splitorum.length; index++) {    //nosonar
            const element = splitorum[index];

            if(!isNaN(parseInt(element))){
                summarum += parseInt(element);
            }else{
                let valiante = calculatePointer(element,byteBuffer,wordBuffer);
                if(valiante.pointer !== -1) summarum += getValue(valiante,byteBuffer);
            }
            
        }
        indexourum.pointer = summarum;
    }else{
        if(registers.includes(input)){
            indexourum.pointer = registers.indexOf(input);
        }
        if(Object.keys(high_low_registers).includes(input))
        {
            const xd = input as keyof omg;
            indexourum.pointer = high_low_registers[xd];
            indexourum.type = input[1] as Inde["type"];
        }
    }
    return indexourum;
}

const getValue = (x:Inde, byteBuffer:Uint8Array) : number => {
    let val;
    if(x.type === "H"){
        val = parseInt((byteBuffer[x.pointer+1]).toString(16), 16);
    }
    else if( x.type === "L"){
        val = parseInt((byteBuffer[x.pointer]).toString(16), 16);
    }
    else{
        val = parseInt(byteBuffer[x.pointer+1].toString(16) + byteBuffer[x.pointer].toString(16), 16);
    }
    return val;
}
//Welcome
//Print console greet when ready
console.log("%cScript ready!", "font-size:3em;color:violet;");
console.log("%cIntel 8086 simulator written using Typescript and Webassembly", "font-size:2em;");
console.log("%cBundled with Webpack", "font-size:1em");
