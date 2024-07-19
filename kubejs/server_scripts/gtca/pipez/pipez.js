ServerEvents.recipes(event => { 

// PIPES

    event.recipes.gtceu.assembler('pipez_fluid')
    .circuit(3)
    .itemInputs(
        '6x gtceu:iron_plate', 
        '2x gtceu:potin_small_fluid_pipe', 
        'minecraft:redstone'
    )
    .itemOutputs('16x pipez:fluid_pipe')
    .duration(100)
    .EUt(32)


    event.recipes.gtceu.assembler('pipez_item')
    .circuit(3)
    .itemInputs(
        '6x gtceu:iron_plate', 
        '2x gtceu:tin_small_item_pipe', 
        'minecraft:redstone'
    )
    .itemOutputs('16x pipez:item_pipe')
    .duration(100)
    .EUt(32)

    event.recipes.gtceu.assembler('pipez_universal')
    .circuit(2)
    .itemInputs(
        '8x pipez:item_pipe', 
        '8x pipez:fluid_pipe'
    )
    .itemOutputs('8x pipez:universal_pipe')
    .duration(100)
    .EUt(32)

// UPGRADES

    event.recipes.gtceu.assembler('pipez_basic_upgr')
    .circuit(5)
    .itemInputs(
        '4x gtceu:iron_plate', 
        'minecraft:redstone'
    )

    .itemOutputs('pipez:basic_upgrade')
    .duration(120)
    .EUt(32)

    event.recipes.gtceu.assembler('pipez_improved_upgr')
    .circuit(5)
    .itemInputs(
        '4x gtceu:gold_plate',
        'gtceu:silicon_dust'
    )
    .itemOutputs('pipez:improved_upgrade')
    .duration(120)
    .EUt(32)
    
    event.recipes.gtceu.assembler('pipez_advanced_upgr')
    .circuit(5)
    .itemInputs(
        '6x gtceu:steel_plate',
        'gtceu:silicon_dust'
    )
    .itemOutputs('pipez:advanced_upgrade')
    .duration(120)
    .EUt(32)

    event.recipes.gtceu.assembler('pipez_ultimate_upgr')
    .circuit(5)
    .itemInputs(
        '4x gtceu:aluminium_plate',
        'gtceu:silicon_dust'
    )
    .inputFluids('gtceu:polyethylene 144')
    .itemOutputs('pipez:ultimate_upgrade')
    .duration(120)
    .EUt(32)

// TOOLS

    event.recipes.gtceu.assembler('pipez_dest_tool')
    .circuit(4)
    .itemInputs(
        '3x gtceu:iron_plate',
        '#forge:glass',
        'minecraft:redstone',
        '8x gtceu:fine_copper_wire'
    )
    .itemOutputs('pipez:filter_destination_tool')
    .duration(100)
    .EUt(32)

    event.shaped('pipez:wrench', [
        ' A ',
        ' BA', 
        'B  '  
      ], {
        A: 'minecraft:flint', 
        B: '#forge:rods'
      }
    )
})