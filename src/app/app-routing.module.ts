import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookComponent } from './shared/components/book/book.component';
import { ChapterComponent } from './shared/components/chapter/chapter.component';
import { CharacterComponent } from './shared/components/character/character.component';
import { MovieComponent } from './shared/components/movie/movie.component';
import { QuoteComponent } from './shared/components/quote/quote.component';
import { MainComponent } from './shared/components/main/main.component';


const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full'},
  {path : 'main', component : MainComponent},
  {path : 'book', component : BookComponent},
  {path : 'chapter', component : ChapterComponent},
  {path : 'character', component : CharacterComponent},
  {path : 'movie', component : MovieComponent},
  {path : 'quote', component : QuoteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
