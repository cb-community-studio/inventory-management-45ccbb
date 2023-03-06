
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';
import _ from 'lodash';
import { Button } from 'primereact/button';
import { Avatar } from 'primereact/avatar';
import { InputText } from 'primereact/inputtext';


const UseraccountsDataTable = ({ items, onEditRow, onRowDelete, onRowClick }) => {
    
    const pTemplate0 = (rowData, { rowIndex }) => <p >{rowData.fullname}</p>
    const pTemplate1 = (rowData, { rowIndex }) => <p >{rowData.username}</p>
    const avatarTemplate2 = (rowData, { rowIndex }) => <Avatar image={rowData.avatar}  />
    const pTemplate3 = (rowData, { rowIndex }) => <p >{rowData.email}</p>
    const inputTemplate5 = (rowData, { rowIndex }) => <InputText value={rowData.contact}  />

    const editTemplate = (rowData, { rowIndex }) => <Button onClick={() => onEditRow(rowData, rowIndex)} icon={`pi ${rowData.isEdit ? "pi-check" : "pi-pencil"}`} className={`p-button-rounded p-button-text ${rowData.isEdit ? "p-button-success" : "p-button-warning"}`} />;
    const deleteTemplate = (rowData, { rowIndex }) => <Button onClick={() => onRowDelete(rowIndex)} icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />;
    
    return (
        <DataTable value={items} onRowClick={onRowClick} scrollable rowHover paginator rows={10}>
            <Column field="fullname" header="Full Name" body={pTemplate0} sortable style={{ minWidth: "8rem" }} />
            <Column field="username" header="Username" body={pTemplate1} sortable style={{ minWidth: "8rem" }} />
            <Column field="avatar" header="Avatar" body={avatarTemplate2} sortable style={{ minWidth: "8rem" }} />
            <Column field="email" header="Email" body={pTemplate3} sortable style={{ minWidth: "8rem" }} />
            <Column field="contact" header="Contact Number" body={inputTemplate5} sortable style={{ minWidth: "8rem" }} />

            <Column header="Edit" body={editTemplate} />
            <Column header="Delete" body={deleteTemplate} />
        </DataTable>
    );
};

export default UseraccountsDataTable;