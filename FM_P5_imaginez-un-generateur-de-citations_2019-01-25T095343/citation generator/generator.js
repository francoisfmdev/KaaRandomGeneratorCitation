

	function numberRandom(min, max)
	{
	 return Math.floor(Math.random() * (max - min + 1)) + min;
	}




	class Citations{
		
		constructor(){
			this.first  = [];
			this.middle = [];
			this.end    = [];
		}
		
		
		
	}

	class Generator{
		
		constructor(){
			this.chainFirst     = "";
			this.chainMiddle   	= "";
			this.chainEnd	   	= "";
			this.finalChain    	= "";
			this.nRandomFirst 	= 0;
			this.nRandomMiddle  = 0;
			this.nRandomEnd     = 0;
		}
		
		randomize(a,c){
			
			var choix = 0;
			choix = choix + c;
			var compteur = 0;
			while (compteur < choix) {
			  
				this.nRandomFirst  = numberRandom(0,a.first.length -1);
				this.nRandomMiddle = numberRandom(0,a.middle.length -1);
				this.nRandomEnd    = numberRandom(0,a.end.length -1);
				
				this.chainFirst = a.first[this.nRandomFirst];
			
				this.chainMiddle = a.middle[this.nRandomMiddle];
				
				this.chainEnd = a.end[this.nRandomEnd];
				
				
				a.finalChain = this.chainFirst +this.chainMiddle + this.chainEnd;
				console.log(a.finalChain);
			
				var citation = a.finalChain;
				document.getElementById('citations').insertAdjacentHTML("afterBegin","<li id='citation'>"+ citation + '</li>');	
				compteur ++;
			}
					
			
		}
		
		
	}

	var generator = new Generator();
	var author    = new Citations();
	var authorTwo    = new Citations();

	author.first  = ["Faut arrêter ces conneries de nord et de sud ",
					"Donc, pour résumer, je suis souvent victime des colibris ", 
					"En plus je connais une technique ",
					"C’est pour ça : j’lis jamais rien "]
					
	author.middle = ["! Une fois pour toutes, le nord, suivant comment on est tourné,",
					"sous-entendu des types qu’oublient toujours tout, Euh, "
					,"pour tuer trois hommes en un coup  ",
					"c’est un vrai piège à cons "]
					
	author.end 	  = ["ça change tout !",
					"Bref, tout ça pour dire, que je voudrais bien qu’on me considère en tant que tel.",
					"rien qu'avec des feuilles mortes !",
					"c’t’histoire-là!"]

	authorTwo.first  = ["Mon frère, il peut pas aller à l'école, ",
						"Lorsqu'on le tient par la partie sporadique, ", 
						"La politique de l'autruche, ",
						"Ça y est… je vois trouble, "]
					
	authorTwo.middle = ["quand on lui explique un machin technique, ",
					"ou boulière, ",
					"c'est une politique qui court vite, une politique qui fait des gros œufs, ",
					"C’est le manque de gras, "]
					
	authorTwo.end 	  = [" il s'évanouit.",
					"le fenouil est un objet redondant.",
					"c'est tout.",
					" je me dessèche."]					
					
		



										


function generatePerceval(){
	
	 
	generator.randomize(author,document.getElementById("compteur").value);
}

function generateKaradoc(){
	
	generator.randomize(authorTwo,document.getElementById("compteur").value);
	
}



var boutonPerceval = document.getElementById("perceval");
// Ajout d'un gestionnaire pour l'événement click
boutonPerceval.addEventListener("click",generatePerceval);


var boutonKaradoc = document.getElementById("karadoc");
// Ajout d'un gestionnaire pour l'événement click
boutonKaradoc.addEventListener("click",generateKaradoc);