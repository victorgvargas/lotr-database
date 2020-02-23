import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookComponent } from './shared/components/book/book.component';
import { MovieComponent } from './shared/components/movie/movie.component';
import { CharacterComponent } from './shared/components/character/character.component';
import { QuoteComponent } from './shared/components/quote/quote.component';
import { ChapterComponent } from './shared/components/chapter/chapter.component';
import { MainComponent } from './shared/components/main/main.component';
import { GoBackButtonComponent } from './shared/components/go-back-button/go-back-button.component';
import { LoaderComponent } from './shared/components/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    MovieComponent,
    CharacterComponent,
    QuoteComponent,
    ChapterComponent,
    MainComponent,
    GoBackButtonComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatMenuModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
