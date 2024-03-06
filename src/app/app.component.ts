import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { MarkdownComponent } from 'ngx-markdown';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SideNavComponent } from './component/side-nav/side-nav.component';
import { MdPreviewComponent } from './layout/md-preview/md-preview.component';
import { WelcomeComponent } from './layout/welcome/welcome.component';
import { MenuService } from './service/userService/menu.service';

export interface IMenuItem {
  id: number,
  name: string,
  path: string
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    MarkdownComponent,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    SideNavComponent,
    MdPreviewComponent,
    WelcomeComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

export class AppComponent {

  markdown = `## ssss`

  opened = false;

  menuItems: IMenuItem[] = []

  constructor(private menuService: MenuService) {}

  ngOnInit() {
    this.getMenuList();
  }

  setSideNavOpened(): void {
    this.opened = !this.opened;
  }

  getMenuList() {
    console.log('here')
    this.menuService.retrieveMenuList().subscribe(menuList => {
      console.log(menuList, 'ssss');
      this.menuItems = menuList
    })
  }
}
