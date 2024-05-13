import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PessoasComponent } from './components/pessoas/pessoas.component';
import { PessoasService } from './shared/services/pessoas.service';
import { CommonModule} from "@angular/common";
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from "@angular/forms";
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    AppComponent,
    PessoasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [
    provideClientHydration(),
    PessoasService,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
