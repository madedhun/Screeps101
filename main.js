var _Spawner = require('spawner');
module.exports.loop = function () {
	
	//megcsinálni a neves funkciót
	var screepnames = 'Creep 1';
	

	//frissíteni a neveket ha valaki meghal vagy valami
	_Spawner.run();
	
	var creep = Game.creeps['Harvester1'];
    var sources = creep.room.find(FIND_SOURCES);
    if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) 
    {
        creep.moveTo(sources[0]);
    }


 	
    
 	



}
