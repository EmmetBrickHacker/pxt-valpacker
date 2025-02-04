enum Package {
    //% block="left value" enumval=0
    Left,
    //% block="right value" enumval=1
    Right
}

//% color="#123456" icon="\uf482"
//% weight=96 //weight=97 is for Radio
//% block="Value Packer"
namespace ValPacker {

    /**
    * Merge two values into one number
    * @param left first value of packed number
    * @param right second value of packed number
    * @param pivot to set unpacking key
    */
    //% block="pack|$left as left value|and $right as right value || by pivot $pivot"    
    //% pivot.defl=500
    //% weight=60
    export function pack(left: number, right: number, pivot?: number): number {
        return ((left + pivot) * 1000) + (right + pivot);
    }

    /**
    * Decode value from packed number
    * @param choice to select packed value
    * @param pivot to set unpacking key
    */
    //% block="unpack|$choice|from $packed || by pivot $pivot"    
    //% pivot.defl=500
    //% weight=30 
    export function unpack(choice: Package, packed: number, pivot?: number): number {
        if (choice == 0) {
            return Math.trunc(packed / 1000) - pivot;
        } else if (choice == 1) {
            return packed % 1000 - pivot;
        }
        else {
            return 0;
        }
    }

}