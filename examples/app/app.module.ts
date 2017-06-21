import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import {ColorPickerModule} from 'narik-angular-color-picker';

import {AppComponent} from './app.component';

@NgModule({
    bootstrap: [AppComponent],
    declarations: [AppComponent],
    imports: [BrowserModule, ColorPickerModule, FormsModule]
})
export class AppModule { }