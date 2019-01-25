import { Component, OnInit } from '@angular/core';
import { SafeStyle } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  backgroundImage: SafeStyle;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.backgroundImage = this.route.snapshot.data['background'];
  }
}
