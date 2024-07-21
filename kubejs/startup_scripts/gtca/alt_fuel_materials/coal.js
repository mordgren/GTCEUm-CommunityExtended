GTCEuStartupEvents.registry('gtceu:material', event => {
  event.create('lignite_coal')
      .gem(2, 300) 
      .components('carbon') 
      .ore(2, 3) 
      .burnTime(1200)
      .color(0x4D1A00).iconSet(GTMaterialIconSet.LIGNITE)
      .flags(GTMaterialFlags.FLAMMABLE)


      event.create('anthracite_coal')
      .gem(2, 2000)
      .components('carbon') 
      .ore(2, 3) 
      .burnTime(3800)
      .color(0x1A1A1A).iconSet(GTMaterialIconSet.FLINT)
      .flags(GTMaterialFlags.FLAMMABLE)

})

