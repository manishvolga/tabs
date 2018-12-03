import { Component, OnInit, ViewChild, AfterViewInit, AfterContentChecked } from '@angular/core';
import { TabsetComponent } from 'ngx-bootstrap';
import { TabDirective } from 'ngx-bootstrap/tabs';
import { Router } from '@angular/router'
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit, AfterViewInit, AfterContentChecked {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  @ViewChild('staticTabs') staticTabs: TabsetComponent;
  onSelect(data: TabDirective): void {
    if (data.heading == "Static Title 2")
      this.router.navigate(['/tab2']);
    else if (data.heading == "Static Title 1")
      this.router.navigate(['/tab1']);
    else if (data.heading == "Static title")
      this.router.navigate(['']);
  }

  ngAfterViewInit() {

  }
  ngAfterContentChecked() {
    if (this.router.url == '/tab2')
      this.staticTabs.tabs[2].active = true;
    else if (this.router.url == '/tab1')
      this.staticTabs.tabs[1].active = true;
    else
      this.staticTabs.tabs[0].active = true;
  }
}
