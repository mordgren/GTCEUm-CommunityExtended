GTCEuServerEvents.oreVeins(event => {
  event.add("kubejs:lignite_coal_vein", vein => {
      vein.weight(30) 
      vein.clusterSize(20) 
      vein.density(0.7) 
      vein.discardChanceOnAirExposure(0) 
      vein.layer("stone") 
      vein.dimensions("minecraft:overworld")  
      vein.biomes("#minecraft:is_overworld")  
      vein.heightRangeUniform(20,40) 
      vein.layeredVeinGenerator(generator => generator
          .buildLayerPattern(pattern => pattern
              .layer(l => l.weight(3).mat(GTMaterials.get('lignite_coal')).size(2, 3))  
              .layer(l => l.weight(1).block(() => Block.getBlock('minecraft:calcite')).size(1, 1))          
          )
      )


  vein.surfaceIndicatorGenerator(indicator => indicator
  .surfaceRock(GTMaterials.Coal) // [*] 
  .placement("above") // 
  .density(0.4)
  .radius(5)
  )
})
})

GTCEuServerEvents.oreVeins(event => {
  event.add("kubejs:antracite_coal_vein", vein => {
      vein.weight(20) 
      vein.clusterSize(20) 
      vein.density(0.6) 
      vein.discardChanceOnAirExposure(0) 
      vein.layer("stone") 
      vein.dimensions("minecraft:overworld")  
      vein.biomes("#minecraft:is_overworld")  
      vein.heightRangeUniform(-40,0) 
      vein.layeredVeinGenerator(generator => generator
          .buildLayerPattern(pattern => pattern
              .layer(l => l.weight(3).mat(GTMaterials.get('anthracite_coal')).size(3, 3))  
              .layer(l => l.weight(3).mat(GTMaterials.Graphite).size(1, 1))        
          )
      )


  vein.surfaceIndicatorGenerator(indicator => indicator
  .surfaceRock(GTMaterials.Coal) 
  .placement("above") 
  .density(0.4)
  .radius(5)
  )
})
})