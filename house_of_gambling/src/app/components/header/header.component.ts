import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  lang: boolean = false;
  burger: boolean = false;
  active: string = 'active';

  toggleLang() {
    this.lang = !this.lang;
  }

  toggleMenu() {
    this.burger = !this.burger;
    this.active = this.burger ? 'active' : '';
  }
}
