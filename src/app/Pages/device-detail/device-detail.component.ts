import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogDeviceMoreComponent } from '../dialog-device-more/dialog-device-more.component';
import { DialogSavedComponent } from '../dialog-saved/dialog-saved.component';


@Component({
  selector: 'app-device-detail',
  templateUrl: './device-detail.component.html',
  styleUrls: ['./device-detail.component.scss']
})
export class DeviceDetailComponent implements OnInit {

  imgURL: any;
  public imagePath: any;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onSubmit(event: Event) {
    const dialogRef = this.dialog.open(DialogSavedComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  dialogMore() {
    const dialogRef = this.dialog.open(DialogDeviceMoreComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


  uploadFileForm= new FormGroup({
    fileName:new FormControl(null)
  })
  save()
  {
    
  }
  upload(files:any){
    if (files.length === 0)
    return;

  var reader = new FileReader();
  this.imagePath = files;
  reader.readAsDataURL(files[0]); 
  reader.onload = (_event) => { 
    this.imgURL = reader.result; 
  }
  }
}
