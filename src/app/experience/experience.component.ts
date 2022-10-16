import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CertComponent } from '../cert/cert.component';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

 cert() {
    this.dialog.open(CertComponent);
  }

  ngOnInit(): void {
  }

}
