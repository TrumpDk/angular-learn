import { Component } from '@angular/core';
import { MarkdownComponent } from 'ngx-markdown';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-md-preview',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MarkdownComponent
  ],
  templateUrl: './md-preview.component.html',
  styleUrl: './md-preview.component.scss'
})
export class MdPreviewComponent {

  markDown = ``;
}
