import Accordion from 'react-bootstrap/Accordion';

const Menu = () => {
    return(
        <Accordion className="rounded-0">
            <Accordion.Item className="bg-transparent border-0" eventKey="0">
                <Accordion.Header className="bg-transparent hidden-after">Dashboard</Accordion.Header>
            </Accordion.Item>
            <Accordion.Item className="bg-transparent border-0" eventKey="1">
                <Accordion.Header className="bg-transparent hidden-after">Shop</Accordion.Header>
            </Accordion.Item>
        </Accordion>
    );
}

export default Menu;