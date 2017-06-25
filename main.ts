import 'core-js/es6/reflect';
import 'core-js/es7/reflect';
import 'zone.js/dist/zone';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { ApplicationRef,Component, ComponentRef, NgModule, NgZone, ComponentFactoryResolver, Injector, NgModuleRef, ReflectiveInjector } from '@angular/core';

@Component({
  selector: 'hello',
  template: 'Hello!'
})
export class HelloComponent {}

@NgModule({
  declarations: [
    HelloComponent
  ],
  entryComponents: [HelloComponent],
  imports: [
    BrowserModule
  ]
})
export class AppModule {
  ngDoBootstrap() { }
}


platformBrowserDynamic().bootstrapModule(AppModule).then((ngModuleRef: NgModuleRef<AppModule>) => {

  let appRef: ApplicationRef = ngModuleRef.injector.get(ApplicationRef);
  let componentFactoryResolver = ngModuleRef.componentFactoryResolver;

  setTimeout(() => {
      let componentFactory = ngModuleRef.componentFactoryResolver.resolveComponentFactory(HelloComponent);
      let componentRef = componentFactory.create(ngModuleRef.injector, [], document.querySelector('hello'));
      appRef.attachView(componentRef.hostView);
  }, 5000);

});
