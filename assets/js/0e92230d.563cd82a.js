/*! For license information please see 0e92230d.563cd82a.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[444925],{603905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>m});var r=a(667294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var i=r.createContext({}),c=function(t){var e=r.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},s=function(t){var e=c(t.components);return r.createElement(i.Provider,{value:e},t.children)},d="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},g=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,i=t.parentName,s=p(t,["components","mdxType","originalType","parentName"]),d=c(a),g=n,m=d["".concat(i,".").concat(g)]||d[g]||u[g]||l;return a?r.createElement(m,o(o({ref:e},s),{},{components:a})):r.createElement(m,o({ref:e},s))}));function m(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,o=new Array(l);o[0]=g;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p[d]="string"==typeof t?t:n,o[1]=p;for(var c=2;c<l;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},219245:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>p,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});a(827378);var r=a(603905);function n(){return n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t},n.apply(this,arguments)}function l(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}const o={id:"plugin-catalog",title:"@backstage/plugin-catalog",description:"API Reference for @backstage/plugin-catalog"},p=void 0,i={unversionedId:"reference/plugin-catalog",id:"reference/plugin-catalog",title:"@backstage/plugin-catalog",description:"API Reference for @backstage/plugin-catalog",source:"@site/../docs/reference/plugin-catalog.md",sourceDirName:"reference",slug:"/reference/plugin-catalog",permalink:"/docs/reference/plugin-catalog",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-catalog.md",tags:[],version:"current",frontMatter:{id:"plugin-catalog",title:"@backstage/plugin-catalog",description:"API Reference for @backstage/plugin-catalog"}},c={},s=[{value:"Classes",id:"classes",level:2},{value:"Functions",id:"functions",level:2},{value:"Interfaces",id:"interfaces",level:2},{value:"Variables",id:"variables",level:2},{value:"Type Aliases",id:"type-aliases",level:2}],d={toc:s};function u(t){var{components:e}=t,a=l(t,["components"]);return(0,r.kt)("wrapper",n({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",n({parentName:"p"},{href:"/docs/reference/"}),"Home")," ",">"," ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/reference/plugin-catalog"}),(0,r.kt)("inlineCode",{parentName:"a"},"@backstage/plugin-catalog"))),(0,r.kt)("p",null,"The Backstage plugin for browsing the Backstage catalog"),(0,r.kt)("h2",n({},{id:"classes"}),"Classes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Class"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-catalog.defaultstarredentitiesapi"}),"DefaultStarredEntitiesApi")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Default implementation of the StarredEntitiesApi that is backed by the StorageApi.")))),(0,r.kt)("h2",n({},{id:"functions"}),"Functions"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Function"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-catalog.aboutcontent"}),"AboutContent(props)")),(0,r.kt)("td",n({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-catalog.aboutfield"}),"AboutField(props)")),(0,r.kt)("td",n({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-catalog.catalogentitypage"}),"CatalogEntityPage()")),(0,r.kt)("td",n({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-catalog.catalogindexpage"}),"CatalogIndexPage(props)")),(0,r.kt)("td",n({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-catalog.catalogkindheader"}),"CatalogKindHeader(props)")),(0,r.kt)("td",n({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-catalog.entityaboutcard"}),"EntityAboutCard(props)")),(0,r.kt)("td",n({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-catalog.entitydependencyofcomponentscard"}),"EntityDependencyOfComponentsCard(props)")),(0,r.kt)("td",n({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-catalog.entitydependsoncomponentscard"}),"EntityDependsOnComponentsCard(props)")),(0,r.kt)("td",n({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-catalog.entitydependsonresourcescard"}),"EntityDependsOnResourcesCard(props)")),(0,r.kt)("td",n({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-catalog.entityhascomponentscard"}),"EntityHasComponentsCard(props)")),(0,r.kt)("td",n({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-catalog.entityhasresourcescard"}),"EntityHasResourcesCard(props)")),(0,r.kt)("td",n({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-catalog.entityhassubcomponentscard"}),"EntityHasSubcomponentsCard(props)")),(0,r.kt)("td",n({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-catalog.entityhassystemscard"}),"EntityHasSystemsCard(props)")),(0,r.kt)("td",n({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-catalog.entityorphanwarning"}),"EntityOrphanWarning()")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Displays a warning alert if the entity is marked as orphan with the ability to delete said entity.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-catalog.entityprocessingerrorspanel"}),"EntityProcessingErrorsPanel()")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Displays a list of errors from the ancestors of the current entity.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-catalog.hascatalogprocessingerrors"}),"hasCatalogProcessingErrors(entity, context)")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Returns true if the given entity has any processing errors on it.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-catalog.haslabels"}),"hasLabels(entity)")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Returns true if the given entity has labels annotation given by the catalog. For use by EntitySwitch")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-catalog.iscomponenttype"}),"isComponentType(types)")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"For use in EntitySwitch.Case. Matches if the entity is a Component of a given spec.type.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-catalog.iskind"}),"isKind(kinds)")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"For use in EntitySwitch.Case. Matches if the entity is of a given kind.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-catalog.isnamespace"}),"isNamespace(namespaces)")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"For use in EntitySwitch.Case. Matches if the entity is in a given namespace.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-catalog.isorphan"}),"isOrphan(entity)")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Returns true if the given entity has the orphan annotation given by the catalog.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-catalog.isresourcetype"}),"isResourceType(types)")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"For use in EntitySwitch.Case. Matches if the entity is a Resource of a given spec.type.")))),(0,r.kt)("h2",n({},{id:"interfaces"}),"Interfaces"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Interface"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-catalog.aboutcardprops"}),"AboutCardProps")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Props for ",(0,r.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-catalog.entityaboutcard"}),"EntityAboutCard()"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-catalog.aboutcontentprops"}),"AboutContentProps")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Props for ",(0,r.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-catalog.aboutcontent"}),"AboutContent()"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-catalog.aboutfieldprops"}),"AboutFieldProps")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Props for ",(0,r.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-catalog.aboutfield"}),"AboutField()"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-catalog.catalogkindheaderprops"}),"CatalogKindHeaderProps")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Props for ",(0,r.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-catalog.catalogkindheader"}),"CatalogKindHeader()"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-catalog.catalogsearchresultlistitemprops"}),"CatalogSearchResultListItemProps")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Props for ",(0,r.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-catalog.catalogsearchresultlistitem"}),"CatalogSearchResultListItem"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-catalog.catalogtableprops"}),"CatalogTableProps")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Props for ",(0,r.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-catalog.catalogtable"}),"CatalogTable"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-catalog.catalogtablerow"}),"CatalogTableRow")),(0,r.kt)("td",n({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-catalog.defaultcatalogpageprops"}),"DefaultCatalogPageProps")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Props for root catalog pages.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-catalog.dependencyofcomponentscardprops"}),"DependencyOfComponentsCardProps")),(0,r.kt)("td",n({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-catalog.dependsoncomponentscardprops"}),"DependsOnComponentsCardProps")),(0,r.kt)("td",n({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-catalog.dependsonresourcescardprops"}),"DependsOnResourcesCardProps")),(0,r.kt)("td",n({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-catalog.entitylabelscardprops"}),"EntityLabelsCardProps")),(0,r.kt)("td",n({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-catalog.entitylayoutprops"}),"EntityLayoutProps")),(0,r.kt)("td",n({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-catalog.entitylinkscardprops"}),"EntityLinksCardProps")),(0,r.kt)("td",n({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-catalog.entityswitchcaseprops"}),"EntitySwitchCaseProps")),(0,r.kt)("td",n({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-catalog.entityswitchprops"}),"EntitySwitchProps")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Props for the ",(0,r.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-catalog.entityswitch"}),"EntitySwitch")," component.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-catalog.hascomponentscardprops"}),"HasComponentsCardProps")),(0,r.kt)("td",n({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-catalog.hasresourcescardprops"}),"HasResourcesCardProps")),(0,r.kt)("td",n({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-catalog.hassubcomponentscardprops"}),"HasSubcomponentsCardProps")),(0,r.kt)("td",n({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-catalog.hassystemscardprops"}),"HasSystemsCardProps")),(0,r.kt)("td",n({parentName:"tr"},{align:null}))))),(0,r.kt)("h2",n({},{id:"variables"}),"Variables"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Variable"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-catalog.catalogplugin"}),"catalogPlugin")),(0,r.kt)("td",n({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-catalog.catalogsearchresultlistitem"}),"CatalogSearchResultListItem")),(0,r.kt)("td",n({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-catalog.catalogtable"}),"CatalogTable")),(0,r.kt)("td",n({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-catalog.entitylabelscard"}),"EntityLabelsCard")),(0,r.kt)("td",n({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-catalog.entitylayout"}),"EntityLayout")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("p",null,"EntityLayout is a compound component, which allows you to define a layout for entities using a sub-navigation mechanism."),(0,r.kt)("p",null,"Consists of two parts: EntityLayout and EntityLayout.Route"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-catalog.entitylinkscard"}),"EntityLinksCard")),(0,r.kt)("td",n({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-catalog.entitylistcontainer"}),"EntityListContainer")),(0,r.kt)("td",n({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-catalog.entityswitch"}),"EntitySwitch")),(0,r.kt)("td",n({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-catalog.filtercontainer"}),"FilterContainer")),(0,r.kt)("td",n({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-catalog.filteredentitylayout"}),"FilteredEntityLayout")),(0,r.kt)("td",n({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-catalog.relatedentitiescard"}),"RelatedEntitiesCard")),(0,r.kt)("td",n({parentName:"tr"},{align:null}))))),(0,r.kt)("h2",n({},{id:"type-aliases"}),"Type Aliases"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Type Alias"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-catalog.backstageoverrides"}),"BackstageOverrides")),(0,r.kt)("td",n({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-catalog.breakpoint"}),"Breakpoint")),(0,r.kt)("td",n({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-catalog.columnbreakpoints"}),"ColumnBreakpoints")),(0,r.kt)("td",n({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-catalog.entitycontextmenuclasskey"}),"EntityContextMenuClassKey")),(0,r.kt)("td",n({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-catalog.entitylayoutrouteprops"}),"EntityLayoutRouteProps")),(0,r.kt)("td",n({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-catalog.entitylinksemptystateclasskey"}),"EntityLinksEmptyStateClassKey")),(0,r.kt)("td",n({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-catalog.plugincatalogcomponentsnametoclasskey"}),"PluginCatalogComponentsNameToClassKey")),(0,r.kt)("td",n({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-catalog.relatedentitiescardprops"}),"RelatedEntitiesCardProps")),(0,r.kt)("td",n({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-catalog.systemdiagramcardclasskey"}),"SystemDiagramCardClassKey")),(0,r.kt)("td",n({parentName:"tr"},{align:null}))))))}u.isMDXComponent=!0},862525:t=>{var e=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function n(t){if(null==t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}t.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},a=0;a<10;a++)e["_"+String.fromCharCode(a)]=a;if("0123456789"!==Object.getOwnPropertyNames(e).map((function(t){return e[t]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(t){r[t]=t})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(n){return!1}}()?Object.assign:function(t,l){for(var o,p,i=n(t),c=1;c<arguments.length;c++){for(var s in o=Object(arguments[c]))a.call(o,s)&&(i[s]=o[s]);if(e){p=e(o);for(var d=0;d<p.length;d++)r.call(o,p[d])&&(i[p[d]]=o[p[d]])}}return i}},541535:(t,e,a)=>{var r=a(862525),n=60103,l=60106;var o=60109,p=60110,i=60112;var c=60115,s=60116;if("function"==typeof Symbol&&Symbol.for){var d=Symbol.for;n=d("react.element"),l=d("react.portal"),d("react.fragment"),d("react.strict_mode"),d("react.profiler"),o=d("react.provider"),p=d("react.context"),i=d("react.forward_ref"),d("react.suspense"),c=d("react.memo"),s=d("react.lazy")}var u="function"==typeof Symbol&&Symbol.iterator;function g(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,a=1;a<arguments.length;a++)e+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},f={};function k(t,e,a){this.props=t,this.context=e,this.refs=f,this.updater=a||m}function y(){}function N(t,e,a){this.props=t,this.context=e,this.refs=f,this.updater=a||m}k.prototype.isReactComponent={},k.prototype.setState=function(t,e){if("object"!=typeof t&&"function"!=typeof t&&null!=t)throw Error(g(85));this.updater.enqueueSetState(this,t,e,"setState")},k.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")},y.prototype=k.prototype;var h=N.prototype=new y;h.constructor=N,r(h,k.prototype),h.isPureReactComponent=!0;var b={current:null},v=Object.prototype.hasOwnProperty,C={key:!0,ref:!0,__self:!0,__source:!0};function O(t,e,a){var r,l={},o=null,p=null;if(null!=e)for(r in void 0!==e.ref&&(p=e.ref),void 0!==e.key&&(o=""+e.key),e)v.call(e,r)&&!C.hasOwnProperty(r)&&(l[r]=e[r]);var i=arguments.length-2;if(1===i)l.children=a;else if(1<i){for(var c=Array(i),s=0;s<i;s++)c[s]=arguments[s+2];l.children=c}if(t&&t.defaultProps)for(r in i=t.defaultProps)void 0===l[r]&&(l[r]=i[r]);return{$$typeof:n,type:t,key:o,ref:p,props:l,_owner:b.current}}function P(t){return"object"==typeof t&&null!==t&&t.$$typeof===n}var w=/\/+/g;function E(t,e){return"object"==typeof t&&null!==t&&null!=t.key?function(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,(function(t){return e[t]}))}(""+t.key):e.toString(36)}function j(t,e,a,r,o){var p=typeof t;"undefined"!==p&&"boolean"!==p||(t=null);var i=!1;if(null===t)i=!0;else switch(p){case"string":case"number":i=!0;break;case"object":switch(t.$$typeof){case n:case l:i=!0}}if(i)return o=o(i=t),t=""===r?"."+E(i,0):r,Array.isArray(o)?(a="",null!=t&&(a=t.replace(w,"$&/")+"/"),j(o,e,a,"",(function(t){return t}))):null!=o&&(P(o)&&(o=function(t,e){return{$$typeof:n,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}(o,a+(!o.key||i&&i.key===o.key?"":(""+o.key).replace(w,"$&/")+"/")+t)),e.push(o)),1;if(i=0,r=""===r?".":r+":",Array.isArray(t))for(var c=0;c<t.length;c++){var s=r+E(p=t[c],c);i+=j(p,e,a,s,o)}else if(s=function(t){return null===t||"object"!=typeof t?null:"function"==typeof(t=u&&t[u]||t["@@iterator"])?t:null}(t),"function"==typeof s)for(t=s.call(t),c=0;!(p=t.next()).done;)i+=j(p=p.value,e,a,s=r+E(p,c++),o);else if("object"===p)throw e=""+t,Error(g(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e));return i}function S(t,e,a){if(null==t)return t;var r=[],n=0;return j(t,r,"","",(function(t){return e.call(a,t,n++)})),r}function R(t){if(-1===t._status){var e=t._result;e=e(),t._status=0,t._result=e,e.then((function(e){0===t._status&&(e=e.default,t._status=1,t._result=e)}),(function(e){0===t._status&&(t._status=2,t._result=e)}))}if(1===t._status)return t._result;throw t._result}var D={current:null};function _(){var t=D.current;if(null===t)throw Error(g(321));return t}},827378:(t,e,a)=>{a(541535)}}]);