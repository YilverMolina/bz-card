import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BzCardComponent } from './bz-card.component';
import { AppComponent } from '../app.component';

describe('BzCardComponent', () => {
  let component: BzCardComponent;
  let fixture: ComponentFixture<BzCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BzCardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BzCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it(`should have the default attributes`, async(() => {
    const fixture = TestBed.createComponent(BzCardComponent);
    const app = fixture.debugElement.componentInstance as BzCardComponent;
    expect(app.cardType).toBeUndefined();
    expect(app.headerIcon).toBeUndefined();
    expect(app.headerTitle).toBeUndefined();
    expect(app.headerSubtitle).toBeUndefined();
    expect(app.headerDate).toBeUndefined();
    expect(app.urlContentImage).toBeUndefined();
    expect(app.contentTitle).toBeUndefined();
    expect(app.contentSubtitle).toBeUndefined();
    expect(app.firstButtonText).toBeUndefined();
    expect(app.secondButtonText).toBeUndefined();

    expect(app.cancelEvent).toBeDefined();
    expect(app.acceptEvent).toBeDefined();
  }));

  it('should load changes - card type 1', () => {
    const component = TestBed.createComponent(BzCardComponent);
    const card = component.debugElement.componentInstance as BzCardComponent;
    const shadowRoot: DocumentFragment = component.debugElement.nativeElement.shadowRoot;

    card.headerIcon = "icon-map-bundle";
    card.headerTitle = 'Title card 1';
    component.detectChanges();

    expect(shadowRoot.querySelector('.bz-card__header-title').textContent).toEqual('Title card 1');
  });

  it('should load changes - card type 2', () => {
    const component = TestBed.createComponent(BzCardComponent);
    const card = component.debugElement.componentInstance as BzCardComponent;
    const shadowRoot: DocumentFragment = component.debugElement.nativeElement.shadowRoot;

    card.headerIcon = "icon-map-bundle";
    card.headerTitle = 'Title card 2';
    card.headerSubtitle = 'Accepted in';
    card.headerDate = '12/09/18';
    fixture.detectChanges();

    expect(shadowRoot.querySelector('.bz-card__header-title').textContent).toEqual('Title card 2');
    expect(shadowRoot.querySelector('.bz-card__header-subtitle').textContent).toEqual('Accepted in');
    expect(shadowRoot.querySelector('.bz-card__header-subtitle--green').textContent).toEqual('12/09/18');
  });

  it('should load changes - card type 3', () => {
    const component = TestBed.createComponent(BzCardComponent);
    const card = component.debugElement.componentInstance as BzCardComponent;
    const shadowRoot: DocumentFragment = component.debugElement.nativeElement.shadowRoot;

    card.headerIcon = "icon-map-bundle";
    card.headerTitle = 'Title card 3';
    card.headerSubtitle = 'Pending';
    fixture.detectChanges();

    expect(shadowRoot.querySelector('.bz-card__header-title').textContent).toEqual('Title card 3');
    expect(shadowRoot.querySelector('.bz-card__header-subtitle--orange').textContent).toEqual('Pending');
  });

  it('should load changes - card type 4', () => {
    const component = TestBed.createComponent(BzCardComponent);
    const card = component.debugElement.componentInstance as BzCardComponent;
    const shadowRoot: DocumentFragment = component.debugElement.nativeElement.shadowRoot;

    card.headerIcon = "icon-map-bundle";
    card.headerTitle = 'Title card 4';
    card.contentTitle = 'Bizagi';
    card.contentSubtitle = 'Bizagi is a Company';
    card.urlContentImage = 'http://imparcialoaxaca.mx/wp-content/uploads/2018/02/masterhakcs_google_recibe_multa_union_europea.jpg';
    card.firstButtonText = 'Cancel';
    card.secondButtonText = 'Accept';
    fixture.detectChanges();

    expect(shadowRoot.querySelector('.bz-card__header-title').textContent).toEqual('Title card 4');
    expect(shadowRoot.querySelector('.bz-card__content-title').textContent).toEqual('Bizagi');
    expect(shadowRoot.querySelector('.bz-card__content-subtitle').textContent).toEqual('Bizagi is a Company');
    expect(shadowRoot.querySelector('.bz-btn--secondary').textContent).toEqual('Cancel');
    expect(shadowRoot.querySelector('.bz-btn--primary').textContent).toEqual('Accept');
    expect(shadowRoot.querySelector('.bz-card__content-image').textContent).toEqual('http://imparcialoaxaca.mx/wp-content/uploads/2018/02/masterhakcs_google_recibe_multa_union_europea.jpg');
  });

});
