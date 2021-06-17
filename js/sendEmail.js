function sendEmail(event, form){
    event.preventDefault()

    let modal = document.getElementById("modal")
    modal.classList.add("modal-active")

    let closeBtn = document.getElementById("modal-close")
    closeBtn.addEventListener("click", ()=>{
        modal.classList.remove("modal-active")
        form.submit()
    })
}