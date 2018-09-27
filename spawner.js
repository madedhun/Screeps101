ire('class');
module.exports = {

	run: function()
	{
		
		var newname = generatename('Creep');
		var bodymod = ['WORK','MOVE','CARRY'];
		//csak akkor spawnoljunk ha szükséges
		for (let i in Game.spawns)
		{
			Game.spawns[i].Spawncreep(bodymod,newname);

		}

//a memóroiájába írjuk be a funkcióját



	}




//név generátor  generatename
	
};
