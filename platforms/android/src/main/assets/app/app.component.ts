import { Component,AfterContentInit } from "@angular/core";
import { SegmentedBar, SegmentedBarItem } from "ui/segmented-bar";
import { RouterExtensions,platformNativeScriptDynamic } from "nativescript-angular";
import { Page } from "ui/page";

@Component({
  moduleId: module.id,
  selector: "my-app",
  templateUrl: './app.html'

})
export class AppComponent  implements  AfterContentInit {
  public items: Array<SegmentedBarItem>;
  public selectedIndex = 0;
  public visibility1 = true;
  public visibility2 = false;
  public visibility3 = false;
  public login= false;


  constructor(private router: RouterExtensions,private _page: Page) {
    this.items = [];
 
  
    for (let i = 1; i < 4; i++) {
      let segmentedBarItem = <SegmentedBarItem>new SegmentedBarItem();
      segmentedBarItem.title = "View " + i;
      this.items.push(segmentedBarItem);
    }
    this.selectedIndex = 0;
  }

  ngAfterContentInit(){
    this._page.actionBarHidden = true;    
    alert('entre')
  }

  public onSelectedIndexChange(args) {
    let segmetedBar = <SegmentedBar>args.object;
    this.selectedIndex = segmetedBar.selectedIndex;
    switch (this.selectedIndex) {
      case 0:
        this.visibility1 = true;
        this.visibility2 = false;
        this.visibility3 = false;
        this.router.navigateByUrl('login')
        this._page.actionBarHidden=true;
        break;
      case 1:
        this.visibility1 = false;
        this.visibility2 = true;
        this.visibility3 = false;
        this.router.navigateByUrl('list')
        this._page.actionBarHidden=false;
        break;
      case 2:
        this.visibility1 = false;
        this.visibility2 = false;
        this.visibility3 = true;
        this.router.navigateByUrl('login')
        break;
      default:
        break;
    }
  }


}