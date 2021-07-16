const form = document.forms[0];
form.addEventListener('submit', (e) => {
    e.preventDefault()
    const result = document.getElementById("result")
    const height = form.height.value
    const mether = form.mether.value
    let kpd = mether*height*42*1.5;
    result.textContent = kpd + " Вm"   
})

