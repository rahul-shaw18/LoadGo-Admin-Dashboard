import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { In_options } from 'src/app/Shared/interface/In_options';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.scss'],
})
export class AutoCompleteComponent {
  @Input() placeholder: any;
  @Input() providedOption?: any;
  myControl = new FormControl('');
  filteredOptions: Observable<any> | undefined;
  @Input('options') options!: any;
  @Output('selectedOptions') selectedOptions = new EventEmitter<any>();
  @Output('inputValue') inputValue = new EventEmitter<any>();

  public temp: any;

  ngOnInit() {
    // console.log('providedOption', this.providedOption);
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value: any) => {
        const name = typeof value === 'string' ? value : value?.displayName;
        return name ? this._filter(name as string) : this.options.slice();
      })
    );
    this.temp = this.options[0];
    console.log(this.temp);
  }
  onInput(e: any) {
    this.inputValue.emit(e.target.value);
  }

  onSelectedOptions(option: any) {
    this.providedOption = option;
    this.inputValue.emit(option);
    this.selectedOptions.emit(option);
  }

  private _filter(value: any): any[] {
    console.log(value);
    const filterValue = value.toLowerCase();

    return this.options.filter((option:any) =>
      option.displayName.toLowerCase().includes(filterValue)
    );
  }
}
