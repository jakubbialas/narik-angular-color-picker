import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorPickerService } from './color-picker.service';
import { ColorPickerDirective } from './color-picker.directive';
import { ColorPickerInputComponent } from './color-picker-input.component';
var ColorPickerModule = (function () {
    function ColorPickerModule() {
    }
    return ColorPickerModule;
}());
export { ColorPickerModule };
ColorPickerModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                providers: [ColorPickerService],
                declarations: [ColorPickerDirective, ColorPickerInputComponent],
                exports: [ColorPickerDirective, ColorPickerInputComponent]
            },] },
];
/** @nocollapse */
ColorPickerModule.ctorParameters = function () { return []; };
//# sourceMappingURL=color-picker.module.js.map