ServerEvents.recipes(event => { 
// CABLES

// RED //

    event.recipes.gtceu.assembler('xnet_red_cable')
    .circuit(16)
    .itemInputs(
        '8x gtceu:fine_copper_wire',
        '1x #forge:dyes/red',
        '2x gtceu:iron_single_wire'
    )
    .inputFluids('gtceu:glass 144')
    .itemOutputs('16x xnet:netcable_red')
    .duration(220)
    .EUt(64)

    event.shapeless('xnet:netcable_red', [
        '#forge:dyes/red',
        '#xnet:cables'
    ])

// GREEN //

    event.recipes.gtceu.assembler('xnet_green_cable')
    .circuit(16)
    .itemInputs(
        '8x gtceu:fine_copper_wire',
        '1x #forge:dyes/green',
        '2x gtceu:iron_single_wire'
    )
    .inputFluids('gtceu:glass 144')
    .itemOutputs('16x xnet:netcable_green')
    .duration(220)
    .EUt(64)

    event.shapeless('xnet:netcable_green', [
        '#forge:dyes/green',
        '#xnet:cables'
    ])

// BLUE //

    event.recipes.gtceu.assembler('xnet_blue_cable')
    .circuit(16)
    .itemInputs(
        '8x gtceu:fine_copper_wire',
        '1x #forge:dyes/blue',
        '2x gtceu:iron_single_wire'
    )
    .inputFluids('gtceu:glass 144')
    .itemOutputs('16x xnet:netcable_blue')
    .duration(220)
    .EUt(64)

    event.shapeless('xnet:netcable_blue', [
        '#forge:dyes/blue',
        '#xnet:cables'
    ])

// YELLOW //

    event.recipes.gtceu.assembler('xnet_yellow_cable')
    .circuit(16)
    .itemInputs(
        '8x gtceu:fine_copper_wire',
        '1x #forge:dyes/yellow',
        '2x gtceu:iron_single_wire'
    )
    .inputFluids('gtceu:glass 144')
    .itemOutputs('16x xnet:netcable_yellow')
    .duration(220)
    .EUt(64)

    event.shapeless('xnet:netcable_yellow', [
        '#forge:dyes/yellow',
        '#xnet:cables'
    ])

// ROUTING //

    event.recipes.gtceu.assembler('xnet_routing_cable')
    .circuit(16)
    .itemInputs(
        '8x gtceu:fine_copper_wire',
        '1x #forge:dyes/black',
        '2x gtceu:iron_single_wire'
    )
    .inputFluids('gtceu:glass 144')
    .itemOutputs('16x xnet:netcable_routing')
    .duration(220)
    .EUt(64)

})