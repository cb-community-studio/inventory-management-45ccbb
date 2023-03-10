
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';
import _ from 'lodash';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';


const TransactionDataTable = ({ items, onEditRow, onRowDelete, onRowClick }) => {
    
    const pTemplate0 = (rowData, { rowIndex }) => <p >{rowData.type}</p>
    const inputTemplate1 = (rowData, { rowIndex }) => <InputText value={rowData.quantity}  />
    const pTemplate2 = (rowData, { rowIndex }) => <p >{rowData.date}</p>
    const pTemplate3 = (rowData, { rowIndex }) => <p >{rowData.description}</p>

    const editTemplate = (rowData, { rowIndex }) => <Button onClick={() => onEditRow(rowData, rowIndex)} icon={`pi ${rowData.isEdit ? "pi-check" : "pi-pencil"}`} className={`p-button-rounded p-button-text ${rowData.isEdit ? "p-button-success" : "p-button-warning"}`} />;
    const deleteTemplate = (rowData, { rowIndex }) => <Button onClick={() => onRowDelete(rowIndex)} icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />;
    
    return (
        <DataTable value={items} onRowClick={onRowClick} scrollable rowHover paginator rows={10}>
            <Column field="type" header="Transaction Type" body={pTemplate0} style={{ minWidth: "8rem" }} />
            <Column field="quantity" header="Quantity" body={inputTemplate1} style={{ minWidth: "8rem" }} />
            <Column field="date" header="Date" body={pTemplate2} style={{ minWidth: "8rem" }} />
            <Column field="description" header="Description" body={pTemplate3} style={{ minWidth: "8rem" }} />

            <Column header="Edit" body={editTemplate} />
            <Column header="Delete" body={deleteTemplate} />
        </DataTable>
    );
};

export default TransactionDataTable;