import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Injectable({
  providedIn: 'root'
})
export class ResponsiveService {

  public responsiveStatus = 2;

  constructor(
    private breakpointObserver: BreakpointObserver) {
      this.responsive()
    }

  responsive() {
    console.log('pipe')
    this.breakpointObserver
      .observe([
        Breakpoints.Large,
        Breakpoints.Medium,
        Breakpoints.XLarge,
        Breakpoints.Small,
        Breakpoints.XSmall
      ])
      .subscribe((result) => {
        console.log(result)
        if (result.breakpoints[Breakpoints.Medium]) {
          this.responsiveStatus = 3;
          console.log('medium')
        }
        if (result.breakpoints[Breakpoints.XSmall]) {
          this.responsiveStatus = 1;
          console.log('peque;ino')
        }
        if (result.breakpoints[Breakpoints.Large]) {
          console.log('grande')
          this.responsiveStatus = 4;
        }
        if (result.breakpoints[Breakpoints.XLarge]) {
          console.log('muy grande')
          this.responsiveStatus = 5;
        }
        if (result.breakpoints[Breakpoints.Small]) {
          console.log('peque;o')
          this.responsiveStatus = 2;
        }
      });
  }
}
