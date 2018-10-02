import { Component, OnInit, Input, ViewEncapsulation, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'custom-bz-card',
  templateUrl: './bz-card.component.html',
  styleUrls: ['./bz-card.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class BzCardComponent implements OnInit {

  @Input()
  public cardType: string;

  @Input()
  public headerIcon: string;

  @Input()
  public headerTitle: string;

  @Input()
  public headerSubtitle: string;

  @Input()
  public headerDate: string;

  @Input()
  public urlContentImage: string;

  @Input()
  public contentTitle: string;

  @Input()
  public contentSubtitle: string;

  @Input()
  public firstButtonText: string;

  @Input()
  public secondButtonText: string;

  constructor() { }

  ngOnInit() {
  }

  //#region Events
  @Output() accept = new EventEmitter<boolean>();
  @Output() cancel = new EventEmitter<boolean>();
  //#endregion

  cancelEvent() {
    this.contentSubtitle = "Click on cancel button";
    this.cancel.emit(true);
  }

  acceptEvent() {
    this.contentSubtitle = "Click on accept button";
    this.accept.emit(true);
  }
}