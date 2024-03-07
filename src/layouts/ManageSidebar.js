import { useEffect, useState } from "react";

function ManageSidebar(props)
{
    const sidebar = props.sidebar.current;
    const [open, setOpen] = useState(false);

    useEffect(() => {
        document.addEventListener('mouseup',(e) => {
            if(sidebar && !sidebar.contains(e.target))
            {
                setOpen(false);
            }
        });
    });

    if(open)
    {
        if(sidebar)
        {
            sidebar.classList.remove('d-none');
            sidebar.classList.add('d-block','z-2');
        }
    }
    else
    {
        if(sidebar)
        {
            sidebar.classList.add('d-none');
            sidebar.classList.remove('d-block','z-2');
        }
    }

    return(
        <button
            onClick={() => setOpen(true)}
            type="button"
            className="border-0 bg-transparent d-block d-lg-none d-xl-none d-xxl-none">
            <i
                className="fa-solid fa-bars fa-xl"></i>
        </button>
    );
}

export default ManageSidebar;