import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StorageServiceModule } from 'angular-webstorage-service';

import { ListComponent } from './list/list.component';
import { ListAppendComponent } from './list-append/list-append.component';
import { TruncatePipe } from './pipes/truncate.pipe';
import { ListStorageService } from './services/list-storage.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ListAppendComponent,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    DragDropModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    StorageServiceModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
