GTCEuStartupEvents.registry("gtceu:recipe_type", (event) => {
    event
      .create("steam_pressurizer")
      .category("test")
      .setEUIO("in")
      .setMaxIOSize(0, 0, 1, 1)
      .setSlotOverlay(false, false, GuiTextures.BOX_OVERLAY)
      .setProgressBar(GuiTextures.PROGRESS_BAR_COMPRESS, FillDirection.LEFT_TO_RIGHT)
      .setSound(GTSoundEntries.COOLING);
  });
  