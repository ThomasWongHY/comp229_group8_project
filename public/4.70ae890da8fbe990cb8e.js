(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{jkDv:function(t,e,n){"use strict";n.r(e),n.d(e,"AdminModule",(function(){return x}));var o=n("ofXK"),b=n("3Pt+"),i=n("tyNb"),r=n("UbF0"),c=n("fXoL"),a=n("hO0c");function s(t,e){if(1&t&&(c.Lb(0,"div",17),c.fc(1),c.Kb()),2&t){const t=c.Ub();c.xb(1),c.hc(" ",t.errorMessage," ")}}let d=(()=>{class t{constructor(t,e){this.router=t,this.auth=e}ngOnInit(){this.user=new r.a}authenticate(t){t.valid?this.auth.authenticate(this.user).subscribe(t=>{t.success&&(this.auth.storeUserData(t.token,t.user),this.router.navigateByUrl("admin/main"))}):this.errorMessage="Form Data Invalid"}}return t.\u0275fac=function(e){return new(e||t)(c.Ib(i.b),c.Ib(a.a))},t.\u0275cmp=c.Cb({type:t,selectors:[["ng-component"]],decls:26,vars:3,consts:[[1,"bg-info","p-2","text-center","text-white"],[1,"container"],[1,"row"],[1,"col-md-6","offset-md-3","col-lg-6","offset-lg-3","col-sm-8","offset-sm-1"],["class","bg-danger mt-2 p-2 text-center text-white",4,"ngIf"],["autocomplete","off",3,"ngSubmit"],["form","ngForm"],[1,"form-group"],["for","username"],["type","text","name","username","placeholder","Enter Username","id","username","required","","autofocus","","autocomplete","off",1,"form-control",3,"ngModel","ngModelChange"],["for","password"],["type","password","name","password","placeholder","Enter Password","id","password","required","","autocomplete","off",1,"form-control",3,"ngModel","ngModelChange"],[1,"form-group","text-right"],["type","submit",1,"btn","btn-primary","m-1"],[1,"fas","fa-sign-in-alt"],["routerLink","/home",1,"btn","btn-secondary","m-1"],[1,"fas","fa-undo"],[1,"bg-danger","mt-2","p-2","text-center","text-white"]],template:function(t,e){if(1&t){const t=c.Mb();c.Lb(0,"div",0),c.Lb(1,"h3"),c.fc(2,"ProductStore Admin"),c.Kb(),c.Kb(),c.Lb(3,"main",1),c.Lb(4,"div",2),c.Lb(5,"div",3),c.ec(6,s,2,1,"div",4),c.Lb(7,"h1"),c.fc(8,"Please Login"),c.Kb(),c.Lb(9,"form",5,6),c.Sb("ngSubmit",(function(){c.bc(t);const n=c.ac(10);return e.authenticate(n)})),c.Lb(11,"fieldset",7),c.Lb(12,"label",8),c.fc(13,"Username:"),c.Kb(),c.Lb(14,"input",9),c.Sb("ngModelChange",(function(t){return e.user.username=t})),c.Kb(),c.Kb(),c.Lb(15,"fieldset",7),c.Lb(16,"label",10),c.fc(17,"Password:"),c.Kb(),c.Lb(18,"input",11),c.Sb("ngModelChange",(function(t){return e.user.password=t})),c.Kb(),c.Kb(),c.Lb(19,"fieldset",12),c.Lb(20,"button",13),c.Jb(21,"i",14),c.fc(22," Log In "),c.Kb(),c.Lb(23,"button",15),c.Jb(24,"i",16),c.fc(25," Cancel "),c.Kb(),c.Kb(),c.Kb(),c.Kb(),c.Kb(),c.Kb()}2&t&&(c.xb(6),c.Xb("ngIf",null!=e.errorMessage),c.xb(8),c.Xb("ngModel",e.user.username),c.xb(4),c.Xb("ngModel",e.user.password))},directives:[o.j,b.k,b.e,b.f,b.b,b.i,b.d,b.g,i.c],encapsulation:2}),t})(),l=(()=>{class t{constructor(t,e){this.router=t,this.auth=e}canActivate(t,e){return this.auth.authenticated?(console.log("authenticated"),!0):(console.log("cannot authenticate"),this.router.navigate(["/admin/auth"]),!1)}}return t.\u0275fac=function(e){return new(e||t)(c.Pb(i.b),c.Pb(a.a))},t.\u0275prov=c.Eb({token:t,factory:t.\u0275fac}),t})(),u=(()=>{class t{constructor(t,e){this.auth=t,this.router=e}logout(){this.auth.logout(),this.router.navigateByUrl("/")}}return t.\u0275fac=function(e){return new(e||t)(c.Ib(a.a),c.Ib(i.b))},t.\u0275cmp=c.Cb({type:t,selectors:[["ng-component"]],decls:10,vars:0,consts:[[1,"container-fluid"],[1,"row"],[1,"row","mt-2"],[1,"col-3"],["routerLink","/admin/main/products","routerLinkActive","active",1,"btn","btn-outline-info","btn-block"],["routerLink","/admin/main/orders","routerLinkActive","active",1,"btn","btn-outline-info","btn-block"],[1,"col-9"]],template:function(t,e){1&t&&(c.Lb(0,"div",0),c.Jb(1,"div",1),c.Lb(2,"div",2),c.Lb(3,"div",3),c.Lb(4,"button",4),c.fc(5," Products "),c.Kb(),c.Lb(6,"button",5),c.fc(7," Orders "),c.Kb(),c.Kb(),c.Lb(8,"div",6),c.Jb(9,"router-outlet"),c.Kb(),c.Kb(),c.Kb())},directives:[i.c,i.d,i.g],encapsulation:2}),t})();var f=n("hf/X");function p(t,e){1&t&&(c.Lb(0,"tr"),c.Lb(1,"td",7),c.fc(2,"There are no orders"),c.Kb(),c.Kb())}function h(t,e){if(1&t&&(c.Lb(0,"tr"),c.Jb(1,"td",4),c.Lb(2,"td"),c.fc(3),c.Kb(),c.Lb(4,"td"),c.fc(5),c.Kb(),c.Kb()),2&t){const t=e.$implicit;c.xb(3),c.gc(t.product.name),c.xb(2),c.gc(t.quantity)}}function g(t,e){if(1&t){const t=c.Mb();c.Lb(0,"tr"),c.Lb(1,"td"),c.fc(2),c.Kb(),c.Lb(3,"td"),c.fc(4),c.Kb(),c.Lb(5,"th"),c.fc(6,"Product"),c.Kb(),c.Lb(7,"th"),c.fc(8,"Quantity"),c.Kb(),c.Lb(9,"td"),c.Lb(10,"button",8),c.Sb("click",(function(){c.bc(t);const n=e.$implicit;return c.Ub().markShipped(n)})),c.Jb(11,"i"),c.fc(12),c.Kb(),c.Kb(),c.Lb(13,"td"),c.Lb(14,"button",9),c.Sb("click",(function(){c.bc(t);const n=e.$implicit;return c.Ub().delete(n._id)})),c.Jb(15,"i",10),c.fc(16," Delete "),c.Kb(),c.Kb(),c.Kb(),c.ec(17,h,6,2,"tr",11)}if(2&t){const t=e.$implicit;c.xb(2),c.gc(t.name),c.xb(2),c.gc(t.postalCode),c.xb(7),c.zb(t.shipped?"fas fa-shipping-fast":"fas fa-truck"),c.xb(1),c.hc(" ",t.shipped?"Shipped":"Ship"," "),c.xb(5),c.Xb("ngForOf",t.cart.lines)}}let m=(()=>{class t{constructor(t,e){this.repository=t,this.router=e,this.includeShipped=!1}ngOnInit(){}getOrders(){return this.repository.getOrders().filter(t=>this.includeShipped||!t.shipped)}markShipped(t){t.shipped=!t.shipped,this.repository.updateOrder(t),this.router.navigateByUrl("/admin/main/orders")}delete(t){confirm("Are you sure?")?this.repository.deleteOrder(t):this.router.navigateByUrl("/admin/main/orders")}}return t.\u0275fac=function(e){return new(e||t)(c.Ib(f.a),c.Ib(i.b))},t.\u0275cmp=c.Cb({type:t,selectors:[["ng-component"]],decls:18,vars:3,consts:[[1,"form-check"],[1,"form-check-label"],["type","checkbox",1,"form-check-input",3,"ngModel","ngModelChange"],[1,"table","table-sm"],["colspan","2"],[4,"ngIf"],["ngFor","",3,"ngForOf"],["colspan","5"],[1,"btn","btn-warning","m-1",3,"click"],[1,"btn","btn-danger",3,"click"],[1,"fas","fa-trash-alt"],[4,"ngFor","ngForOf"]],template:function(t,e){1&t&&(c.Lb(0,"div",0),c.Lb(1,"label",1),c.Lb(2,"input",2),c.Sb("ngModelChange",(function(t){return e.includeShipped=t})),c.Kb(),c.fc(3," Display Shipped Orders "),c.Kb(),c.Kb(),c.Lb(4,"table",3),c.Lb(5,"thead"),c.Lb(6,"tr"),c.Lb(7,"th"),c.fc(8,"Name"),c.Kb(),c.Lb(9,"th"),c.fc(10,"Postal Code"),c.Kb(),c.Lb(11,"th",4),c.fc(12,"Cart"),c.Kb(),c.Jb(13,"th"),c.Jb(14,"th"),c.Kb(),c.Kb(),c.Lb(15,"tbody"),c.ec(16,p,3,0,"tr",5),c.ec(17,g,18,7,"ng-template",6),c.Kb(),c.Kb()),2&t&&(c.xb(2),c.Xb("ngModel",e.includeShipped),c.xb(14),c.Xb("ngIf",0==e.getOrders().length),c.xb(1),c.Xb("ngForOf",e.getOrders()))},directives:[b.a,b.d,b.g,o.j,o.i],encapsulation:2}),t})();var L=n("47DY"),K=n("EnQi");let k=(()=>{class t{constructor(t,e,n){this.repository=t,this.router=e,this.editing=!1,this.product=new L.a,this.editing="edit"===n.snapshot.params.mode,this.editing&&Object.assign(this.product,t.getProduct(n.snapshot.params.id))}ngOnInit(){}save(t){this.repository.saveProduct(this.product),this.router.navigateByUrl("/admin/main/products")}}return t.\u0275fac=function(e){return new(e||t)(c.Ib(K.a),c.Ib(i.b),c.Ib(i.a))},t.\u0275cmp=c.Cb({type:t,selectors:[["ng-component"]],decls:31,vars:16,consts:[[1,"bg-primary","p-2","text-white"],["novalidate","",3,"ngSubmit"],["form","ngForm"],[1,"form-group"],["type","text","name","name",1,"form-control",3,"ngModel","ngModelChange"],["type","text","name","author",1,"form-control",3,"ngModel","ngModelChange"],["type","text","name","published",1,"form-control",3,"ngModel","ngModelChange"],["type","text","name","description",1,"form-control",3,"ngModel","ngModelChange"],["type","text","name","price",1,"form-control",3,"ngModel","ngModelChange"],["type","submit",1,"btn","btn-primary","m-1"],["type","reset","routerLink","/admin/main/products",1,"btn","btn-secondary"],[1,"fas","fa-undo"]],template:function(t,e){if(1&t){const t=c.Mb();c.Lb(0,"div",0),c.Lb(1,"h5"),c.fc(2),c.Kb(),c.Kb(),c.Lb(3,"form",1,2),c.Sb("ngSubmit",(function(){c.bc(t);const n=c.ac(4);return e.save(n)})),c.Lb(5,"div",3),c.Lb(6,"label"),c.fc(7,"Name"),c.Kb(),c.Lb(8,"input",4),c.Sb("ngModelChange",(function(t){return e.product.name=t})),c.Kb(),c.Kb(),c.Lb(9,"div",3),c.Lb(10,"label"),c.fc(11,"Author"),c.Kb(),c.Lb(12,"input",5),c.Sb("ngModelChange",(function(t){return e.product.author=t})),c.Kb(),c.Kb(),c.Lb(13,"div",3),c.Lb(14,"label"),c.fc(15,"Published"),c.Kb(),c.Lb(16,"input",6),c.Sb("ngModelChange",(function(t){return e.product.published=t})),c.Kb(),c.Kb(),c.Lb(17,"div",3),c.Lb(18,"label"),c.fc(19,"Description"),c.Kb(),c.Lb(20,"input",7),c.Sb("ngModelChange",(function(t){return e.product.description=t})),c.Kb(),c.Kb(),c.Lb(21,"div",3),c.Lb(22,"label"),c.fc(23,"Price"),c.Kb(),c.Lb(24,"input",8),c.Sb("ngModelChange",(function(t){return e.product.price=t})),c.Kb(),c.Kb(),c.Lb(25,"button",9),c.Jb(26,"i"),c.fc(27),c.Kb(),c.Lb(28,"button",10),c.Jb(29,"i",11),c.fc(30," Cancel "),c.Kb(),c.Kb()}2&t&&(c.Ab("bg-warning",e.editing)("text-dark",e.editing),c.xb(2),c.hc("",e.editing?"Edit":"Add"," Product"),c.xb(6),c.Xb("ngModel",e.product.name),c.xb(4),c.Xb("ngModel",e.product.author),c.xb(4),c.Xb("ngModel",e.product.published),c.xb(4),c.Xb("ngModel",e.product.description),c.xb(4),c.Xb("ngModel",e.product.price),c.xb(1),c.Ab("btn-warning",e.editing),c.xb(1),c.zb(e.editing?"fas fa-save":"fas fa-plus-circle"),c.xb(1),c.hc(" ",e.editing?"Save":"Add"," "))},directives:[b.k,b.e,b.f,b.b,b.d,b.g,i.c],encapsulation:2}),t})();function v(t,e){if(1&t){const t=c.Mb();c.Lb(0,"tr"),c.Lb(1,"td"),c.fc(2),c.Kb(),c.Lb(3,"td"),c.fc(4),c.Kb(),c.Lb(5,"td"),c.fc(6),c.Kb(),c.Lb(7,"td"),c.fc(8),c.Kb(),c.Lb(9,"td"),c.fc(10),c.Vb(11,"currency"),c.Kb(),c.Lb(12,"td"),c.Lb(13,"button",4),c.Sb("click",(function(){c.bc(t);const n=e.$implicit;return c.Ub().editProduct(n._id)})),c.Jb(14,"i",5),c.fc(15," Edit "),c.Kb(),c.Kb(),c.Lb(16,"td"),c.Lb(17,"button",6),c.Sb("click",(function(){c.bc(t);const n=e.$implicit;return c.Ub().deleteProduct(n._id)})),c.Jb(18,"i",7),c.fc(19," Delete "),c.Kb(),c.Kb(),c.Kb()}if(2&t){const t=e.$implicit;c.xb(2),c.gc(t.name),c.xb(2),c.gc(t.author),c.xb(2),c.gc(t.published),c.xb(2),c.gc(t.description),c.xb(2),c.gc(c.Wb(11,5,t.price,"USD","symbol","2.2-2"))}}const y=i.f.forChild([{path:"auth",component:d},{path:"main",component:u,canActivate:[l],children:[{path:"products/:mode/:id",component:k,data:{title:"Edit Product"},canActivate:[l]},{path:"products/:mode",component:k,data:{title:"Add Product"},canActivate:[l]},{path:"products",component:(()=>{class t{constructor(t,e){this.repository=t,this.router=e}ngOnInit(){}getProducts(){return this.repository.getProducts()}deleteProduct(t){confirm("Are you sure?")&&void 0!==t?this.repository.deleteProduct(t):(window.location.reload(),this.router.navigateByUrl("/admin/main/products"))}addProduct(){this.router.navigateByUrl("/admin/main/products/add")}editProduct(t){this.router.navigateByUrl("/admin/main/products/edit/"+t)}}return t.\u0275fac=function(e){return new(e||t)(c.Ib(K.a),c.Ib(i.b))},t.\u0275cmp=c.Cb({type:t,selectors:[["ng-component"]],decls:20,vars:1,consts:[[1,"table","table-sm","table-striped"],[4,"ngFor","ngForOf"],[1,"btn","btn-primary",3,"click"],[1,"fas","fa-plus-circle"],[1,"btn","btn-sm","btn-primary","m-1",3,"click"],[1,"fas","fa-pencil-alt"],[1,"btn","btn-sm","btn-danger","m-1",3,"click"],[1,"fas","fa-trash-alt"]],template:function(t,e){1&t&&(c.Lb(0,"table",0),c.Lb(1,"thead"),c.Lb(2,"tr"),c.Lb(3,"th"),c.fc(4,"Name"),c.Kb(),c.Lb(5,"th"),c.fc(6,"Author"),c.Kb(),c.Lb(7,"th"),c.fc(8,"Published"),c.Kb(),c.Lb(9,"th"),c.fc(10,"Description"),c.Kb(),c.Lb(11,"th"),c.fc(12,"Price"),c.Kb(),c.Jb(13,"th"),c.Jb(14,"th"),c.Kb(),c.Kb(),c.Lb(15,"tbody"),c.ec(16,v,20,10,"tr",1),c.Kb(),c.Kb(),c.Lb(17,"button",2),c.Sb("click",(function(){return e.addProduct()})),c.Jb(18,"i",3),c.fc(19," Add New Product\n"),c.Kb()),2&t&&(c.xb(16),c.Xb("ngForOf",e.getProducts()))},directives:[o.i],pipes:[o.c],encapsulation:2}),t})(),data:{title:"Product Table"},canActivate:[l]},{path:"orders",component:m,data:{title:"Order Table"},canActivate:[l]},{path:"**",redirectTo:"product-list"}]},{path:"**",redirectTo:"auth"}]);let x=(()=>{class t{}return t.\u0275mod=c.Gb({type:t}),t.\u0275inj=c.Fb({factory:function(e){return new(e||t)},providers:[l],imports:[[o.b,b.c,y]]}),t})()}}]);