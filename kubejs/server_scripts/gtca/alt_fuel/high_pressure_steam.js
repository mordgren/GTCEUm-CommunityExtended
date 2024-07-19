ServerEvents.recipes(event => {
/// STEAM TURBINE ///
        event.recipes.gtceu.steam_turbine('hp_steam')
            .inputFluids('gtceu:high_pressure_steam 100')
            .outputFluids('gtceu:distilled_water 2')
            .duration(30)
            .EUt(-32)

/// RECIPE ///
        event.recipes.gtceu.steam_pressurizer('hp_steam')
        .inputFluids('gtceu:steam 1000')
        .outputFluids('gtceu:high_pressure_steam 100')
        .duration(5)
        .EUt(32)
}
)