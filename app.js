const app = Vue.createApp({

data(){
	return{
		inputValueOne: ' ',
		inputValueTwo: ' ',
	}
},

methods:{
	showAlert(){
		alert("Hi! I am Alerting you!");
		console.log('alerting');
	},

	onKeyDownEvent(event){
		this.inputValueOne = event.target.value;

	},

	onEnterEvent(event){
		this.inputValueTwo = event.target.value;

	}
}





});

app.mount("#assignment");