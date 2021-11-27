import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogSavedComponent } from '../dialog-saved/dialog-saved.component';

@Component({
  selector: 'app-fish-farm-edit',
  templateUrl: './fish-farm-edit.component.html',
  styleUrls: ['./fish-farm-edit.component.scss']
})
export class FishFarmEditComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onSubmit(event: Event) {
    const dialogRef = this.dialog.open(DialogSavedComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  save()
  {

  }
}
