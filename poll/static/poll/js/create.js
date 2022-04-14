const fa_images = document.querySelector('.fa-images')
var uploaded_img = ""
fa_images.addEventListener('click', ()=>{
    const file_input = document.createElement('input')
    file_input.setAttribute('type', 'file')
    file_input.setAttribute('accept', 'image/*')
    file_input.click();
    const cp_option = document.querySelector('.cp-options')
    file_input.addEventListener('change', ()=>{
        const reader = new FileReader()
        reader.addEventListener("load", () => {
            uploaded_img = reader.result
            cp_option.style.height = '400px'
            cp_option.style.backgroundImage = `url(${uploaded_img})`
        })
        reader.readAsDataURL(file_input.files[0])
    })
    const wrapper = document.querySelector('.cp-options-input-icons-wrapper');
    wrapper.style.border = 'none'
    wrapper.style.boxShadow = 'none'
    wrapper.style.borderRadius = '10px'
    wrapper.style.backgroundColor = 'rgba(255,255,255, 0.5)'
    wrapper.style.color = 'white'
    wrapper.style.margin = '0px 10px 10px'

})