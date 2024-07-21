GTCEuStartupEvents.registry("gtceu:machine", (event) => {
    event
      .create("chem_gen", "multiblock")
      .rotationState(RotationState.NON_Y_AXIS)
      .recipeType("chem_gen")
      .appearanceBlock(GTBlocks.MACHINE_CASING_ULV)
      .recipeModifier(
        GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(
          OverclockingLogic.NON_PERFECT_OVERCLOCK
        )
      )
      .pattern((definition) =>
        FactoryBlockPattern.start()
          .aisle("IIIIII", "PPPCFI", "PPPCFI", "IIIIII")
          .aisle("IIIIIM", "P#PSGI", "P#PSGL", "IIIIIH")
          .aisle("IIIIII", "PPPCFI", "PPPCFI", "IIIIII")
          .where("M", Predicates.controller(Predicates.blocks(definition.get())))
          .where("#", Predicates.blocks("gtceu:ptfe_pipe_casing"))
          .where("G", Predicates.blocks("gtceu:steel_gearbox"))
          .where("P", Predicates.blocks("gtceu:inert_machine_casing"))
          .where("C", Predicates.blocks("gtceu:cupronickel_coil_block"))
          .where("S", Predicates.blocks("gtceu:steel_pipe_casing"))
          .where("F", Predicates.blocks("gtceu:steel_firebox_casing"))
          .where('L', Predicates.abilities(PartAbility.MAINTENANCE))
          .where('H', Predicates.abilities(PartAbility.MUFFLER))
          .where(
            "I",
            Predicates.blocks("gtceu:heatproof_machine_casing")
              .setMinGlobalLimited(2)
              .or(Predicates.autoAbilities(definition.getRecipeTypes()))
          )
          .build()
      )
      .workableCasingRenderer(
        "gtceu:block/casings/solid/machine_casing_heatproof",
        "gtceu:block/multiblock/implosion_compressor",
        true
      );
  });
  