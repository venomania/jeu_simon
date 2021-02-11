let scrore = 0;
let times;
var countDownDate;
var xhr = new XMLHttpRequest();

const vm = new Vue({
	el: '#app',
	data: {

		sequence: [],
		hautGauche: false,
		hautDroite: false,
		basGauche: false,
		basDroite: false,
		hautMilieu: false,
		milieu: false,
		basMilieu: false,
		milieuGauche: false,
		milieuDroite: false,
		tmp: [],

		squareMapping: ['hautGauche', 'hautMilieu','hautDroite', 'basDroite','milieuGauche',  'milieu',  'milieuDroite','basMilieu', 'basGauche'],
	},
	computed: {
		score() {
			const value = this.sequence.length - 1
			scrore = value;
			return (value < 0) ? `Score : 0` : `Score: ${value}`;
		}
	},
	methods: {

		addNewElemToSequense() {
			this.sequence.push(this.squareMapping[Math.floor(Math.random() * 9)]);
			this.tmp = this.sequence.slice();
		},

		allGray() {
			this.hautGauche = false;
			this.hautDroite = false;
			this.basGauche = false;
			this.basDroite = false;
			this.hautMilieu = false,
			this.milieu = false,
			this.basMilieu = false,
			this.milieuGauche = false,
			this.milieuDroite = false
		},
		newGame() {

			countDownDate = new Date().getHours();

			this.sequence = [];
			this.nextTurn();
		},
		nextTurn() {

			this.addNewElemToSequense();
			this.allGray();
			this.playSequence(this.tmp[0]);
		},
		playSequence(instruction) {
			this[instruction] = true;

			setTimeout(() => {
				vm.allGray();
				vm.tmp.shift();
				if (vm.tmp[0]) {
					setTimeout(() => {
						vm.playSequence(vm.tmp[0]);
					}, 400);
				} else {
					vm.tmp = vm.sequence.slice();
				}
			}, 400)
		},

		selectSquare(instruction) {
			console.log(instruction);
			if (instruction === this.tmp[0]) {
				this[instruction] = true;
				setTimeout(() => {
					vm.allGray();
					vm.tmp.shift();
					if (!vm.tmp[0]) {
						vm.nextTurn();
					}
				}, 400);
			} else {

				// alert('perdu');
				let date1 = new Date();
				console.log(date1);
				console.log(countDownDate);
				console.log(scrore);
				var person = prompt("Votre pseudo");
				xhr.open("POST", 'https://127.0.0.1:8000/joueur/new', true);
				xhr.setRequestHeader('X-PINGOTHER', 'pingpong');
				xhr.setRequestHeader('Content-Type', 'application/xml');
				xhr.send("useur=domenic");
			}

		}
	}
})