var appV = new Vue({
 el: '#app',
 data: {
  nome: 'romulo',
  data: '',
 },
 methods: {
  mostra: function () {
   appF7.dialog.alert('Olá ' + this.nome + '!');
  },
  closeMenu: function (){
   appF7.panel.close();
  }
 }
});


