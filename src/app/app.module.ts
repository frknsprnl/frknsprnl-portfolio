import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IntroComponent } from './intro/intro.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgIconsModule } from '@ng-icons/core';
import { octMarkGithub } from '@ng-icons/octicons';
import {
  featherExternalLink,
  featherTwitter,
  featherLinkedin,
  featherInstagram,
} from '@ng-icons/feather-icons';
import { bootstrapSteam } from '@ng-icons/bootstrap-icons';
import { LeftLinksComponent } from './left-links/left-links.component';
import { RightLinksComponent } from './right-links/right-links.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IntroComponent,
    AboutmeComponent,
    ProjectsComponent,
    ContactComponent,
    LeftLinksComponent,
    RightLinksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgIconsModule.withIcons({
      octMarkGithub,
      featherExternalLink,
      featherTwitter,
      featherLinkedin,
      featherInstagram,
      bootstrapSteam,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
