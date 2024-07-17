ServerEvents.recipes(event => { 
    // CONNECTORS
    
    // RED //
    
        event.recipes.gtceu.assembler('xnet_red_connector')
        .circuit(10)
        .itemInputs(
            '8x gtceu:fine_gold_wire',
            '1x #forge:dyes/red',
            '1x gtceu:aluminium_plate'
        )
        .inputFluids('gtceu:polyethylene 144')
        .itemOutputs('xnet:connector_red')
        .duration(220)
        .EUt(80)
    
        event.shapeless('xnet:connector_red', [
            '#forge:dyes/red',
            '#xnet:connectors'
        ])
    
    // GREEN //
    
    event.recipes.gtceu.assembler('xnet_green_connector')
    .circuit(10)
    .itemInputs(
        '8x gtceu:fine_gold_wire',
        '1x #forge:dyes/green',
        '1x gtceu:aluminium_plate'
    )
    .inputFluids('gtceu:polyethylene 144')
    .itemOutputs('xnet:connector_green')
    .duration(220)
    .EUt(80)

    event.shapeless('xnet:connector_green', [
        '#forge:dyes/green',
        '#xnet:connectors'
    ])

    // BLUE //
    
    event.recipes.gtceu.assembler('xnet_blue_connector')
    .circuit(10)
    .itemInputs(
        '8x gtceu:fine_gold_wire',
        '1x #forge:dyes/blue',
        '1x gtceu:aluminium_plate'
    )
    .inputFluids('gtceu:polyethylene 144')
    .itemOutputs('xnet:connector_blue')
    .duration(220)
    .EUt(80)

    event.shapeless('xnet:connector_blue', [
        '#forge:dyes/blue',
        '#xnet:connectors'
    ])

    // YELLOW //
    
    event.recipes.gtceu.assembler('xnet_yellow_connector')
    .circuit(10)
    .itemInputs(
        '8x gtceu:fine_gold_wire',
        '1x #forge:dyes/yellow',
        '1x gtceu:aluminium_plate'
    )
    .inputFluids('gtceu:polyethylene 144')
    .itemOutputs('xnet:connector_yellow')
    .duration(220)
    .EUt(80)

    event.shapeless('xnet:connector_yellow', [
        '#forge:dyes/yellow',
        '#xnet:connectors'
    ])

    // ROUTING //
    
        event.recipes.gtceu.assembler('xnet_routing_connector')
        .circuit(12)
        .itemInputs(
            '8x gtceu:fine_gold_wire',
            '1x #xnet:connectors',
            '2x gtceu:silicon_dust'
        )
        .inputFluids('gtceu:polyethylene 144')
        .itemOutputs('xnet:connector_routing')
        .duration(220)
        .EUt(80)
    
    })