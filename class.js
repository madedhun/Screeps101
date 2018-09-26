module.exports = {

	class _Entity 
	{
		constructor(Energy,xpos,ypos)
		{
			this.Energy = Energy;
			this.xpos = xpos;
			this.ypos = ypos;
		}
	}
	class _Creep
	{
		constructor()
		{

		}
	}

	function generatename (whattogenerate)
	{
		var Name;//ebbe teszük bele a végén a kimeneti nevet

		if (whattogenerate == 'Creep') //crep nevet akarunk szinte mindig
		{
			var i = 0;
			Name = 'Creep ' + i;
			
			for (let j in Game.creeps)
			{
				if (Game.creeps[Name] == undefined)
				{
					i = i++;
				}
			}	
		
			Name = 'Creep' + i;
			
		}
		else if (whattogenerate == 'Structure') 
		{
			Name = 'Structure ' + i;

		}
		console.log(Name)
		return Name;

	}

};
