import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  toggleDropdown() {
    const el = document.getElementById("navbar");
    el!.style.display == "flex" ? el!.style.display = "none" : el!.style.display = "flex";
  }
 
}
