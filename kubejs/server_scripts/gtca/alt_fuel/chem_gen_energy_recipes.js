ServerEvents.recipes(event => {

    event.recipes.gtceu.chem_gen('DSA_gen')
    .inputFluids('gtceu:diluted_sulfuric_acid 20')
    .duration(20)
    .EUt(-32)

    event.recipes.gtceu.chem_gen('AS_gen')
    .inputFluids('gtceu:acetic_acid 8')
    .duration(30)
    .EUt(-32)

    event.recipes.gtceu.chem_gen('DHL_gen')
    .inputFluids('gtceu:diluted_hydrochloric_acid 15')
    .duration(25)
    .EUt(-32)

    event.recipes.gtceu.chem_gen('SA_gen')
    .inputFluids('gtceu:sulfuric_acid 10')
    .duration(20)
    .EUt(-90)


    event.recipes.gtceu.chem_gen('NA_gen')
    .inputFluids('gtceu:nitric_acid 10')
    .duration(25)
    .EUt(-96)


    event.recipes.gtceu.chem_gen('HCL_gen')
    .inputFluids('gtceu:hydrochloric_acid 8')
    .duration(25)
    .EUt(-98)

    event.recipes.gtceu.chem_gen('merc_gen')
    .inputFluids('gtceu:mercury 12')
    .duration(40)
    .EUt(-76)


    event.recipes.gtceu.chem_gen('PA_gen')
    .inputFluids('gtceu:phosphoric_acid 9')
    .duration(20)
    .EUt(-82)

    event.recipes.gtceu.chem_gen('HF_acid')
    .inputFluids('gtceu:hydrofluoric_acid 8')
    .duration(40)
    .EUt(-90)

    event.recipes.gtceu.chem_gen('DINP')
    .inputFluids('gtceu:diisononyl_phthalate 4')
    .itemInputs('2x gtceu:small_coal_dust')
    .duration(70)
    .EUt(-120)

    event.recipes.gtceu.chem_gen('PHT_acid')
    .inputFluids('gtceu:phthalic_acid 6')
    .duration(40)
    .EUt(-72)

    event.recipes.gtceu.chem_gen('form_gen')
    .inputFluids('gtceu:formic_acid 6')
    .duration(20)
    .EUt(-96)

    event.recipes.gtceu.chem_gen('ggcey_hbro_gen')
    .inputFluids('gcyr:hydrobromic_acid 4')
    .duration(40)
    .EUt(-108)

})