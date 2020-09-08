import React from 'react';


function Table() {
    return (
        <div className='tbl-header'>
              <table>
                <thead>
                  <tr>{tableHeaderHtml}</tr>
                </thead>
              </table>
            </div>
              <div className="tbl-content table-responsive">
                <table>
                  <tbody>
                  {tableBodyHtml}
                  </tbody>
                </table>
              </div>
    )
}