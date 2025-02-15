export class Satellite {

	name: string;
	type: string;
	launchDate: string;
	orbitType: string;
	operational: boolean;

	constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean) {
		this.name = name;
		this.type = type;
		this.launchDate = launchDate;
		this.orbitType = orbitType;
		this.operational = operational;
   }
	
	isSpaceDebris(): boolean {
		//updated the isSpaceDebris function
		if(this.type.toLowerCase() == 'space debris'){
			return true;
		}else{
			return false;
		}
		
   }
   //bonus:function for zebra stripes
   zebraStripe(array): boolean {
    return array.indexOf(this) % 2 === 0;
  }

}

// TODO 3a: fix isSpaceDebris check
