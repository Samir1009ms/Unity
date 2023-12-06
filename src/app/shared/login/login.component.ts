import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  items: any[] = [
    { img: 'assets/img/league.png', title: 'League of Legends®', status: "Online Game", view: '2.8K viewers' },
    { img: 'assets/img/callofduty.png', title: 'Call of Duty®', status: "Shooting", view: '2.8K viewers' },
    { img: 'assets/img/dota.png', title: 'The Dota 2', status: "eSport", view: '2.8K viewers' },
  ]
}
