# Value Packer (or just ValPacker)
> Open this page at [https://brickhackers.github.io/pxt-valpacker/](https://brickhackers.github.io/pxt-valpacker/)
> 
A lightweight MakeCode (PXT) extension designed to pack two numeric values into a single number for synchronized transmission, and unpack them back on the receiving end.

### Use as Extension
This repository can be added as an **extension** in MakeCode.
* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **https://github.com/brickhackers/pxt-valpacker** and import

## Why use it?
When sending dual-axis data (like X and Y coordinates from a joystick) over radio or serial, sending them as two separate packets can cause synchronization issues or lag. 

**ValPacker** solves this by encoding both values into one single number on the transmitter side and decoding them back into individual components on the receiver side at the exact same time.

## Usage

### Transmitter (Packing)
Pack your X and Y coordinates into a single payload before sending:
```typescript
let packedPayload = valpacker.pack(joystickX, joystickY)
// Send packedPayload via radio or serial
```

### Receiver (Unpacking)
Receive the single number and extract both original values instantly:
```typescript
// Receive packedPayload
let unpackedX = valpacker.unpackX(packedPayload)
let unpackedY = valpacker.unpackY(packedPayload)
```

#### Metadata (used for search, rendering)
* for PXT/microbit
