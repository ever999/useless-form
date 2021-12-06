let qa = document.querySelector('#securityQuestion');
let ansver = document.querySelector('.ansver');
let select = document.querySelector('select > option');
let ansverHolder = document.querySelector('.ansverHolder');

let a;

let slt = document.createElement('select');
let meels = ['eggs', 'sandwich', 'milk', 'apples'];
for(i=0;i<4;i++){
    let opt = document.createElement('option');
    opt.textContent = meels[i];
    slt.appendChild(opt);
}

select.addEventListener('click', fn = () => {
    if (qa.value == 'time'){
        a = setInterval(() =>{
            let date = new Date();
            ansver.style.display = 'block';
            slt.style.display = 'none';
            ansver.type = 'text';
            ansver.disabled = true;
            ansver.value = ' ';
            ansver.value = (date.getUTCFullYear() + '.' + date.getMonth() + '.' + date.getDay() + '.' + date.getHours() + '.' + date.getMinutes() + '.' + date.getSeconds() + '.' + date.getMilliseconds()).toString();
        }, 300);    
    } else if (qa.value == 'pass'){
        ansver.style.display = 'block';
        slt.style.display = 'none';
        clearInterval(a);
        ansver.value = '';
        ansver.type = 'password';
        ansver.disabled = false;
    } else if (qa.value == 'color'){
        ansver.style.display = 'block';
        slt.style.display = 'none';
        clearInterval(a);
        ansver.value = '';
        ansver.type = 'color';  
        ansver.disabled = false;
    } else if (qa.value == 'breakfast'){
        clearInterval(a);
        ansver.value = '';
        ansver.type = 'text';  
        ansver.disabled = false;
        ansver.style.display = 'none';
        
        ansverHolder.appendChild(slt); 
        slt.style.display = 'block';
    }
});