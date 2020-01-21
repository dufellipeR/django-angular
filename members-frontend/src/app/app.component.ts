import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'members-frontend';

  selected_members = { id: 0, name: '', surname: '' }

  members = [];

  constructor(private api: ApiService) {
    this.getMembers();

  }

  getMembers = () => {
    this.api.getAllMembers().subscribe(
      data => {
        this.members = data
      },
      error => {
        console.log("Aconteceu um erro" + error);

      }
    );
  }

  memberClicked = (member) => {
    this.api.getMember(member.id).subscribe(
      data => {
        console.log(data);
        this.selected_members = data;

      },
      error => {
        console.log("Aconteceu um erro" + error);

      }
    );
  };
}

