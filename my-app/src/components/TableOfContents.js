import React from 'react';

const TableOfContents = ({ sections }) => {
  return (
    <div className="table-of-contents">
      <h2>Project Overview</h2>
      <ul>
        {sections.map((section, index) => (
          <li key={index}>
            <a href={`#${section.id}`}>{section.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableOfContents;