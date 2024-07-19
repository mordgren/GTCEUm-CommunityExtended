GTCEuStartupEvents.registry("gtceu:machine", (event) => {
    event
      .create("steam_pressurizer", "multiblock")
      .rotationState(RotationState.NON_Y_AXIS)
      .recipeType("steam_pressurizer")
      .appearanceBlock(GTBlocks.MACHINE_CASING_ULV)
      .recipeModifier(
        GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(
          OverclockingLogic.NON_PERFECT_OVERCLOCK
        )
      )
      .pattern((definition) =>
        FactoryBlockPattern.start()
          .aisle("BAAAB", "BCCCB")
          .aisle("BAEAB", "AGGGA")
          .where("E", Predicates.controller(Predicates.blocks(definition.get())))
          .where("A", Predicates.blocks("gtceu:solid_machine_casing"))
          .where("G", Predicates.blocks("gtceu:tempered_glass"))
          .where("C", Predicates.blocks("gtceu:steel_pipe_casing"))
          .where(
            "B",
            Predicates.blocks("gtceu:solid_machine_casing")
              .setMinGlobalLimited(2)
              .or(Predicates.autoAbilities(definition.getRecipeTypes()))
          )
          .build()
      )
      .workableCasingRenderer(
        "gtceu:block/casings/solid/machine_casing_solid_steel",
        "gtceu:block/multiblock/implosion_compressor",
        true
      );
  });
  