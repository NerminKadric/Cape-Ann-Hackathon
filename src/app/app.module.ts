import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReqsatusComponent } from './reqsatus/reqsatus.component';
import { StatusValidationComponent } from './status-validation/status-validation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ReqsatusComponent,
    StatusValidationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
