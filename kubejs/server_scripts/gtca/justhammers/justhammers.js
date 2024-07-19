ServerEvents.recipes(event => {

    // CORES

    event.recipes.gtceu.assembler('impact_core')
    .circuit(2)
    .itemInputs(
        'gtceu:double_iron_plate',
        'gtceu:double_red_alloy_plate',
        'gtceu:double_gold_plate'
    )
    .inputFluids('gtceu:soldering_alloy 144')
    .itemOutputs('justhammers:impact_core')
    .duration(100)
    .EUt(32)

    event.recipes.gtceu.assembler('reinforced_core')
    .circuit(2)
    .itemInputs(
        'justhammers:impact_core',
        '2x gtceu:double_gold_plate'
    )
    .inputFluids('gtceu:red_alloy 144')
    .itemOutputs('justhammers:reinforced_core')
    .duration(100)
    .EUt(32)

    event.recipes.gtceu.assembler('reinforced_impact_core')
    .circuit(2)
    .itemInputs(
        '2x gtceu:diamond_plate',
        'justhammers:reinforced_core',
        '2x gtceu:double_gold_plate'
    )
    .inputFluids('gtceu:red_alloy 144')
    .itemOutputs('justhammers:reinforced_impact_core')
    .duration(100)
    .EUt(32)

    event.recipes.gtceu.assembler('destructor_core')
    .circuit(2)
    .itemInputs(
        '2x gtceu:diamond_plate',
        'justhammers:reinforced_impact_core',
        '2x gtceu:double_aluminium_plate'
    )
    .inputFluids('gtceu:red_alloy 144')
    .itemOutputs('justhammers:destructor_core')
    .duration(100)
    .EUt(32)

    // NORMAL HAMMERS

    event.shaped('justhammers:iron_hammer', [
        'ABA',
        ' BA', 
        ' B '  
      ], {
        B: '#forge:rods', 
        A: 'gtceu:double_steel_plate'
      }
    )

    event.shaped('justhammers:diamond_hammer', [
        'ABA',
        ' BA', 
        ' B '  
      ], {
        B: '#forge:rods', 
        A: 'gtceu:double_aluminium_plate'
      }
    )

    event.shaped('justhammers:netherite_hammer', [
        'ABA',
        ' BA', 
        ' B '  
      ], {
        B: '#forge:rods', 
        A: 'gtceu:double_titanium_plate'
      }
    )

    // IMPACT HAMMERS

    event.recipes.gtceu.alloy_smelter('iron_impact_hammer')
    .itemInputs(
        'justhammers:iron_hammer',
        'justhammers:impact_core'
    )
    .itemOutputs('justhammers:iron_impact_hammer')
    .duration(80)
    .EUt(16)

    event.recipes.gtceu.alloy_smelter('diamond_impact_hammer')
    .itemInputs(
        'justhammers:diamond_hammer',
        'justhammers:impact_core'
    )
    .itemOutputs('justhammers:diamond_impact_hammer')
    .duration(80)
    .EUt(16)

    event.recipes.gtceu.alloy_smelter('netherite_impact_hammer')
    .itemInputs(
        'justhammers:netherite_hammer',
        'justhammers:impact_core'
    )
    .itemOutputs('justhammers:netherite_impact_hammer')
    .duration(80)
    .EUt(16)

    // REINFORCED HAMMERS

    event.recipes.gtceu.alloy_smelter('iron_reinforced_hammer')
    .itemInputs(
        'justhammers:iron_hammer',
        'justhammers:reinforced_core'
    )
    .itemOutputs('justhammers:iron_reinforced_hammer')
    .duration(80)
    .EUt(16)

    event.recipes.gtceu.alloy_smelter('diamond_reinforced_hammer')
    .itemInputs(
        'justhammers:diamond_hammer',
        'justhammers:reinforced_core'
    )
    .itemOutputs('justhammers:diamond_reinforced_hammer')
    .duration(80)
    .EUt(16)

    event.recipes.gtceu.alloy_smelter('netherite_reinforced_hammer')
    .itemInputs(
        'justhammers:netherite_hammer',
        'justhammers:reinforced_core'
    )
    .itemOutputs('justhammers:netherite_reinforced_hammer')
    .duration(80)
    .EUt(16)

    // REINFORCED IMPACT HAMMERS

    event.recipes.gtceu.alloy_smelter('iron_reinforced_impact_hammer')
    .itemInputs(
        'justhammers:iron_hammer',
        'justhammers:reinforced_impact_core'
    )
    .itemOutputs('justhammers:iron_reinforced_impact_hammer')
    .duration(80)
    .EUt(16)

    event.recipes.gtceu.alloy_smelter('diamond_reinforced_impact_hammer')
    .itemInputs(
        'justhammers:diamond_hammer',
        'justhammers:reinforced_impact_core'
    )
    .itemOutputs('justhammers:diamond_reinforced_impact_hammer')
    .duration(80)
    .EUt(16)

    event.recipes.gtceu.alloy_smelter('netherite_reinforced_impact_hammer')
    .itemInputs(
        'justhammers:netherite_hammer',
        'justhammers:reinforced_impact_core'
    )
    .itemOutputs('justhammers:netherite_reinforced_impact_hammer')
    .duration(80)
    .EUt(16)

    // DESTRUCTOR HAMMERS

    event.recipes.gtceu.alloy_smelter('iron_destructor_hammer')
    .itemInputs(
        'justhammers:iron_hammer',
        'justhammers:destructor_core'
    )
    .itemOutputs('justhammers:iron_destructor_hammer')
    .duration(80)
    .EUt(16)

    event.recipes.gtceu.alloy_smelter('diamond_destructor_hammer')
    .itemInputs(
        'justhammers:diamond_hammer',
        'justhammers:destructor_core'
    )
    .itemOutputs('justhammers:diamond_destructor_hammer')
    .duration(80)
    .EUt(16)

    event.recipes.gtceu.alloy_smelter('netherite_destructor_hammer')
    .itemInputs(
        'justhammers:netherite_hammer',
        'justhammers:destructor_core'
    )
    .itemOutputs('justhammers:netherite_destructor_hammer')
    .duration(80)
    .EUt(16)
    
})