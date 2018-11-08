import { NgModule } from '@angular/core';
import {MapComponent} from './map.component';
import { AgmCoreModule } from '@agm/core';
import { CommonModule } from '@angular/common';
import {MapService} from './map.service';
import {CamelizePipe} from 'ngx-pipes';

@NgModule({
  declarations: [
    MapComponent,
    
  ],
  exports: [
    MapComponent,
    
],
  imports: [
    AgmCoreModule.forRoot({
        apiKey: 'AIzaSyBfuqhOjQuF-8HBt7BXbRmWipCIchArToM'
      }),
      CommonModule
    
  ],
  providers: [MapService,
              CamelizePipe],
  bootstrap: []
})
export class MapModule { }
