import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-document',
  templateUrl: './list-document.component.html',
  styleUrls: ['./list-document.component.css']
})
export class ListDocumentComponent implements OnInit {

  documents: Document[];

  constructor() { }

  ngOnInit(): void {
    this.documents = [
      { CreatedDate: '12-12-2020', AssignedTo: 'Khalid', AssignedOn: '10-1-2020', CurrentStatus: "With Khalid" },
      { CreatedDate: '12-12-2020', AssignedTo: 'Khalid', AssignedOn: '10-1-2020', CurrentStatus: "Completed" },
      { CreatedDate: '12-12-2020', AssignedTo: 'Qazim', AssignedOn: '10-1-2020', CurrentStatus: "With Rashid" },
      { CreatedDate: '12-12-2020', AssignedTo: 'Khalid', AssignedOn: '10-1-2020', CurrentStatus: "With Bilad" },
    ]
  }

  onRemove(index) {
    this.documents.splice(index, 1);
  }

}

class Document {
  public CreatedDate: string;
  public AssignedTo: string;
  public AssignedOn: string;
  public CurrentStatus: string;


}