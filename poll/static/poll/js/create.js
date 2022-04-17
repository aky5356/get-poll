
function add_image(uploaded_img){
   
        // console.log(uploaded_img)
        const cp_option = uploaded_img.parentNode.parentNode
        const reader = new FileReader()
        reader.addEventListener("load", () => {
            cp_option.style.height = '350px';
            cp_option.style.backgroundImage = `url(${reader.result})`
            cp_option.style.borderRadius = '10px'
            cp_option.style.border = '1px solid #dee2e6';
            const wrapper = cp_option.children[1]
            // console.log(wrapper)
            wrapper.id = 'blur-input'
            const img_xmark = cp_option.children[0]
            // console.log(img_xmark)
            img_xmark.style.display = 'flex'
            img_xmark.addEventListener('click', (event) => {
                cp_option.style.height = 'auto'
                wrapper.id = ''
                img_xmark.style.display = 'none'
                cp_option.style.backgroundImage = ''
                cp_option.style.border = 'none';
            })
        })
        reader.readAsDataURL(uploaded_img.files[0])
}

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
    const child_cnt = option_list.children.length;
    const new_option = document.createElement('div')
    new_option.className = 'cp-options cp-option-extra'
    new_option.innerHTML = `
                <i class="fa-solid fa-xmark img-xmark"></i>
                <div class="cp-options-input-icons-wrapper">
                    <input type="text" class="cp-option-text">
                    <label for="file_input-${child_cnt}">
                        <i class="fa-solid fa-images"></i>
                    </label>
                    <input type="file" name="file_input-${child_cnt}" id = "file_input-${child_cnt}"class ="file_input" style="display: none;" accept="image/*" onchange="add_image(this)">
                    <i class="fa-solid fa-xmark remove-option"></i>
                </div>
              `
    option_list.appendChild(new_option)
    remove_option()
})

