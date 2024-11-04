import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AdminEmploisComponent } from './pages/admin-emplois/admin-emplois.component';
import { EtudiantEmploisComponent } from './pages/etudiant-emplois/etudiant-emplois.component';
import { EnseignantEmploisComponent } from './pages/enseignant-emplois/enseignant-emplois.component';
import { SallesEmploisComponent } from './pages/salles-emplois/salles-emplois.component';
import { EnseignantAbsenceComponent } from './pages/enseignant-absence/enseignant-absence.component';
import { EtudiantAbsenceComponent } from './pages/etudiant-absence/etudiant-absence.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AdminEmploisComponent,
    EtudiantEmploisComponent,
    EnseignantEmploisComponent,
    SallesEmploisComponent,
    EnseignantAbsenceComponent,
    EtudiantAbsenceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
