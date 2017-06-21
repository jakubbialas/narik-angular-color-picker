import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {ColorPickerModule, ColorPickerService} from 'narik-angular-color-picker';

@NgModule({
    imports: [
        BrowserModule,
        ColorPickerModule,
        FormsModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [ColorPickerService],
    bootstrap: [AppComponent]
})
export class AppModule { }
