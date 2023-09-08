import { Component, HostBinding, Input, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VcHttpClientService, VcSvgIconComponent, VcUtilityService } from 'ng-utility-library';
import { SafeHtml } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-svg-icon',
  standalone: true,
  imports: [CommonModule, VcSvgIconComponent, HttpClientModule],
  templateUrl: './svg-icon.component.html',
  styleUrls: ['./svg-icon.component.scss'],
  providers: [VcUtilityService, VcHttpClientService]
})
export class SvgIconComponent implements OnDestroy, OnInit {

  svgIcon!: SafeHtml | null

  constructor( 
    private utility: VcUtilityService,
    private http: VcHttpClientService
  ) { }
  ngOnInit(): void {

    let body = JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    });
    // this.utility.loadSvgIcon('../assets/images/1693229193Arnoud999-Right-or-wrong-4.svg').subscribe(svg => {
    //   this.svgIcon = svg;
    // });

    this.http.put('https://jsonplaceholder.typicode.com/posts/1', body).subscribe(data => {
      console.log(data);
    })
  }

  ngOnDestroy(): void {
    console.log('destroyed');
  }

  @HostBinding('style.-webkit-mask-image')
  private _path!: string;
  
  @Input()
  public set path(filePath: string) {
    this._path = `url("${filePath}")`;
  }
}
