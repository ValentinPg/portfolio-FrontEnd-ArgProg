import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { BiografiaComponent } from './componentes/biografia/biografia.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EstudiosComponent } from './componentes/estudios/estudios.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { IdiomasComponent } from './componentes/idiomas/idiomas.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    BiografiaComponent,
    ExperienciaComponent,
    EstudiosComponent,
    SkillsComponent,
    IdiomasComponent,
    ProyectosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
