ServerEvents.recipes(event => { 

// CONTROLLERS

    event.recipes.gtceu.assembler('xnet_controller')
    .circuit(10)
    .itemInputs(
        '1x gtceu:lv_machine_hull', 
        '2x #gtceu:circuits/mv', 
        '2x gtceu:copper_double_cable'
    )
    .inputFluids('gtceu:soldering_alloy 288')
    .itemOutputs('xnet:controller')
    .duration(440)
    .EUt(100)


    event.recipes.gtceu.assembler('xnet_router')
    .circuit(10)
    .itemInputs(
        '1x gtceu:lv_machine_hull', 
        '1x #gtceu:circuits/mv', 
        '4x gtceu:copper_single_cable'
    )
    .inputFluids('gtceu:soldering_alloy 288')
    .itemOutputs('xnet:router')
    .duration(240)
    .EUt(100)

    event.recipes.gtceu.assembler('xnet_wireless_router')
    .circuit(11)
    .itemInputs(
        '1x gtceu:lv_machine_hull', 
        '1x #gtceu:circuits/mv', 
        '2x gtceu:copper_single_cable',
        '1x gtceu:mv_emitter',
        '1x gtceu:mv_sensor'
    )
    .inputFluids('gtceu:soldering_alloy 288')
    .itemOutputs('xnet:wireless_router')
    .duration(240)
    .EUt(100)

// ANTENNAS

    event.recipes.gtceu.assembler('xnet_antenna_base')
    .circuit(5)
    .itemInputs(
        '2x gtceu:long_iron_rod',
        '3x gtceu:double_iron_plate'
    )
    .inputFluids('gtceu:soldering_alloy 288')
    .itemOutputs('xnet:antenna_base')
    .duration(200)
    .EUt(100)

    event.recipes.gtceu.assembler('xnet_antenna')
    .circuit(6)
    .itemInputs(
        '2x gtceu:long_iron_rod',
        '4x gtceu:iron_single_wire'
    )
    .inputFluids('gtceu:soldering_alloy 288')
    .itemOutputs('xnet:antenna')
    .duration(200)
    .EUt(100)

    event.recipes.gtceu.assembler('xnet_antenna_dish')
    .circuit(3)
    .itemInputs(
        '8x gtceu:iron_plate',
        '1x gtceu:mv_sensor',
        '1x gtceu:double_iron_plate'
    )
    .inputFluids('gtceu:soldering_alloy 288')
    .itemOutputs('xnet:antenna_dish')
    .duration(200)
    .EUt(100)
// REDSTONE PROXY

    event.recipes.gtceu.assembler('xnet_redstone_proxy')
    .circuit(16)
    .itemInputs(
        '8x #xnet:cables',
        '8x minecraft:redstone'
    )
    .itemOutputs('xnet:redstone_proxy')
    .duration(100)
    .EUt(32)

    event.shapeless('xnet:redstone_proxy_upd', [
        'xnet:redstone_proxy',
        'minecraft:redstone_torch'
    ])

// FACADE
    event.shaped('xnet:facade', [
        'AAA',
        'ABA', 
        'AAA'  
      ], {
        A: '#forge:foils', 
        B: 'gtceu:bronze_frame'
      }
    )
})