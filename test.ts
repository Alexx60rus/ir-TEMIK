// tests go here; this will not be compiled when this package is used as an extension.
makerbit.onIrButton(IrButton.Number_3, IrButtonAction.Pressed, function () {
    basic.showNumber(3)
})
makerbit.onIrButton(IrButton.Number_8, IrButtonAction.Pressed, function () {
    basic.showNumber(8)
})
makerbit.onIrButton(IrButton.Hash, IrButtonAction.Pressed, function () {
    basic.showIcon(IconNames.Chessboard)
})
makerbit.onIrButton(IrButton.Number_0, IrButtonAction.Pressed, function () {
    basic.showNumber(0)
})
makerbit.onIrButton(IrButton.Number_1, IrButtonAction.Pressed, function () {
    basic.showNumber(1)
})
makerbit.onIrButton(IrButton.Number_4, IrButtonAction.Pressed, function () {
    basic.showNumber(4)
})
makerbit.onIrButton(IrButton.Number_5, IrButtonAction.Pressed, function () {
    basic.showNumber(5)
})
makerbit.onIrButton(IrButton.Number_6, IrButtonAction.Pressed, function () {
    basic.showNumber(6)
})
makerbit.onIrButton(IrButton.Left, IrButtonAction.Pressed, function () {
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
})
makerbit.onIrButton(IrButton.Number_7, IrButtonAction.Pressed, function () {
    basic.showNumber(7)
})
makerbit.onIrButton(IrButton.Down, IrButtonAction.Pressed, function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        # . # . #
        . # # # .
        . . # . .
        `)
})
makerbit.onIrButton(IrButton.Star, IrButtonAction.Pressed, function () {
    basic.showIcon(IconNames.No)
})
makerbit.onIrButton(IrButton.Up, IrButtonAction.Pressed, function () {
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
})
makerbit.onIrButton(IrButton.Number_2, IrButtonAction.Pressed, function () {
    basic.showNumber(2)
})
makerbit.onIrButton(IrButton.Right, IrButtonAction.Pressed, function () {
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
})
makerbit.onIrButton(IrButton.Ok, IrButtonAction.Pressed, function () {
    basic.showString("OK")
})
makerbit.onIrButton(IrButton.Number_9, IrButtonAction.Pressed, function () {
    basic.showNumber(9)
})
makerbit.connectIrReceiver(DigitalPin.P8, IrProtocol.Keyestudio)
basic.forever(function () {
	
})
