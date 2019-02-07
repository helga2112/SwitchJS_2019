class Cat{


    constructor(name = 'Paws'){
       this.name = name;
       this.tiredness = 0;
       this.hunger = 0;
       this.lonliness = 0;
       this.happiness = 100;

       setInterval(() => {
            this.change('tiredness', Math.round(Math.random()*2));
            this.change('hunger', Math.round(Math.random()*3));
            this.change('lonliness', Math.round(Math.random()*2));
            this.change('happiness', Math.round(Math.random()*(-5)));
			console.log(this);
       }, 1000);
    }


    change(value, n){
       this[value] += n;
	   //console.log(value, this[value])
    }

	// hunger
    feed(n){
        this.change('hunger', n);
    }

	//tiredness
    sleep(n){
        this.change('tiredness', n);
    }

	//lonliness
	//caress - гладить
  	caress(n){
  	    this.change('lonliness', n); 
    }

	//happiness
    pet(n){	
		if((Math.random() * 100 > 50)){
		 this.change('happiness', n); 
        }
       
    }

    showStatus(){
		console.log(Object.values(this));

		if(this.tiredness  < 30){
			console.log(`${this.name} is not tired (${this.tiredness})`)
		}else if(this.tiredness >=20 && this.tiredness < 60){
			console.log(`${this.name} is tired (${this.tiredness})`)
		}else {
			console.log(`${this.name} is very tired (${this.tiredness})`)
		}

		if(this.hunger  < 30){
			console.log(`${this.name} is not hungry (${this.hunger})`)
		}else if(this.hunger >=20 && this.hunger < 60){
			console.log(`${this.name} is hungry (${this.hunger})`)
		}else {
			console.log(`${this.name} is very hungry (${this.hunger})`)
		}
        
		if(this.happiness  >= 70){
			console.log(`${this.name} is very happy (${this.happiness})`)
		}else if(this.happiness >=30 && this.happiness < 70){
			console.log(`${this.name} is not very happy (${this.happiness})`)
		}else {
			console.log(`${this.name} is unhappy (${this.happiness})`)
		}

		
		if(this.lonliness  < 30){
			console.log(`${this.name} is not lonely (${this.lonliness})`)
		}else if(this.lonely >=20 && this.lonely < 60){
			console.log(`${this.name} is lonely (${this.lonliness})`)
		}else {
			console.log(`${this.name} is very lonely (${this.lonliness})`)
		}
    }
}

var cat = new Cat(); 
cat.showStatus();