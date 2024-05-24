import { Component, OnInit } from '@angular/core';
import { IMacchine } from '../../../app/Models/iMacchine';
import { MacchineService } from '../../Models/macchine.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  macchine: IMacchine[] = [];

  constructor(private macchineService: MacchineService) {}

  ngOnInit() {
    this.macchineService.getMacchine().subscribe((data: IMacchine[]) => {
      this.macchine = data;
    });
  }
}
