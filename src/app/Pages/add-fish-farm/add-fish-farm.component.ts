import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogSavedComponent } from '../dialog-saved/dialog-saved.component';

@Component({
  selector: 'app-add-fish-farm',
  templateUrl: './add-fish-farm.component.html',
  styleUrls: ['./add-fish-farm.component.scss']
})
export class AddFishFarmComponent implements OnInit {

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
