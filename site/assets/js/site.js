(function(){
  // Mobile menu toggle
  var btn=document.querySelector('header button[aria-label="Toggle navigation menu"]');
  var nav=document.querySelector('header nav[aria-label="Mobile navigation"]');
  if(btn&&nav){
    var openIcon=btn.innerHTML;
    var closeIcon='<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>';
    function set(open){nav.hidden=!open;btn.setAttribute('aria-expanded',open?'true':'false');btn.innerHTML=open?closeIcon:openIcon}
    btn.addEventListener('click',function(){set(nav.hidden)});
    nav.addEventListener('click',function(e){if(e.target.closest('a'))set(false)});
    window.addEventListener('resize',function(){if(window.innerWidth>=1024)set(false)});
  }
  // Request service form: opens an email to Condon with the details filled in
  var form=document.querySelector('form[data-cf-request]');
  if(form){
    form.addEventListener('submit',function(e){
      e.preventDefault();
      var v=function(id){return (document.getElementById(id).value||'').trim()};
      var name=v('rs-name'),phone=v('rs-phone'),email=v('rs-email'),msg=v('rs-message');
      var err=form.querySelector('.cf-form-error');
      if(!name||!phone||!email||!msg||!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)){
        err.textContent='Please fill in your name, phone, a valid email and what you need.';err.hidden=false;return;
      }
      err.hidden=true;
      var body='Name: '+name+'\nPhone: '+phone+'\nEmail: '+email+'\n\n'+msg;
      location.href='mailto:Kennycondon@condonfire.com?subject='+encodeURIComponent('Service request from '+name)+'&body='+encodeURIComponent(body);
    });
  }
})();
