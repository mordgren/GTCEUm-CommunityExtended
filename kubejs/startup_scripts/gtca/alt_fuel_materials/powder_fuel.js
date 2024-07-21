GTCEuStartupEvents.registry('gtceu:material', event => {

    event.create('isononyl_alcohol')
    .fluid()
    .components('9x carbon', '19x hydrogen', '1x oxygen', '1x hydrogen')
    .color(0xffffff)
    .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    // fluid extractor

    event.create('phthalic_anhydride_fluid')
    .fluid()
    .components('8x carbon', '4x hydrogen', '3x oxygen')
    .color(0x558000)
    .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    // oil

    event.create('oxylene')
    .fluid()
    .components('8x carbon', '10x hydrogen')
    .color(0x669999)
    .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
    
    event.create('octene')
    .fluid()
    .components('8x carbon', '16x hydrogen')
    .color(0xff9f80)
    .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    // Diisononyl phthalate

    event.create('diisononyl_phthalate')
    .fluid()
    .components('26x carbon', '42x hydrogen', '4x oxygen')
    .color(0x262626)
    .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    

})
