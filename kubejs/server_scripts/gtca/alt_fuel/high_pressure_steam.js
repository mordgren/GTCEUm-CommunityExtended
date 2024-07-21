ServerEvents.recipes(event => {
/// STEAM TURBINE ///
        event.recipes.gtceu.steam_turbine('hp_steam')
            .inputFluids('gtceu:high_pressure_steam 64')
            .outputFluids('gtceu:distilled_water 2')
            .duration(25)
            .EUt(-32)

/// RECIPE ///

        event.shaped("gtceu:steam_pressurizer", ["PRP", "CSC", "WHW"], {
                W: "gtceu:gold_single_cable",
                S: "gtceu:stainless_steel_large_fluid_pipe",
                C: "#gtceu:circuits/hv",
                H: "gtceu:hv_machine_hull",
                P: "gtceu:hv_electric_pump",
                R: "gtceu:hv_electric_piston",
              });

        event.recipes.gtceu.steam_pressurizer('hp_steam')
        .inputFluids('gtceu:steam 6400')
        .outputFluids('gtceu:high_pressure_steam 640')
        .duration(2)
        .EUt(240)
}
)