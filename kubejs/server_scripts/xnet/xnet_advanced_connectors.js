ServerEvents.recipes(event => { 
    // CONNECTORS
    
    // RED //
    
    event.recipes.gtceu.assembler('xnet_advanced_red_connector')
    .circuit(6)
    .itemInputs(
        'xnet:connector_red',
        '1x gtceu:silicon_dust',
        '4x gtceu:copper_foil'
    )
    .itemOutputs('xnet:advanced_connector_red')
    .duration(100)
    .EUt(80)

    event.shapeless('xnet:advanced_connector_red', [
        '#forge:dyes/red',
        '#xnet:advanced_connectors'
    ])

    // GREEN //
    
    event.recipes.gtceu.assembler('xnet_advanced_green_connector')
    .circuit(6)
    .itemInputs(
        'xnet:connector_green',
        '1x gtceu:silicon_dust',
        '4x gtceu:copper_foil'
    )
    .itemOutputs('xnet:advanced_connector_green')
    .duration(100)
    .EUt(80)

    event.shapeless('xnet:advanced_connector_green', [
        '#forge:dyes/green',
        '#xnet:advanced_connectors'
    ])

    // BLUE //
    
    event.recipes.gtceu.assembler('xnet_advanced_blue_connector')
    .circuit(6)
    .itemInputs(
        'xnet:connector_blue',
        '1x gtceu:silicon_dust',
        '4x gtceu:copper_foil'
    )
    .itemOutputs('xnet:advanced_connector_blue')
    .duration(100)
    .EUt(80)

    event.shapeless('xnet:advanced_connector_blue', [
        '#forge:dyes/blue',
        '#xnet:advanced_connectors'
    ])

    // YELLOW //
    
    event.recipes.gtceu.assembler('xnet_advanced_yellow_connector')
    .circuit(6)
    .itemInputs(
        'xnet:connector_yellow',
        '1x gtceu:silicon_dust',
        '4x gtceu:copper_foil'
    )
    .itemOutputs('xnet:advanced_connector_yellow')
    .duration(100)
    .EUt(80)

    event.shapeless('xnet:advanced_connector_yellow', [
        '#forge:dyes/yellow',
        '#xnet:advanced_connectors'
    ])

    // ROUTING //
    
    event.recipes.gtceu.assembler('xnet_advanced_routing_connector')
    .circuit(6)
    .itemInputs(
        'xnet:connector_routing',
        '1x gtceu:silicon_dust',
        '4x gtceu:copper_foil'
    )
    .itemOutputs('xnet:advanced_connector_routing')
    .duration(100)
    .EUt(80)

    // UPGRADE KIT //
   
    event.recipes.gtceu.assembler('xnet_advanced_connector_upgrade')
    .circuit(6)
    .itemInputs(
        '1x gtceu:steel_plate',
        '1x gtceu:silicon_dust',
        '4x gtceu:copper_foil'
    )
    .itemOutputs('xnet:connector_upgrade')
    .duration(100)
    .EUt(80)

    })