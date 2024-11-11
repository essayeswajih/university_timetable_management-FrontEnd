import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AdminEmploisComponent } from './pages/admin-emplois/admin-emplois.component';
import { EnseignantEmploisComponent } from './pages/enseignant-emplois/enseignant-emplois.component';
import { EtudiantEmploisComponent } from './pages/etudiant-emplois/etudiant-emplois.component';
import { SallesEmploisComponent } from './pages/salles-emplois/salles-emplois.component';
import { EnseignantAbsenceComponent } from './pages/enseignant-absence/enseignant-absence.component';
import { EtudiantAbsenceComponent } from './pages/etudiant-absence/etudiant-absence.component';

const routes: Routes = [

  {
    path:"admin-emplois",component:AdminEmploisComponent
  },
  {
    path:"enseignant-emplois",component:EnseignantEmploisComponent
  },
  {
    path:"enseignant-absence",component:EnseignantAbsenceComponent
  },
  {
    path:"etudiant-emplois",component:EtudiantEmploisComponent
  },
  {
    path:"etudiant-absence",component:EtudiantAbsenceComponent
  },
  {
    path:"salle-emplois",component:SallesEmploisComponent
  },
  {
    path:"**",component:HomePageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
