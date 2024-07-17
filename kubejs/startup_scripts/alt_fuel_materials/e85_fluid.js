GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('e85_fuel')
        .fluid()
        .color(0xccddff)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
  })