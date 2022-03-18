import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Labels } from '../util/labels';
import { SharedService } from '../web-services/shared.service';

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: './dialog-delete-alert.html',
})
export class DeleteAlertDialog {

  constructor(private sharedService: SharedService,public dialogRef: MatDialogRef<DeleteAlertDialog>,public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data:any) { }
  @Output() deleteEvent = new EventEmitter<boolean>();
  public labels = Labels;
  ngOnInit() {
  }
  doAction(){
    this.deleteEvent.emit(true);
    this.dialogRef.close(true);
  }
  closeDialog(){
    this.dialogRef.close(false);

  }
  translate(label) {
    return this.sharedService.verifyLabel(label, this.sharedService.constantList);
}
}