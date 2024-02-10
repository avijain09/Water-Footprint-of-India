import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';

const Dashboard = () => {
  return (
    <div className="col-md-2 bg-dark p-3">
      <h4 className="text-light mb-4">Dashboard</h4>

      {/* States Dropdown */}
      <DropdownButton
        as={ButtonGroup}
        title="States"
        id="bg-vertical-dropdown-1"
        variant="dark"
        className="mb-2 w-100 text-left"
      >
        {/* Replace the list of states with your actual list */}
        <Dropdown.Item className="bg-dark text-light" eventKey="1" href="#state1">State 1</Dropdown.Item>
        <Dropdown.Item className="bg-dark text-light" eventKey="2" href="#state2">State 2</Dropdown.Item>
        {/* Add more states as needed */}
      </DropdownButton>

      {/* Fields Dropdown */}
      <DropdownButton
        as={ButtonGroup}
        title="Fields"
        id="bg-vertical-dropdown-2"
        variant="dark"
        className="mb-2 w-100 text-left"
      >
        <Dropdown.Item className="bg-dark text-light" eventKey="1" href="#field1">1</Dropdown.Item>
        <Dropdown.Item className="bg-dark text-light" eventKey="2" href="#field2">2</Dropdown.Item>
        <Dropdown.Item className="bg-dark text-light" eventKey="3" href="#field3">3</Dropdown.Item>
      </DropdownButton>

      {/* State Comparison Button */}
      <Button variant="dark" href="/stateComparison" className="mb-2 w-100">State Comparison</Button>
    </div>
  );
};

export default Dashboard;