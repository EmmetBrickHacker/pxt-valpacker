// tests go here; this will not be compiled when this package is used as an extension.
input.onButtonPressed(Button.A, function () {
    basic.showNumber(ValPacker.unpack(Package.Left, test))
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(ValPacker.unpack(Package.Right, test))
})
let test = 0
test = ValPacker.pack(1, 2)