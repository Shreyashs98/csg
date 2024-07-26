import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

function BasicExample() {
  return (
    <Dropdown>
      <Dropdown.Toggle className="bg-lightBlue-500 text-white active:bg-lightBlue-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
 variant="success" id="dropdown-basic">
        Download E-Book
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">English</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Marathi</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Gujarathi</Dropdown.Item>
        <Dropdown.Item href="#/action-4">Arabic</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default BasicExample;