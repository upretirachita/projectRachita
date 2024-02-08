// Spreadsheet.jsx
import React, { useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import './TimeFrame.css'
const TimeFrame = () => {
  const [data, setData] = useState([
    { id: 1, timeDedicated: 'Selecting specific Framework', hoursSpent: 2, isFixed: true },
    { id: 2, timeDedicated: 'Paperwork for understand Project ', hoursSpent: 3, isFixed: true },
    { id: 3, timeDedicated: 'Understanding the question ', hoursSpent: 3, isFixed: true },
    { id: 4, timeDedicated: 'Making version one of eg1', hoursSpent: 1, isFixed: true },
    { id: 5, timeDedicated: 'Making version two of eg2', hoursSpent: 3, isFixed: true },
    { id: 6, timeDedicated: 'Making version two of eg3  ', hoursSpent: 4, isFixed: true },
    { id: 7, timeDedicated: 'Documentation  ', hoursSpent: 2, isFixed: true },
    { id: 8, timeDedicated: 'Reviewing code  ', hoursSpent: 2, isFixed: true },
    // Add more data as needed
  ]);

  const handleAddRow = () => {
    setData([...data, { id: data.length + 1, timeDedicated: '', hoursSpent: 0, isFixed: false }]);
  };

  const handleDeleteRow = (id) => {
    const rowToDelete = data.find((row) => row.id === id);
    // Check if the row is not fixed before allowing deletion
    if (!rowToDelete.isFixed) {
      const updatedData = data.filter((row) => row.id !== id);
      setData(updatedData);
    }
  };

  const handleInputChange = (id, fieldName, value) => {
    const updatedData = data.map((row) =>
      row.id === id && !row.isFixed ? { ...row, [fieldName]: value } : row
    );
    setData(updatedData);
  };

  return (
    <div className='time-frame'>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Time Dedicated</th>
            <th>Hours Spent</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>
                <input
                  type="text"
                  value={row.timeDedicated}
                  onChange={(e) => handleInputChange(row.id, 'timeDedicated', e.target.value)}
                  disabled={row.isFixed}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={row.hoursSpent}
                  onChange={(e) => handleInputChange(row.id, 'hoursSpent', e.target.value)}
                  disabled={row.isFixed}
                />
              </td>
              <td>
                {!row.isFixed && (
                  <Button variant="danger" onClick={() => handleDeleteRow(row.id)}>
                    Delete
                  </Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button variant="success" onClick={handleAddRow}>
        Add Row
      </Button>
    </div>
  );
};

export default TimeFrame;
