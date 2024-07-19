ServerEvents.recipes(event => {
/// GAS TURBINE ///
    event.recipes.gtceu.gas_turbine('dimethyl_ether')
        .inputFluids('gtceu:dimethyl_ether 4')
        .duration(120)
        .EUt(-32)

/// RECIPES ///

    event.recipes.gtceu.dehydrator('dimethyl_ether')
        .inputFluids('gtceu:methanol 4000')
        .chancedInput(('gtceu:aluminosilicate_catalyst_dust'), 7400, 0)
        .chancedOutput(('gtceu:zeolite_dust'), 2000, 0)
        .outputFluids('gtceu:dimethyl_ether 12000')
        .duration(240)
        .EUt(1280)
    
/// CATALYST ///

    event.recipes.gtceu.chemical_reactor('aluminosilicate_catalyst_sio4')
        .inputFluids('gtceu:oxygen 4000')
        .itemInputs(
            '1x gtceu:aluminium_dust',
            '1x gtceu:silicon_dust'
        )
        .itemOutputs('gtceu:aluminosilicate_catalyst_dust')
        .duration(60)
        .EUt(96)

    event.recipes.gtceu.chemical_reactor('aluminosilicate_catalyst_sio2')
        .inputFluids('gtceu:oxygen 2000')
        .itemInputs(
            '1x gtceu:aluminium_dust',
            '1x gtceu:silicon_dioxide_dust'
        )
        .itemOutputs('gtceu:aluminosilicate_catalyst_dust')
        .duration(60)
        .EUt(96)
}
)