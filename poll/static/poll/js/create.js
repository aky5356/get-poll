
function add_image(){
    var fa_images = document.querySelectorAll('.fa-images')
    var uploaded_img = ""
    fa_images.forEach((e) => {
        e.addEventListener('click', (event)=>{
            const file_input = document.createElement('input')
            file_input.setAttribute('type', 'file')
            file_input.setAttribute('accept', 'image/*')
            file_input.click();
            const cp_option = event.target.parentNode.parentNode
            file_input.addEventListener('change', ()=>{
                const reader = new FileReader()
                reader.addEventListener("load", () => {
                    uploaded_img = reader.result
                    cp_option.style.height = '400px';
                    cp_option.style.backgroundImage = `url(${uploaded_img})`
                    cp_option.style.borderRadius = '10px'
                    const wrapper = cp_option.children[1]
                    console.log(wrapper)
                    wrapper.id = 'blur-input'
                    const img_xmark = cp_option.children[0]
                    console.log(img_xmark)
                    img_xmark.style.display = 'flex'
                    img_xmark.addEventListener('click', (event) => {
                        cp_option.style.height = 'auto'
                        wrapper.id = ''
                        img_xmark.style.display = 'none'
                        cp_option.style.backgroundImage = ''
                    })
                })
                reader.readAsDataURL(file_input.files[0])
            })
        })
    })
}
add_image()

function remove_option(){
    const remove_option_list = document.querySelectorAll('.remove-option')
    remove_option_list.forEach((e) => {
        e.addEventListener("click", (event)=>{
            event.target.parentNode.parentNode.style.display = 'none'
        })
    })
}
remove_option()

const add_option_btn = document.querySelector('.add-option-btn')
add_option_btn.addEventListener('click', () => {
    const option_list = document.querySelector('.cp-options-list')
    const new_option = document.createElement('div')
    new_option.className = 'cp-options cp-option-extra'
    new_option.innerHTML = `
                <i class="fa-solid fa-xmark img-xmark"></i>
                <div class="cp-options-input-icons-wrapper">
                    <input type="text" class="cp-option-text">
                    <i class="fa-solid fa-images"></i>
                    <i class="fa-solid fa-xmark remove-option"></i>
                </div>
              `
    option_list.appendChild(new_option)
    add_image()
    remove_option()
})

