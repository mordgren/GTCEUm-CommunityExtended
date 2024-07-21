ServerEvents.recipes(event => { 

    // phthalic_anhydride

    event.recipes.gtceu.chemical_reactor('phthalic_anhydride_chemreactor')
    .circuit(3)
    .inputFluids(
        Fluid.of('gtceu:oxylene', 1000),
        Fluid.of('gtceu:oxygen', 3000)
    )
    .outputFluids(
        Fluid.of('gtceu:phthalic_anhydride_fluid', 1000),
        Fluid.of('minecraft:water', 2000)
    )
    .duration(120)
    .EUt(30)

    // isononyl_alcohol

    event.recipes.gtceu.chemical_reactor('isononyl_alcohol_chemreactor')
    .circuit(3)
    .inputFluids( 
        Fluid.of('gtceu:octene', 1000),
        Fluid.of('gtceu:carbon_monoxide', 1000),
        Fluid.of('gtceu:hydrogen', 1000)
    )
    .outputFluids(
        Fluid.of('gtceu:isononyl_alcohol', 1500)
    )
    .duration(180)
    .EUt(30)

    // etheryfication
    event.recipes.gtceu.chemical_reactor('diisononyl_phthalate_chem')
    .circuit(3)
    .inputFluids( 
        Fluid.of('gtceu:phthalic_anhydride_fluid', 1000),
        Fluid.of('gtceu:isononyl_alcohol', 2000)
    )
        .outputFluids(
            Fluid.of('gtceu:diisononyl_phthalate', 3000),
            Fluid.of('gtceu:hydrogen', 1000)
        )
        .duration(260)
        .EUt(60)

    







    // octene

    event.recipes.gtceu.distillery('octane_to_octene_dist')
    .circuit(5)
    .inputFluids( 
        Fluid.of('gtceu:octane', 100)
    )
    .outputFluids(
        Fluid.of('gtceu:octene', 90)
    )
    .duration(80)
    .EUt(30)

    // oxylene
///
    event.recipes.gtceu.distillery('oxylene_oil')
    .circuit(5)
    .inputFluids( 
        Fluid.of('gtceu:oil', 25)
    )
    .outputFluids(
        Fluid.of('gtceu:oxylene', 30)
    )
    .duration(20)
    .EUt(30)
///
    event.recipes.gtceu.distillery('oxylene_heavy_oil')
    .circuit(5)
    .inputFluids( 
        Fluid.of('gtceu:oil_heavy', 25)
    )
    .outputFluids(
        Fluid.of('gtceu:oxylene', 40)
    )
    .duration(20)
    .EUt(30)
///
    event.recipes.gtceu.distillery('oxylene_oil_medium')
    .circuit(5)
    .inputFluids( 
        Fluid.of('gtceu:oil_medium', 25)
    )
    .outputFluids(
        Fluid.of('gtceu:oxylene', 25)
    )
    .duration(20)
    .EUt(30)
///
    event.recipes.gtceu.distillery('oxylene_oil_light')
    .circuit(5)
    .inputFluids( 
    Fluid.of('gtceu:oil', 25)
    )
    .outputFluids(
    Fluid.of('gtceu:oxylene', 50)
    )
    .duration(20)
    .EUt(30)

    // etheryfication




})