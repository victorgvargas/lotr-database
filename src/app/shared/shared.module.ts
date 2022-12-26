import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BookComponent } from "../shared/components/book/book.component";
import { MovieComponent } from "../shared/components/movie/movie.component";
import { CharacterComponent } from "../shared/components/character/character.component";
import { QuoteComponent } from "../shared/components/quote/quote.component";
import { ChapterComponent } from "../shared/components/chapter/chapter.component";
import { GoBackButtonComponent } from "../shared/components/go-back-button/go-back-button.component";
import { LoaderComponent } from "../shared/components/loader/loader.component";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    BookComponent,
    MovieComponent,
    CharacterComponent,
    QuoteComponent,
    ChapterComponent,
    GoBackButtonComponent,
    LoaderComponent,
  ],
  imports: [
    MatFormFieldModule,
    MatButtonModule,
    MatMenuModule,
    HttpClientModule,
    CommonModule,
  ],
  exports: [
    BookComponent,
    MovieComponent,
    CharacterComponent,
    QuoteComponent,
    ChapterComponent,
    GoBackButtonComponent,
    LoaderComponent,
  ],
})
export class SharedModule {}
