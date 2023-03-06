
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';
import _ from 'lodash';
import { Button } from 'primereact/button';
import { Image } from 'primereact/image';
import { InputText } from 'primereact/inputtext';


const ItemcatalogDataTable = ({ items, onEditRow, onRowDelete, onRowClick }) => {
    
    const pTemplate0 = (rowData, { rowIndex }) => <p >{rowData.itemname}</p>
    const pTemplate1 = (rowData, { rowIndex }) => <p >{rowData.itemdescription}</p>
    const imageTemplate2 = (rowData, { rowIndex }) => <Image src={rowData.image}  alt="Image" height="60px" />
    const inputTemplate3 = (rowData, { rowIndex }) => <InputText value={rowData.Price}  />
    const inputTemplate4 = (rowData, { rowIndex }) => <InputText value={rowData.stocklevel}  />

    const editTemplate = (rowData, { rowIndex }) => <Button onClick={() => onEditRow(rowData, rowIndex)} icon={`pi ${rowData.isEdit ? "pi-check" : "pi-pencil"}`} className={`p-button-rounded p-button-text ${rowData.isEdit ? "p-button-success" : "p-button-warning"}`} />;
    const deleteTemplate = (rowData, { rowIndex }) => <Button onClick={() => onRowDelete(rowIndex)} icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />;
    
    return (
        <DataTable value={items} onRowClick={onRowClick} scrollable rowHover paginator rows={10}>
            <Column field="itemname" header="Item Name" body={pTemplate0} style={{ minWidth: "8rem" }} />
            <Column field="itemdescription" header="Description" body={pTemplate1} style={{ minWidth: "8rem" }} />
            <Column field="image" header="Item Image" body={imageTemplate2} style={{ minWidth: "8rem" }} />
            <Column field="Price" header="Price" body={inputTemplate3} style={{ minWidth: "8rem" }} />
            <Column field="stocklevel" header="Current Stock Level" body={inputTemplate4} style={{ minWidth: "8rem" }} />

            <Column header="Edit" body={editTemplate} />
            <Column header="Delete" body={deleteTemplate} />
        </DataTable>
    );
};

export default ItemcatalogDataTable;