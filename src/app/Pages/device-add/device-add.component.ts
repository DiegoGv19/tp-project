import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogSavedComponent } from '../dialog-saved/dialog-saved.component';


@Component({
  selector: 'app-device-add',
  templateUrl: './device-add.component.html',
  styleUrls: ['./device-add.component.scss']
})
export class DeviceAddComponent implements OnInit {

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
  save()
  {

  }

  uploadFileForm= new FormGroup({
    fileName:new FormControl(null)
  })

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
