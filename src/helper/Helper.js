class Helper{
    constructor(){}

    Validation(e)
    {
        const input = e.target;
        if(input.validity.valid)
        {
            input.classList.add('is-valid');
            input.classList.remove('is-invalid','animate__animated','animate__shakeX');
        }
        else
        {
            input.classList.add('is-invalid','animate__animated','animate__shakeX');
            input.classList.remove('is-valid');
        }
    }

    ImagesHelper(e,options=null)
    {
        const target = e.target,
        input = document.createElement('input');

        input.type = 'file';
        input.accept = options || 'image/*';
        input.onchange = function(e)
        {
            const file = e.target.files[0];
            const reader = new FileReader();

            reader.onload = function(e)
            {
                const dataURL = e.target.result;
                const html = `<img class="object-fit-scale w-100 h-100" src="${dataURL || ''}" alt="${file.name || ''}"/>
                <div class="position-absolute top-0 end-0 p-1 bg-dark">
                    <a href="javascript:void(0)" class="btn-delete-image">
                        <i class="fa-regular fa-trash-can fa-lg text-danger"></i>
                    </a>
                </div>`;
                target.closest('div[role=\'button\']').innerHTML = html;
                
                return{
                    dataURL: dataURL,
                    name: file.name,
                    size: file.size,
                    type: file.type
                };
            };
            reader.readAsDataURL(file);
        };
        input.click();
    }
}

export default new Helper();