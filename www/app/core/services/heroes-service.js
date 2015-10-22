angular.module('app.core')
	.service('Heroes', function(){
		// Returns available heroes
		this.get_all = function(callback){
			return 	['Moon Rider', 'Crystal Maiden', 'Ogre Magi', 
					'Juggernaut', 'Phantom Lancer', 'Lich'];	
		}
	});