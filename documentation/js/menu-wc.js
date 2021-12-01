'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">sehir-rehberi-spa documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-ae6139f9fbc3a972b82100fab54eee93a6a399f60adace22b2967fe59a90d4adb612864fe5911f87c37d3b3c62868e8a1d0f3cd2e313cc1b323b8eb82d4ea450"' : 'data-target="#xs-components-links-module-AppModule-ae6139f9fbc3a972b82100fab54eee93a6a399f60adace22b2967fe59a90d4adb612864fe5911f87c37d3b3c62868e8a1d0f3cd2e313cc1b323b8eb82d4ea450"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-ae6139f9fbc3a972b82100fab54eee93a6a399f60adace22b2967fe59a90d4adb612864fe5911f87c37d3b3c62868e8a1d0f3cd2e313cc1b323b8eb82d4ea450"' :
                                            'id="xs-components-links-module-AppModule-ae6139f9fbc3a972b82100fab54eee93a6a399f60adace22b2967fe59a90d4adb612864fe5911f87c37d3b3c62868e8a1d0f3cd2e313cc1b323b8eb82d4ea450"' }>
                                            <li class="link">
                                                <a href="components/AboutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AboutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CityComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CityComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CityDetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CityDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CityDetailPlaceComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CityDetailPlaceComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/Footer2Component.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Footer2Component</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/Footer3Component.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Footer3Component</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PersonComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PersonComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PersonDetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PersonDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RightBannerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RightBannerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ValueComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ValueComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-ae6139f9fbc3a972b82100fab54eee93a6a399f60adace22b2967fe59a90d4adb612864fe5911f87c37d3b3c62868e8a1d0f3cd2e313cc1b323b8eb82d4ea450"' : 'data-target="#xs-injectables-links-module-AppModule-ae6139f9fbc3a972b82100fab54eee93a6a399f60adace22b2967fe59a90d4adb612864fe5911f87c37d3b3c62868e8a1d0f3cd2e313cc1b323b8eb82d4ea450"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-ae6139f9fbc3a972b82100fab54eee93a6a399f60adace22b2967fe59a90d4adb612864fe5911f87c37d3b3c62868e8a1d0f3cd2e313cc1b323b8eb82d4ea450"' :
                                        'id="xs-injectables-links-module-AppModule-ae6139f9fbc3a972b82100fab54eee93a6a399f60adace22b2967fe59a90d4adb612864fe5911f87c37d3b3c62868e8a1d0f3cd2e313cc1b323b8eb82d4ea450"' }>
                                        <li class="link">
                                            <a href="injectables/FormService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormService</a>
                                        </li>
                                    </ul>
                                </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-AppModule-ae6139f9fbc3a972b82100fab54eee93a6a399f60adace22b2967fe59a90d4adb612864fe5911f87c37d3b3c62868e8a1d0f3cd2e313cc1b323b8eb82d4ea450"' : 'data-target="#xs-pipes-links-module-AppModule-ae6139f9fbc3a972b82100fab54eee93a6a399f60adace22b2967fe59a90d4adb612864fe5911f87c37d3b3c62868e8a1d0f3cd2e313cc1b323b8eb82d4ea450"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-AppModule-ae6139f9fbc3a972b82100fab54eee93a6a399f60adace22b2967fe59a90d4adb612864fe5911f87c37d3b3c62868e8a1d0f3cd2e313cc1b323b8eb82d4ea450"' :
                                            'id="xs-pipes-links-module-AppModule-ae6139f9fbc3a972b82100fab54eee93a6a399f60adace22b2967fe59a90d4adb612864fe5911f87c37d3b3c62868e8a1d0f3cd2e313cc1b323b8eb82d4ea450"' }>
                                            <li class="link">
                                                <a href="pipes/FilterPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FilterPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/PersonFilterPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PersonFilterPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppServerModule.html" data-type="entity-link" >AppServerModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppServerModule-f9bd8a2e383e1fdb89b720482f275daf4d52b1791e7f4a876525a64e6683f175d787e6648760b5c33b83cc499537f1610a22f454735802bee0d2d5888220fb91"' : 'data-target="#xs-components-links-module-AppServerModule-f9bd8a2e383e1fdb89b720482f275daf4d52b1791e7f4a876525a64e6683f175d787e6648760b5c33b83cc499537f1610a22f454735802bee0d2d5888220fb91"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppServerModule-f9bd8a2e383e1fdb89b720482f275daf4d52b1791e7f4a876525a64e6683f175d787e6648760b5c33b83cc499537f1610a22f454735802bee0d2d5888220fb91"' :
                                            'id="xs-components-links-module-AppServerModule-f9bd8a2e383e1fdb89b720482f275daf4d52b1791e7f4a876525a64e6683f175d787e6648760b5c33b83cc499537f1610a22f454735802bee0d2d5888220fb91"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Certificate.html" data-type="entity-link" >Certificate</a>
                            </li>
                            <li class="link">
                                <a href="classes/City.html" data-type="entity-link" >City</a>
                            </li>
                            <li class="link">
                                <a href="classes/Cvform.html" data-type="entity-link" >Cvform</a>
                            </li>
                            <li class="link">
                                <a href="classes/Form.html" data-type="entity-link" >Form</a>
                            </li>
                            <li class="link">
                                <a href="classes/Person.html" data-type="entity-link" >Person</a>
                            </li>
                            <li class="link">
                                <a href="classes/Photo.html" data-type="entity-link" >Photo</a>
                            </li>
                            <li class="link">
                                <a href="classes/Skill.html" data-type="entity-link" >Skill</a>
                            </li>
                            <li class="link">
                                <a href="classes/Value.html" data-type="entity-link" >Value</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AboutService.html" data-type="entity-link" >AboutService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CityService.html" data-type="entity-link" >CityService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CvformService.html" data-type="entity-link" >CvformService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DataService.html" data-type="entity-link" >DataService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FormService.html" data-type="entity-link" >FormService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ModalService.html" data-type="entity-link" >ModalService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PersonService.html" data-type="entity-link" >PersonService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ToastService.html" data-type="entity-link" >ToastService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TooltipService.html" data-type="entity-link" >TooltipService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});