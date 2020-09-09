// my.component.ts
@Component({
  templateUrl: './my.component.html'
})

export class MyComponent {
  value:type = /* some value of type */;
}
<!-- my.component.html -->
<any-element [property]=“value”>innerHTML</any-element>