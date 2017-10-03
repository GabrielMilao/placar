<template>
	<div id="futebol">
		<header  class="cabecalho">
			<h1 class="cabecalho-tiulo">Futebol</h1>
		</header>		
		<main class="placar">
			<button class="placar-itens" v-on:click="MandouSuperMal">Cartão Amarelo</button>
			<button class="placar-itens" v-on:click="MandouMegaMal">Cartão Vermelho</button>
			<button class="placar-itens" v-on:click="MandouMuitoBem">Fazer Gol</button>
			<button class="placar-itens" v-on:click="MandouMal">Fazer Falta</button>
			<button class="placar-itens" v-on:click="MandouMuitoMal">Fazer Pênalti</button>
			<button class="placar-itens" v-on:click="MandouSuperBem">Fazer Gol de Falta</button>
			<button class="placar-itens" v-on:click="MandouBem">Fazer Gol de Pênalti</button>
			<button class="placar-itens" v-on:click="MandouMegaBem">Fazer Golaço</button>

		</main>
		<footer>
			<button>Mostrar Resultado</button>
		</footer>
	</div>
</template>
<script>
	name:'Futebol',
	data(){
		return{
			pontos:0,
			resultado:''
		}
	},
	methods:{
		MandouSuperMal(){
			this.pontos += -15
		},
		MandouMegaMal(){
			this.pontos += -20
		},
		MandouMuitoBem(){
			this.pontos += +10
		},
		MandouMal(){
			this.pontos += -5
		},
		MandouMuitoMal(){
			this.pontos += -10
		},
	}
</script>
<style scoped>
	
</style>