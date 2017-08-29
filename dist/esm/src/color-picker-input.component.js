import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
var ColorPickerInputComponent = (function () {
    function ColorPickerInputComponent() {
        this.cpToggleChange = new EventEmitter(true);
        this.cpPosition = 'right';
        this.cpPositionOffset = '0%';
        this.cpPositionRelativeToArrow = false;
        this.cpOutputFormat = 'hex';
        this.cpPresetLabel = 'Preset colors';
        this.cpCancelButton = false;
        this.cpCancelButtonClass = 'cp-cancel-button-class';
        this.cpCancelButtonText = 'Cancel';
        this.cpOKButton = false;
        this.cpOKButtonClass = 'cp-ok-button-class';
        this.cpOKButtonText = 'OK';
        this.cpFallbackColor = '#fff';
        this.cpHeight = 'auto';
        this.cpWidth = '230px';
        this.cpIgnoredElements = [];
        this.cpDialogDisplay = 'popup';
        this.cpSaveClickOutside = true;
        this.cpAlphaChannel = 'hex6';
        this.itemClass = "color-picker";
        this.onModelChange = function () { };
        this.onModelTouched = function () { };
    }
    Object.defineProperty(ColorPickerInputComponent.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (val) {
            this._value = val;
            this.onModelChange(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColorPickerInputComponent.prototype, "disabled", {
        get: function () { return this._disabled; },
        set: function (value) {
            this._disabled = value;
        },
        enumerable: true,
        configurable: true
    });
    ColorPickerInputComponent.prototype.ngOnInit = function () { };
    ColorPickerInputComponent.prototype.registerOnChange = function (fn) {
        this.onModelChange = fn;
    };
    ColorPickerInputComponent.prototype.registerOnTouched = function (fn) {
        this.onModelTouched = fn;
    };
    ColorPickerInputComponent.prototype.writeValue = function (val) {
        this.value = val;
    };
    ColorPickerInputComponent.prototype.colorPickerChange = function (color) {
        this.onModelChange(color);
    };
    return ColorPickerInputComponent;
}());
export { ColorPickerInputComponent };
ColorPickerInputComponent.decorators = [
    { type: Component, args: [{
                selector: 'narik-color-input',
                styles: ["\n    .color-picker \n    {  border: black solid 1px;\n    border-radius: 5px;\n    width: 30px;\n    height: 20px;\n    display: block;\n    margin-bottom: 30px;\n    cursor: pointer; }"],
                template: "<input [(colorPicker)]=\"value\"\n                        [required]=\"required\"\n                       [cpOutputFormat]=\"cpOutputFormat\" \n                        [cpToggle]=\"cpToggle\"\n                        (cpToggleChange)=\"cpToggleChange\"\n                        [cpPosition]=\"cpPosition\"\n                        [cpPositionRelativeToArrow]=\"cpPositionRelativeToArrow\"\n                        [cpPresetLabel]=\"cpPresetLabel\"\n                        [cpPresetColors]=\"cpPresetColors\"\n                        [cpCancelButton]=\"cpCancelButton\"\n                        [cpCancelButtonClass]=\"cpCancelButtonClass\"\n                        [cpCancelButtonText]=\"cpCancelButtonText\"\n                        [cpOKButton]=\"cpOKButton\"\n                        [cpOKButtonClass]=\"cpOKButtonClass\"\n                        [cpOKButtonText]=\"cpOKButtonText\"\n                        [cpFallbackColor]=\"cpFallbackColor\"\n                        [cpHeight]=\"cpHeight\"\n                        [cpWidth]=\"cpWidth\"\n                        [cpDialogDisplay]=\"cpDialogDisplay\"\n                        [cpSaveClickOutside]=\"cpSaveClickOutside\"\n                        [cpAlphaChannel]=\"cpAlphaChannel\"\n                        [ngClass]=\"itemClass\"\n                      readonly\n                       name=\"name\"\n                       id=\"id\"\n                       (colorPickerChange)=\"colorPickerChange\"\n                       [cpPosition]=\"cpPosition\"\n                       [style.background]=\"value\" />",
                providers: [{
                        provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(function () { return ColorPickerInputComponent; }),
                        multi: true
                    }]
            },] },
];
/** @nocollapse */
ColorPickerInputComponent.ctorParameters = function () { return []; };
ColorPickerInputComponent.propDecorators = {
    'name': [{ type: Input, args: ['name',] },],
    'id': [{ type: Input, args: ['id',] },],
    'cpToggle': [{ type: Input, args: ['cpToggle',] },],
    'cpToggleChange': [{ type: Output, args: ['cpToggleChange',] },],
    'cpPosition': [{ type: Input, args: ['cpPosition',] },],
    'cpPositionOffset': [{ type: Input, args: ['cpPositionOffset',] },],
    'cpPositionRelativeToArrow': [{ type: Input, args: ['cpPositionRelativeToArrow',] },],
    'cpOutputFormat': [{ type: Input, args: ['cpOutputFormat',] },],
    'cpPresetLabel': [{ type: Input, args: ['cpPresetLabel',] },],
    'cpPresetColors': [{ type: Input, args: ['cpPresetColors',] },],
    'cpCancelButton': [{ type: Input, args: ['cpCancelButton',] },],
    'cpCancelButtonClass': [{ type: Input, args: ['cpCancelButtonClass',] },],
    'cpCancelButtonText': [{ type: Input, args: ['cpCancelButtonText',] },],
    'cpOKButton': [{ type: Input, args: ['cpOKButton',] },],
    'cpOKButtonClass': [{ type: Input, args: ['cpOKButtonClass',] },],
    'cpOKButtonText': [{ type: Input, args: ['cpOKButtonText',] },],
    'cpFallbackColor': [{ type: Input, args: ['cpFallbackColor',] },],
    'cpHeight': [{ type: Input, args: ['cpHeight',] },],
    'cpWidth': [{ type: Input, args: ['cpWidth',] },],
    'cpIgnoredElements': [{ type: Input, args: ['cpIgnoredElements',] },],
    'cpDialogDisplay': [{ type: Input, args: ['cpDialogDisplay',] },],
    'cpSaveClickOutside': [{ type: Input, args: ['cpSaveClickOutside',] },],
    'cpAlphaChannel': [{ type: Input, args: ['cpAlphaChannel',] },],
    'required': [{ type: Input },],
    'itemClass': [{ type: Input },],
    'disabled': [{ type: Input },],
};
//# sourceMappingURL=color-picker-input.component.js.map