import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';

interface DialogData {

}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  constructor(public dialog: MatDialog){}
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogLogin, {data: {}});
  }

  ngOnInit(): void {
      this.openDialog();
  }
}

class DialogLogin {
  constructor(public dialogRef: MatDialogRef<DialogLogin>, 
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ){}
}
