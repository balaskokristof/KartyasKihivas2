import { Component, Input } from "@angular/core";

@Component({
  selector: "app-card",
  template: `
    <div class="card">
      <div class="card-header">
        <i *ngIf="icon">{{ icon }}</i>
        <h2>{{ title }}</h2>
        <h3 *ngIf="subtitle">{{ subtitle }}</h3>
      </div>
      <div class="card-body">
        <ng-content></ng-content>
      </div>
      <div class="card-footer">
        <ng-content select=".footer-content"></ng-content>
      </div>
    </div>
  `,
  styles: [
    `
      .card {
        border: 1px solid #ddd;
        padding: 20px;
        border-radius: 8px;
        margin-bottom: 20px;
      }
      .card-header {
        margin-bottom: 20px;
      }
      .card-header i {
        margin-right: 10px;
      }
      .card-body {
        margin-bottom: 20px;
      }
    `,
  ],
})
export class CardComponent {
  @Input() title: string = "";
  @Input() subtitle?: string;
  @Input() icon?: string;
}
