import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
  img: string = '';
  @Input()
  set changeImg(newImg: string) {
    this.img = newImg;
  }
  @Output() loaded = new EventEmitter<string>();
  imageDefault = './assets/images/notImage.png';

  counter = 0;
  counterFn: number | undefined;

  constructor() {
    // console.log('Constructor', 'imgValue =>', this.img);
  }

  ngOnChanges(): void {
    console.log('Constructor', 'imgValue =>', this.img);
  }

  ngOnInit(): void {
    console.log('Constructor', 'imgValue =>', this.img);

    this.counterFn = window.setInterval(() => {
      this.counter += 1;
      console.log('run counter');
    }, 1000);
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  ngOnDestroy(): void {
    // console.log('ngOnDestroy');
    window.clearInterval(this.counterFn);
  }

  errorImg() {
    this.img = this.imageDefault;
  }

  loadedImage() {
    console.log('loaded hijo');
    this.loaded.emit('ojoooo');
  }

}
