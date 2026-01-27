import { Component } from '@angular/core';

import { Sidebar } from '../../shared/components/sidebar/sidebar';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard-layout',
  imports: [Sidebar, RouterOutlet],
  templateUrl: './dashboard-layout.html',
  styleUrls: ['./dashboard-layout.scss'],
})
export class DashboardLayout {}
