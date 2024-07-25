GTCEuStartupEvents.registry("gtceu:recipe_type", (event) => {
    event
      .create("chem_gen")
      .category("test")
      .setEUIO("out")
      .setMaxIOSize(2, 0, 2, 0)
      .setSlotOverlay(false, false, GuiTextures.BOX_OVERLAY)
      .setProgressBar(GuiTextures.PROGRESS_BAR_BATH, FillDirection.LEFT_TO_RIGHT)
      .setSound(GTSoundEntries.COOLING);
  });
  