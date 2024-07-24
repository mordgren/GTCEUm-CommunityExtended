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
          .aisle("III", "PPP", "PPP", "III")
          .aisle("III", "P#P", "P#P", "III")
          .aisle("III", "PPP", "PPP", "III")
          .aisle("III", "CSC", "CSC", "III")
          .aisle("III", "FGF", "FGF", "III")
          .aisle("IMI", "III", "ILI", "IHI")
          .where("M", Predicates.controller(Predicates.blocks(definition.get())))
          .where("#", Predicates.blocks("gtceu:ptfe_pipe_casing"))
          .where("G", Predicates.blocks("gtceu:stainless_steel_gearbox"))
          .where("P", Predicates.blocks("gtceu:inert_machine_casing"))
          .where("C", Predicates.blocks("gtceu:cupronickel_coil_block"))
          .where("S", Predicates.blocks("gtceu:steel_pipe_casing"))
          .where("F", Predicates.blocks("gtceu:steel_firebox_casing"))
          .where('L', Predicates.abilities(PartAbility.MAINTENANCE))
          .where('H', Predicates.abilities(PartAbility.MUFFLER))
          .where(
            "I",
            Predicates.blocks("gtceu:heatproof_machine_casing")
              .setMinGlobalLimited(34)
              .or(Predicates.abilities(PartAbility.IMPORT_ITEMS))
              .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS))
              .or(Predicates.abilities(PartAbility.OUTPUT_ENERGY).setExactLimit(1))
          )
          .build()
      )
      .workableCasingRenderer(
        "gtceu:block/casings/solid/machine_casing_heatproof",
        "gtceu:block/multiblock/implosion_compressor",
        true
      );
  });
  