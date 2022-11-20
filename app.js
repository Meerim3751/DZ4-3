const kgs = document.querySelector('.kgs')
const usd = document.querySelector('.usd')

function convert(elem,elem2){
    elem.addEventListener('input',()=>{
        const request = new XMLHttpRequest()
        request.open('GET','data.json')
        request.setRequestHeader('Content-type','application/json')
        request.send()
        request.addEventListener('load',()=>{
            const iusd =  JSON.parse(request.response).usd
            if(elem===kgs){
                elem2.value = (elem.value/iusd).toFixed(2)
            }else if(elem===usd){
                elem2.value = (elem.value*iusd).toFixed(2)
            }
            if(elem.value===''){
                elem2.value=''
            }
        })
    })
}
convert(kgs,usd)
convert(usd,kgs)
