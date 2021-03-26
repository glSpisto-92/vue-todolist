let app = new Vue(
  {
    el: '#app',
    data: {
      // array lista spesa
      listaSpesa: [],
      item: '',
    },
    // funzioni o metodi da richiamare nell'html
    methods: {
      // rimuovi elemento
      removeItem: function(index){
        this.listaSpesa.splice(index, 1);
      },
      // aggiungi elemento
      addItem: function(){
        // se il campo e diverso da vuoto aggiungi elemento
        if(this.item != ''){
          this.listaSpesa.push(this.item);
          this.item = '';
        };
      }
    }
  }
);
