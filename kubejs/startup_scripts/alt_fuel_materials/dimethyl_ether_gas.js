GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('dimethyl_ether')
        .gas()
        .color(0xffe6ff)
  })

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('aluminosilicate_catalyst')
        .dust()
        .color(0x284d8a).iconSet(GTMaterialIconSet.FLINT)
})