// my.component.ts
@Component({
  templateUrl: './my.component.html'
})

export class MyComponent {
  handler(event):void {
      // function does stuff
  }
}
// my.component.html
<any-element (event)=“handler($event)”>innerHTML</any-element>