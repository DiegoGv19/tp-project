import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogSavedComponent } from '../dialog-saved/dialog-saved.component';

@Component({
  selector: 'app-door-settings',
  templateUrl: './door-settings.component.html',
  styleUrls: ['./door-settings.component.scss']
})
export class DoorSettingsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  xxx(){
    console.log()
  }
  openDialog() {
    const dialogRef = this.dialog.open(DialogSavedComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
