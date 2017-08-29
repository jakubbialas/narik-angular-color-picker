import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ColorPickerService} from './color-picker.service';
import {ColorPickerDirective,DialogComponent,TextDirective,SliderDirective} from './color-picker.directive';
import {ColorPickerInputComponent} from './color-picker-input.component'

@NgModule({
    imports: [CommonModule],
    providers: [ColorPickerService],
    declarations: [ColorPickerDirective,ColorPickerInputComponent,DialogComponent,TextDirective,SliderDirective],
    exports: [ColorPickerDirective,ColorPickerInputComponent]
})
export class ColorPickerModule {}
