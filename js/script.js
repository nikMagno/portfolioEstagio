 /* Carregando pagina na DIV*/
 
 $(function(){
    $("#conteudo").load("/pages/home.html");
  });

  function carregar(pagina){
      $("#conteudo").load(pagina);
  }

  /* Menu Mobile */

  $(function(){
    $('nav.mobile i').click(function(){
      var el = $(this).parent().find('ul');
        if(el.is(':visible') == false){
          el.fadeIn();
        }else{
          el.fadeOut();
        }
    })
  })