ServerEvents.recipes(event => {
    const greg = event.recipes.gtceu;
    const std = [
        ['dsa','gtceu:diluted_sulfuric_acid', 20, 20, -32],
        ['aa','gtceu:acetic_acid', 8, 30, -32],
        ['dha','gtceu:diluted_hydrochloric_acid', 15, 25, -32],
        ['sa','gtceu:sulfuric_acid', 10, 20, -90],
        ['na','gtceu:nitric_acid', 10, 25, -96],
        ['ha','gtceu:hydrochloric_acid', 8, 25, -98],
        ['merc','gtceu:mercury', 12, 40, -76],
        ['pa','gtceu:phosphoric_acid', 9, 20, -82],
        ['hfa','gtceu:hydrofluoric_acid', 8, 40, -90],
        ['pta','gtceu:phthalic_acid', 6, 40, -72],
        ['fa','gtceu:formic_acid', 6, 20, -96],
        ['hba','gcyr:hydrobromic_acid', 4, 40, -108],
        ['dinp','gtceu:diisononyl_phthalate', 4, 70, -120],
    ];

    std.forEach((type) => {
        if (type[0].includes('dinp')) {
            greg.chem_gen(type[0])
            .inputFluids(type[1] + ' ' + type[2].toString())
            .itemInputs('2x gtceu:small_coal_dust')
            .duration(type[3])
            .EUt(type[4])  
        } else {
            greg.chem_gen(type[0])
            .inputFluids(type[1] + ' ' + type[2].toString())
            .duration(type[3])
            .EUt(type[4])
        }

        if (type[0].includes('dinp')) {
            greg.chem_gen(type[0] + "_boosted")
            .itemInputs('2x gtceu:small_coal_dust')
            .inputFluids(type[1] + ' ' + ( 2 * type[2]).toString(), 'gtceu:oxygen 10')
            .duration(type[3])
            .EUt(2 * type[4])
        } else {
            greg.chem_gen(type[0] + "_boosted")
            .inputFluids(type[1] + ' ' + ( 2 * type[2]).toString(), 'gtceu:oxygen 10')
            .duration(type[3])
            .EUt(2 * type[4])
        }
    });
})