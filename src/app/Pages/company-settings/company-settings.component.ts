import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-company-settings',
  templateUrl: './company-settings.component.html',
  styleUrls: ['./company-settings.component.scss']
})
export class CompanySettingsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  uploadFileForm= new FormGroup({
    fileName:new FormControl(null)
  })

  upload(file:any){
    console.log(file)
  }
}
