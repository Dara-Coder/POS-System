function Validation(e)
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

export default Validation;