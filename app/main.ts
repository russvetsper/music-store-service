import {bootstrap}    from 'angular2/platform/browser';
import {AppComponent} from './app.component';
import {MusicItemService } from './music-item.service';
import{ROUTER_PROVIDERS} from 'angular2/router';
bootstrap(AppComponent,[MusicItemService,ROUTER_PROVIDERS]);
