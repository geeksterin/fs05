const panels = document.querySelectorAll('.panel');

panels.forEach((panel)=>{
    panel.addEventListener('click',(event)=>{
        if(!panel.classList.contains('active'))
            {
                panels.forEach((panel)=>{
                    panel.classList.remove('active');
                })
                panel.classList.add('active');
            }
    })
})
