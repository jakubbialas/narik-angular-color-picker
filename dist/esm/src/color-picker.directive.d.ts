import { OnChanges, ViewContainerRef, ElementRef, EventEmitter, OnInit } from '@angular/core';
import { ColorPickerService } from './color-picker.service';
import { Compiler } from '@angular/core';
export declare class ColorPickerDirective implements OnInit, OnChanges {
    private compiler;
    private vcRef;
    private el;
    private service;
    colorPicker: string;
    colorPickerChange: EventEmitter<string>;
    cpToggle: boolean;
    cpToggleChange: EventEmitter<boolean>;
    cpPosition: string;
    cpPositionOffset: string;
    cpPositionRelativeToArrow: boolean;
    cpOutputFormat: string;
    cpPresetLabel: string;
    cpPresetColors: Array<string>;
    cpCancelButton: boolean;
    cpCancelButtonClass: string;
    cpCancelButtonText: string;
    cpOKButton: boolean;
    cpOKButtonClass: string;
    cpOKButtonText: string;
    cpFallbackColor: string;
    cpHeight: string;
    cpWidth: string;
    cpIgnoredElements: any;
    cpDialogDisplay: string;
    cpSaveClickOutside: boolean;
    cpAlphaChannel: string;
    private dialog;
    private created;
    private ignoreChanges;
    constructor(compiler: Compiler, vcRef: ViewContainerRef, el: ElementRef, service: ColorPickerService);
    ngOnChanges(changes: any): void;
    ngOnInit(): void;
    checkInitValue(): void;
    onClick(): void;
    openDialog(): void;
    colorChanged(value: string, ignore?: boolean): void;
    changeInput(value: string): void;
    toggle(value: boolean): void;
}
