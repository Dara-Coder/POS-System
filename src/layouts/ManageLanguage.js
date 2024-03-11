import {
    Fragment,
    useEffect,
    useRef,
    useState
} from "react";
import {
    English,
    Khmer
} from "./Images";

function ManageLanguage()
{
    const langRef = useRef(null);
    const [show, setShow] = useState(false);

    useEffect(() => {
        const langElement = langRef.current;
        document.addEventListener('mouseup',function(e)
        {
            if(langElement && !langElement.contains(e.target))
            {
                setShow(false);
            }
        });
    });

    return(
        <Fragment>
            <div
                ref={langRef}
                onClick={() => setShow(!show)}
                className="rounded-5 px-2 py-1 bg-secondary bg-opacity-25 shadow-sm text-nowrap position-relative"
                role="button">
                <img
                    className="rounded-circle"
                    src={English}
                    alt="image-language"
                    height={25}
                    width={25}/>
                <span
                    className="fw-semibold ps-2">
                    English
                </span>
                {show ? <div
                    className="position-absolute z-3 rounded-3 border top-100 start-50 translate-middle-x bg-white shodow overflow-hidden animate__animated animate__jackInTheBox">
                    <ul
                        className="m-0 p-0 list-unstyled">
                        <li
                            className="on-active d-flex align-items-center px-3 py-2">
                            <img
                                className="rounded-circle"
                                src={English}
                                alt="image-language-english"
                                height={25}
                                width={25}/>
                            <p
                                className="ms-2 text-capitalize p-0 m-0 fw-semibold">English</p>
                        </li>
                        <li
                            className="on-active d-flex align-items-center px-3 py-2 border-top">
                            <img
                                className="rounded-circle"
                                src={Khmer}
                                alt="img-language-khmer"
                                height={25}
                                width={25}/>
                            <p
                                className="ms-2 text-capitalize p-0 m-0 fw-semibold">Khmer</p>
                        </li>
                    </ul>
                </div> : ''}
            </div>
            <hr
                className="w-100 m-0 p-0 d-block d-sm-block d-md-none d-lg-none d-xl-none d-xxl-none"/>
        </Fragment>
    );
}

export default ManageLanguage;