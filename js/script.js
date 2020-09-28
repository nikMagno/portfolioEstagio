 /* Carregando pagina na DIV*/
 
 $(function(){
    $("#conteudo").load("/pages/home.html");
  });

  function carregar(pagina){
      $("#conteudo").load(pagina);
  }

  /* Menu Mobile */

  $(function(){
    $('.mobile').click(function(){
      $('.mobile').find('ul').slideToggle();
    })
  });