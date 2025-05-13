import { Component } from '@angular/core';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { Checkbox } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { ColorPickerModule } from 'primeng/colorpicker';
import { ColorPicker } from 'primeng/colorpicker';
import { EditorModule } from 'primeng/editor';
import { Editor } from 'primeng/editor';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { SelectModule } from 'primeng/select';
import { IftaLabelModule } from 'primeng/iftalabel';
import { InputNumberModule } from 'primeng/inputnumber';
import { KnobModule } from 'primeng/knob';
import { Knob } from 'primeng/knob';
import { Rating, RatingModule } from 'primeng/rating';
import { Slider, SliderModule } from 'primeng/slider';


@Component({
  selector: 'app-root',
  imports: [Rating, FormsModule, Slider, SliderModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  // providers: [CountryService]
})
export class AppComponent {
  // value: number = 10;
  value!: number;
  rangeValues: number[] = [20, 80];

  color: string | undefined;
  countries: any[] | undefined;
  selectedCity: any;
  checked: boolean = false;
  pizza: string[] = [];
  text: string | undefined;


  ngOnInit() {
    this.countries = [
      {
        name: 'Australia',
        code: 'AU',
        states: [
          {
            name: 'New South Wales',
            cities: [
              { cname: 'Sydney', code: 'A-SY' },
              { cname: 'Newcastle', code: 'A-NE' },
              { cname: 'Wollongong', code: 'A-WO' }
            ]
          },
          {
            name: 'Queensland',
            cities: [
              { cname: 'Brisbane', code: 'A-BR' },
              { cname: 'Townsville', code: 'A-TO' }
            ]
          }
        ]
      },
      {
        name: 'Canada',
        code: 'CA',
        states: [
          {
            name: 'Quebec',
            cities: [
              { cname: 'Montreal', code: 'C-MO' },
              { cname: 'Quebec City', code: 'C-QU' }
            ]
          },
          {
            name: 'Ontario',
            cities: [
              { cname: 'Ottawa', code: 'C-OT' },
              { cname: 'Toronto', code: 'C-TO' }
            ]
          }
        ]
      },
      {
        name: 'United States',
        code: 'US',
        states: [
          {
            name: 'California',
            cities: [
              { cname: 'Los Angeles', code: 'US-LA' },
              { cname: 'San Diego', code: 'US-SD' },
              { cname: 'San Francisco', code: 'US-SF' }
            ]
          },
          {
            name: 'Florida',
            cities: [
              { cname: 'Jacksonville', code: 'US-JA' },
              { cname: 'Miami', code: 'US-MI' },
              { cname: 'Tampa', code: 'US-TA' },
              { cname: 'Orlando', code: 'US-OR' }
            ]
          },
          {
            name: 'Texas',
            cities: [
              { cname: 'Austin', code: 'US-AU' },
              { cname: 'Dallas', code: 'US-DA' },
              { cname: 'Houston', code: 'US-HO' }
            ]
          }
        ]
      }
    ];
  }

  selected(e:any){
    console.log(e);
  }


  onBtnClick(){
    console.log(this.value);
  }
}
