window.addEventListener('wheel',function(e){
    if(e.ctrlKey){
      e.preventDefault();
    }
  },{passive:false});