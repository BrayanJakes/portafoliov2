import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Injectable({
  providedIn: 'root'
})
export class ResponsiveService {

  public responsiveStatus = 2;

  constructor(
    private breakpointObserver: BreakpointObserver) { }

  responsive() {
    this.breakpointObserver
      .observe([
        Breakpoints.Large,
        Breakpoints.Medium,
        Breakpoints.XLarge,
        Breakpoints.Small,
      ])
      .subscribe((result) => {
        if (result.breakpoints[Breakpoints.Medium]) {
          this.responsiveStatus = 1;
        }
        if (result.breakpoints[Breakpoints.Large]) {
          console.log('grande')
          this.responsiveStatus = 2;
        }
        if (result.breakpoints[Breakpoints.XLarge]) {
          console.log('muy grande')
          this.responsiveStatus = 3;
        }
        if (result.breakpoints[Breakpoints.Small]) {
          this.responsiveStatus = 4;
        }
      });
  }
}
