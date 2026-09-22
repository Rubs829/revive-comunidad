(function(){
  'use strict';
  const body=document.body;
  body.classList.remove('no-js');
  body.classList.add('js-enabled');
  const nav=document.getElementById('main-nav');
  const menu=document.querySelector('.menu-toggle');
  const form=document.getElementById('contact-form');
  const status=document.getElementById('form-status');

  menu?.addEventListener('click',()=>{
    const open=nav.classList.toggle('open');
    menu.setAttribute('aria-expanded',String(open));
    menu.setAttribute('aria-label',open?'Cerrar menú principal':'Abrir menú principal');
  });

  nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
    nav.classList.remove('open');
    menu?.setAttribute('aria-expanded','false');
    menu?.setAttribute('aria-label','Abrir menú principal');
  }));

  form?.addEventListener('submit',e=>{
    e.preventDefault();
    if(status){
      status.textContent='Gracias. La maqueta registró tu interés de forma local como demostración.';
    }
    form.reset();
  });
})();
