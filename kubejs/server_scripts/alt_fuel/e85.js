ServerEvents.recipes(event => {

    event.recipes.gtceu.combustion_generator('e85_fuel')
    .inputFluids('gtceu:e85_fuel 2')
    .duration(90)
    .EUt(-32)
    
    event.recipes.gtceu.large_chemical_reactor('e85_fuel')
    .inputFluids(
        'gtceu:ethanol 17000',
        'gtceu:light_fuel 3000',
        'gtceu:ethyl_tertbutyl_ether 100'
    )
    .outputFluids('gtceu:e85_fuel 20000')
    .duration(80)
    .EUt(480)
    
//    event.recipes.gtceu.chemical_plant('e85_fuel')
//    .inputFluids(
//        'gtceu:ethanol 17050',
//        'gtceu:light_fuel 3000',
//        'gtceu:butene 50'
//    )
//    .outputFluids('gtceu:e85_fuel 20000')
//    .addCondition(plantCasing[1])
//    .duration(60)
//   .EUt(480)
}
)