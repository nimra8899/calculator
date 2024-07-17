let input =document.getElementById('inputbox');
let buttons=document.querySelectorAll('button');
let string='';
let array1=Array.from(buttons);
array1.forEach(button=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='='){
            string=eval(string);//agar jo button click hua wo = ha sare string ki value evaluate krdo
            //string is placeholder jaha value aati
            input.value=string;//input feild me sstring dal do
        }
        else if(e.target.innerHTML=='AC'){
            string='';//agar ac button daba to string empty krdo
            input.value=string;//input feild me sstring dal do

        }
        else if(e.target.innerHTML=='DEL'){
            string=string.substring(0,string.length-1);//agar del button daba to string me se ik last digit kam hoga
            input.value=string;//input feild me sstring dal do

        }
        else {
            string+=e.target.innerHTML;//agar button = nhi to string me sab add krte jao
        input.value=string;//input feild me sstring dal do

        }
        
    })
})