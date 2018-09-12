var $$ = Dom7;

var appF7 = new Framework7({
 // App root element
 root: '#app',
 // App Name
 name: 'Template de App',
 // App id
 id: 'br.org.rfdouro.TemplateF7Vue',
 // Enable swipe panel
 panel: {
  swipe: 'left',
 },
 // Add default routes
 routes: [
  {
   path: '/sobre/',
   url: './paginas/sobre.html',
  },
 ],
 // App root methods
 methods: {
  ola: function () {
   appF7.dialog.alert('Olá ' + $$('#txNome').val() + '!');
  },
 },
 // ... other parameters
});

var mainView = appF7.views.create('.view-main');

var calendar = appF7.calendar.create({
 inputEl: '#calendar-input',
 openIn: 'customModal',
 header: true,
 footer: false,
 dateFormat: 'dd/mm/yyyy',
 closeOnSelect: true
});

