import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class NavParamsService {

  data:any;

  constructor(private sanitizer: DomSanitizer) { 
    this.data = {
      isLottie : false,
      src : 'assets/images/sample.gif',
      title : 'I want to be Millionair',
      style : {
        color1: '#3E065F',
        color2: '#700B97',
        color3: '#8E05C2',
        color4: '#ffffff'
      },
      gradientBorder : true,
      avatar: this.sanitizer.bypassSecurityTrustHtml('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 231 231"><path d="M33.83,33.83a115.5,115.5,0,1,1,0,163.34,115.49,115.49,0,0,1,0-163.34Z" style="fill:#2668DC;"></path><path d="m115.5 51.75a63.75 63.75 0 0 0-10.5 126.63v14.09a115.5 115.5 0 0 0-53.729 19.027 115.5 115.5 0 0 0 128.46 0 115.5 115.5 0 0 0-53.729-19.029v-14.084a63.75 63.75 0 0 0 53.25-62.881 63.75 63.75 0 0 0-63.65-63.75 63.75 63.75 0 0 0-0.09961 0z" style="fill:#ffce8b;"></path><path d="m141.75 195a114.79 114.79 0 0 1 38 16.5 115.53 115.53 0 0 1-128.46 0 114.79 114.79 0 0 1 38-16.5l13.85 13.85v-1.2h17.86v3.1h5z" style="fill:#033c58;"></path><polygon points="115.36 207.65 123.37 224.2 148.3 196.86 143.08 189.95" style="fill:#fff;"></polygon><polygon points="115.36 207.65 107.35 224.2 82.42 196.86 87.63 189.95" style="fill:#fff;"></polygon><path d="m115.5 51.75c-38.702 5.3101-54.215 18.038-59.863 35.101" style="fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:12;stroke:#004E4C;"></path><path d="m115.5 51.75c-7.8393 3.6337-5.5974 16.583-14.341 23.452" style="fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:12;stroke:#004E4C;"></path><path d="m111.35 48.614c-22.634-6.9181-42.457-3.1988-55.733 2.5105" style="fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:12;stroke:#004E4C;"></path><path d="m115.47 54.008c0.1965-6.7774-0.1436-26.309 0.05-38.184" style="fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:12;stroke:#004E4C;"></path><path d="m68.874 28.177c34.115-3.382 41.987 13.321 45.17 19.602" style="fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:12;stroke:#004E4C;"></path><path d="m116.49 48.69c2.8876-6.3019 10.358-21.518 43.469-22.326" style="fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:12;stroke:#004E4C;"></path><path d="m116.92 51.766c1.5094 6.3991 3.4988 15.595 10.088 23.058" style="fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:12;stroke:#004E4C;"></path><path d="m113.81 51.532c22.03-7.8674 46.709-7.3614 59.444-2.0465" style="fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:12;stroke:#004E4C;"></path><path d="m114.53 52.278c36.226 4.8583 52.414 17.092 59.373 33.347" style="fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:12;stroke:#004E4C;"></path><path d="m55.637 86.851c-4.1213 12.452-2.9877 27.213-1.777 43.084" style="fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:12;stroke:none;"></path><path d="m55.614 51.124c-13.422 5.5019-21.908 16.409-24.712 28.774-1.8322 8.4632-1.9809 18.156-1.6096 28.486" style="fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:12;stroke:none;"></path><path d="m173.26 49.486c24.917 10.399 26.707 36.537 27.209 59.62" style="fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:12;stroke:none;"></path><path d="m173.9 85.625c5.4042 12.625 5.2413 27.675 4.5745 43.58" style="fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:12;stroke:none;"></path><path d="m53.86 129.93c1.293 16.951 2.6738 35.169-2.1664 53.193" style="fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:12;stroke:none;"></path><path d="m29.292 108.38c0.6173 17.177 2.6722 36.119 0.8158 54.108" style="fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:12;stroke:none;"></path><path d="m200.47 109.11c0.3586 18.529-1.2751 36.94 1.9231 48.985" style="fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:12;stroke:none;"></path><path d="m178.48 129.2c-0.7279 17.362-2.0563 35.743 2.6011 53.099" style="fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:12;stroke:none;"></path><path d="m131.64 114.09 7.5801-7.5801 7.5801 7.5801m-62.6 0 7.5801-7.5801 7.5799 7.5801" style="fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:6.4998px;stroke:#000;"></path><path d="m127.84 146.73c-2.24 8.93-6.92 15.08-12.34 15.08s-10.1-6.15-12.34-15.08z" style="fill:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:2.9999px;stroke:#000;"></path></svg>'),
      wishID: "XXXX123456",
      showClass: false
    }
  }

  public setData(data){
    this.data = data;
  }

  public getData(){
    return this.data;
  }

}
