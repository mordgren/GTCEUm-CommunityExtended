ServerEvents.recipes(event => {

    event.remove({mod: 'sfm'})



            } 
)

ServerEvents.recipes(event => {

    event.recipes.gtceu.assembler('greggy_manager')
.circuit(12)
.itemInputs( 
    '2x #gtceu:circuits/ev',
    '3x gtceu:cobalt_brass_large_item_pipe',
    '4x gtceu:ev_robot_arm',
    'gtceu:computer_monitor_cover',
    '8x gtceu:double_stainless_steel_plate',
    '2x gtceu:item_filter',
    'gtceu:data_access_hatch'
)
.itemOutputs('sfm:manager')
.duration(1200)
.EUt(1760)

event.recipes.gtceu.assembler('inv_cable')
.circuit(12)
.itemInputs(
    '8x gtceu:long_distance_item_pipeline',
    '8x gtceu:long_distance_fluid_pipeline',
    '2x gtceu:ev_electric_motor',
    '18x gtceu:black_steel_plate'
)
.itemOutputs('16x sfm:cable')
.duration(870)
.EUt(980)

event.recipes.gtceu.circuit_assembler('sfm:disk_gregg')
.itemInputs(
    '16x gtceu:fine_electrum_wire',
    'gtceu:qbit_cpu_chip',
    '2x gtceu:nano_cpu_chip',
    '8x gtceu:ram_chip',
    '4x gtceu:polyethylene_plate'
)
.notConsumable('1x gtceu:data_stick')
.inputFluids('gtceu:soldering_alloy 144')
.duration(600)
.EUt(1920)
.itemOutputs('4x sfm:disk')



} 


)

