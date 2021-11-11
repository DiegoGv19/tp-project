import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogDeviceUninstallComponent } from '../dialog-device-uninstall/dialog-device-uninstall.component';

@Component({
  selector: 'app-dialog-device-more',
  templateUrl: './dialog-device-more.component.html',
  styleUrls: ['./dialog-device-more.component.scss']
})
export class DialogDeviceMoreComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  confirmation() {
    const dialogRef = this.dialog.open(DialogDeviceUninstallComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
