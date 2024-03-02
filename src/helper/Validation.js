function Validation(e)
{
    const input = e.target;
    if(input.validity.valid)
    {
        input.classList.add('is-valid');
        input.classList.remove('is-invalid');
    }
    else
    {
        input.classList.add('is-invalid');
        input.classList.remove('is-valid');
    }
}

export default Validation;