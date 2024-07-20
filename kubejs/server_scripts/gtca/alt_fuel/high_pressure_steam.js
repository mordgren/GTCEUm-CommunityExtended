ServerEvents.recipes(event => {
/// STEAM TURBINE ///
        event.recipes.gtceu.steam_turbine('hp_steam')
            .inputFluids('gtceu:high_pressure_steam 64')
            .outputFluids('gtceu:distilled_water 2')
            .duration(25)
            .EUt(-32)

/// RECIPE ///
        event.recipes.gtceu.steam_pressurizer('hp_steam')
        .inputFluids('gtceu:steam 6400')
        .outputFluids('gtceu:high_pressure_steam 640')
        .duration(5)
        .EUt(240)
}
)