"use strict";(self.webpackChunkmatch_it_web=self.webpackChunkmatch_it_web||[]).push([[148],{8148:(ye,C,r)=>{r.r(C),r.d(C,{GameSourceModule:()=>_e});var p=r(6814),s=r(6223),S=r(8109),F=r(8562),m=r(5861),x=r(9825),e=r(5879),g=r(708),h=r(3467),v=r(9862);let G=(()=>{class a{constructor(t){this.http=t}getGameSourceList(t){return(0,g.n)(this.http.get(h.Fu.GAME_SOURCE(),{params:t}))}updateGameSource(t){return(0,g.n)(this.http.patch(h.Fu.GAME_SOURCE(),t))}deleteGameSourceById(t){return(0,g.n)(this.http.delete(h.Fu.GAME_SOURCE()+"/"+t))}getGameSourceDetailsById(t){return(0,g.n)(this.http.get(h.Fu.GAME_SOURCE()+"/"+t))}uploadSourceMedia(t,i){return(0,g.n)(this.http.post(h.Fu.MEDIA_UPLOAD()+"/"+i,t,{headers:{fileUpload:"true"}}))}deleteMediaById(t){return(0,g.n)(this.http.delete(h.Fu.MEDIA_DELETE()+"/"+t))}updateMediaBucket(t){return(0,g.n)(this.http.put(h.Fu.MEDIA_UPDATE_BUCKET(),t))}static#e=this.\u0275fac=function(i){return new(i||a)(e.LFG(v.eN))};static#t=this.\u0275prov=e.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var _=r(8282),Y=r(2695),I=r(617),y=r(2296),f=r(9157),L=r(2032),A=r(8525),w=r(3680),D=r(2599),J=r(7398),k=r(6593);let T=(()=>{class a{constructor(t,i){this.http=t,this.sanitizer=i}transform(t){return this.http.get(t,{responseType:"blob"}).pipe((0,J.U)(i=>this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(i))))}static#e=this.\u0275fac=function(i){return new(i||a)(e.Y36(v.eN,16),e.Y36(k.H7,16))};static#t=this.\u0275pipe=e.Yjl({name:"secure",type:a,pure:!0,standalone:!0})}return a})();function E(a,n){1&a&&(e.TgZ(0,"div"),e._uU(1,"tts is required"),e.qZA())}function M(a,n){1&a&&(e.TgZ(0,"div"),e._uU(1,"White space not allowed"),e.qZA())}function Q(a,n){if(1&a&&(e.TgZ(0,"mat-error"),e.YNc(1,E,2,0,"div",6),e.YNc(2,M,2,0,"div",6),e.qZA()),2&a){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",null==t.f.tts.errors?null:t.f.tts.errors.required),e.xp6(1),e.Q6J("ngIf",null==t.f.tts.errors?null:t.f.tts.errors.whiteSpace)}}function q(a,n){1&a&&(e.TgZ(0,"div"),e._uU(1,"spelling is required"),e.qZA())}function O(a,n){1&a&&(e.TgZ(0,"div"),e._uU(1,"White space not allowed"),e.qZA())}function B(a,n){if(1&a&&(e.TgZ(0,"mat-error"),e.YNc(1,q,2,0,"div",6),e.YNc(2,O,2,0,"div",6),e.qZA()),2&a){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",null==t.f.spelling.errors?null:t.f.spelling.errors.required),e.xp6(1),e.Q6J("ngIf",null==t.f.spelling.errors?null:t.f.spelling.errors.whiteSpace)}}function b(a,n){if(1&a&&(e.TgZ(0,"mat-option",25),e._uU(1),e.qZA()),2&a){const t=n.$implicit;e.Q6J("value",t),e.xp6(1),e.Oqu(t)}}function z(a,n){if(1&a){const t=e.EpF();e.TgZ(0,"div",20),e._UZ(1,"img",21),e.ALo(2,"async"),e.ALo(3,"secure"),e.TgZ(4,"div")(5,"mat-form-field")(6,"mat-label"),e._uU(7,"Bucket"),e.qZA(),e.TgZ(8,"mat-select",22),e.NdJ("selectionChange",function(o){const c=e.CHM(t).$implicit,u=e.oxw();return e.KtG(u.onBucketTypeChange(o.value,c))}),e.YNc(9,b,2,2,"mat-option",23),e.qZA()(),e.TgZ(10,"button",24),e.NdJ("click",function(){const l=e.CHM(t).$implicit,c=e.oxw();return e.KtG(c.deleteGameSourceMedia(l))}),e.TgZ(11,"mat-icon"),e._uU(12,"delete"),e.qZA()()()()}if(2&a){const t=n.$implicit,i=e.oxw();e.xp6(1),e.Q6J("src",e.lcZ(2,3,e.lcZ(3,5,i.utilService.getImageUrl(t.id))),e.LSH),e.xp6(7),e.Q6J("value",t.bucket),e.xp6(1),e.Q6J("ngForOf",null==i.systemConstValues?null:i.systemConstValues.bucketType)}}let R=(()=>{class a{constructor(t,i,o,l,c){this.gameSourceService=t,this.activatedRoute=i,this.utilService=o,this.systemService=l,this.formBuilder=c,this.showValidation=!1,this.data=null}ngOnInit(){var t=this;this.initForm(),this.activatedRoute.paramMap.subscribe(function(){var i=(0,m.Z)(function*(o){t.gameSourceId=parseInt(o.get("id")??"0"),yield t.preLoadData()});return function(o){return i.apply(this,arguments)}}())}initForm(){this.form=this.formBuilder.group({tts:new s.NI(null,[s.kI.required,x._.containSpace]),spelling:new s.NI(null,[s.kI.required,x._.containSpace]),text1:new s.NI(null),text2:new s.NI(null),status:new s.NI("Active",[s.kI.required])})}onChangeStatus(t){this.form.patchValue({status:t?"Active":"Inactive"})}get f(){return this.form.controls}preLoadData(){var t=this;return(0,m.Z)(function*(){try{t.utilService.showLoader();let i=yield t.gameSourceService.getGameSourceDetailsById(t.gameSourceId);t.data=i.payload,i=yield t.systemService.getSystemConstValues(),t.systemConstValues=i,t.data?.id&&t.form.addControl("id",new s.NI(t.data?.id,[s.kI.required])),t.form.patchValue(t.data)}catch(i){t.utilService.showError(i)}finally{t.utilService.hideLoader()}})()}deleteGameSourceMedia(t){var i=this;return(0,m.Z)(function*(){try{i.utilService.showLoader(),yield i.gameSourceService.deleteMediaById(t.id),i.utilService.showSuccessSnack("Media item deleted successfully"),yield i.preLoadData()}catch(o){i.utilService.showError(o)}finally{i.utilService.hideLoader()}})()}addSourceMedia(t){var i=this;return(0,m.Z)(function*(){try{i.utilService.showLoader();const o=t.target?.files;if(o.length){for(let l=0;l<o.length;l++){const c=o[l];let u=new FormData;u.append("file",c);let Z=yield i.gameSourceService.uploadSourceMedia(u,i.gameSourceId);console.log(Z)}t.target.value=null,yield i.preLoadData()}}catch(o){i.utilService.showError(o)}finally{i.utilService.hideLoader()}})()}onSubmit(){var t=this;return(0,m.Z)(function*(){if(t.form.invalid)t.showValidation=!0;else{t.showValidation=!1;try{t.utilService.showLoader();let i=yield t.gameSourceService.updateGameSource(t.form.value);t.utilService.showSuccessSnack(i.message),yield t.preLoadData()}catch(i){t.utilService.showError(i)}finally{t.utilService.hideLoader()}}})()}onBucketTypeChange(t,i){var o=this;return(0,m.Z)(function*(){try{o.utilService.showLoader();let l=yield o.gameSourceService.updateMediaBucket({id:i.id,bucket:t});o.utilService.showSuccessSnack(l.message)}catch(l){o.utilService.showError(l)}finally{o.utilService.hideLoader()}})()}static#e=this.\u0275fac=function(i){return new(i||a)(e.Y36(G),e.Y36(S.gz),e.Y36(_.f),e.Y36(Y.o),e.Y36(s.qu))};static#t=this.\u0275cmp=e.Xpm({type:a,selectors:[["app-game-source-details"]],decls:42,vars:6,consts:[[1,"heading"],[1,"d-flex"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"col-lg-4"],["matInput","","formControlName","tts","placeholder","Enter tts"],[4,"ngIf"],["matInput","","formControlName","text1","placeholder","Enter text1"],["matInput","","formControlName","text2","placeholder","Enter text2"],[1,"col-lg-6"],["matInput","","formControlName","spelling","rows","2","placeholder","Enter spelling"],[1,"col-lg-2"],[1,"mt-2",3,"checked","change"],["type","submit","color","primary","mat-raised-button",""],[1,"heading","mt-4"],["class","col-lg-3",4,"ngFor","ngForOf"],["matInput","","placeholder","Browse File","fieldLabel","Add Game Source Media","hidden",""],["type","button","mat-raised-button","","color","primary",1,"mt-3",3,"click"],["autocomplete","off","type","file","accept","image/png, image/jpeg, image/jpg, image/svg+xml","multiple","",1,"file-btn",2,"display","none",3,"change"],["fileUpload",""],[1,"col-lg-3"],["height","100",1,"m-3",3,"src"],["placeholder","Bucket",3,"value","selectionChange"],[3,"value",4,"ngFor","ngForOf"],["mat-icon-button","",3,"click"],[3,"value"]],template:function(i,o){if(1&i){const l=e.EpF();e.TgZ(0,"div",0)(1,"div",1)(2,"h4"),e._uU(3,"Game Source Details"),e.qZA()()(),e.TgZ(4,"form",2),e.NdJ("ngSubmit",function(){return o.onSubmit()}),e.TgZ(5,"div",3)(6,"mat-form-field",4)(7,"mat-label"),e._uU(8,"tts"),e.qZA(),e._UZ(9,"input",5),e.YNc(10,Q,3,2,"mat-error",6),e.qZA(),e.TgZ(11,"mat-form-field",4)(12,"mat-label"),e._uU(13,"text1"),e.qZA(),e._UZ(14,"input",7),e.qZA(),e.TgZ(15,"mat-form-field",4)(16,"mat-label"),e._uU(17,"text2"),e.qZA(),e._UZ(18,"input",8),e.qZA(),e.TgZ(19,"mat-form-field",9)(20,"mat-label"),e._uU(21,"spelling"),e.qZA(),e._UZ(22,"textarea",10),e.YNc(23,B,3,2,"mat-error",6),e.qZA(),e.TgZ(24,"div",11)(25,"mat-label"),e._uU(26,"Status"),e.qZA(),e._UZ(27,"br"),e.TgZ(28,"mat-slide-toggle",12),e.NdJ("change",function(u){return o.onChangeStatus(u.checked)}),e.qZA()()(),e.TgZ(29,"button",13),e._uU(30),e.qZA()(),e.TgZ(31,"div",14)(32,"div",1)(33,"h4"),e._uU(34,"Media Details"),e.qZA()()(),e.TgZ(35,"div",3),e.YNc(36,z,13,7,"div",15),e.qZA(),e._UZ(37,"input",16),e.TgZ(38,"button",17),e.NdJ("click",function(){e.CHM(l);const u=e.MAs(41);return e.KtG(u.click())}),e._uU(39,"Add Game Source Media"),e.qZA(),e.TgZ(40,"input",18,19),e.NdJ("change",function(u){return o.addSourceMedia(u)}),e.qZA()}2&i&&(e.xp6(4),e.Q6J("formGroup",o.form),e.xp6(6),e.Q6J("ngIf",o.f.tts.invalid&&(o.f.tts.dirty||o.f.tts.touched||o.showValidation)),e.xp6(13),e.Q6J("ngIf",o.f.spelling.invalid&&(o.f.spelling.dirty||o.f.spelling.touched||o.showValidation)),e.xp6(5),e.Q6J("checked","Active"==o.f.status.value),e.xp6(2),e.hij("",null!=o.data&&o.data.id?"Update":"Add "," Game Source"),e.xp6(6),e.Q6J("ngForOf",null==o.data?null:o.data.mediaItems))},dependencies:[p.sg,p.O5,I.Hw,y.lW,y.RK,f.KE,f.hX,f.TO,L.Nt,A.gD,w.ey,D.Rr,s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u,p.Ov,T]})}return a})();var U=r(1476),d=r(5313),H=r(8645),$=r(9773),j=r(3620),V=r(3997),N=r(7700);function K(a,n){if(1&a&&(e._UZ(0,"img",1),e.ALo(1,"async"),e.ALo(2,"secure")),2&a){const t=e.oxw();e.Q6J("src",e.lcZ(1,1,e.lcZ(2,3,t.utilService.getImageUrl(t.data.media.id))),e.LSH)}}let P=(()=>{class a{constructor(t,i){this.utilService=t,this.data=i}ngOnInit(){}static#e=this.\u0275fac=function(i){return new(i||a)(e.Y36(_.f),e.Y36(N.WI))};static#t=this.\u0275cmp=e.Xpm({type:a,selectors:[["app-show-image-dialog"]],decls:1,vars:1,consts:[["width","400","height","400",3,"src",4,"ngIf"],["width","400","height","400",3,"src"]],template:function(i,o){1&i&&e.YNc(0,K,3,5,"img",0),2&i&&e.Q6J("ngIf",null==o.data||null==o.data.media?null:o.data.media.id)},dependencies:[p.O5,p.Ov,T]})}return a})();var W=r(4726),X=r(2596);function ee(a,n){if(1&a&&(e.TgZ(0,"mat-option",24),e._uU(1),e.qZA()),2&a){const t=n.$implicit;e.Q6J("value",t.id),e.xp6(1),e.Oqu(t.gameType)}}function te(a,n){1&a&&e._UZ(0,"tr",25)}function ie(a,n){1&a&&e._UZ(0,"tr",26)}function ae(a,n){1&a&&(e.TgZ(0,"th",27),e._uU(1,"Media"),e.qZA())}function oe(a,n){if(1&a){const t=e.EpF();e.TgZ(0,"div")(1,"img",30),e.NdJ("click",function(){const l=e.CHM(t).$implicit,c=e.oxw(2);return e.KtG(c.showImageDialog(l))}),e.ALo(2,"async"),e.ALo(3,"secure"),e.qZA()()}if(2&a){const t=n.$implicit,i=e.oxw(2);e.xp6(1),e.s9C("matTooltip","Bucket: "+t.bucket),e.Q6J("matTooltipPosition","right"),e.uIk("src",e.lcZ(2,3,e.lcZ(3,5,i.utilService.getImageUrl(t.id))),e.LSH)}}function ne(a,n){if(1&a&&(e.TgZ(0,"td",28),e.YNc(1,oe,4,7,"div",29),e.qZA()),2&a){const t=n.$implicit;e.xp6(1),e.Q6J("ngForOf",t.mediaItems)}}function re(a,n){1&a&&(e.TgZ(0,"th",27),e._uU(1,"Spelling"),e.qZA())}function le(a,n){if(1&a&&(e.TgZ(0,"td",28),e._uU(1),e.qZA()),2&a){const t=n.$implicit;e.xp6(1),e.hij(" ",t.spelling," ")}}function se(a,n){1&a&&(e.TgZ(0,"th",27),e._uU(1,"Text1"),e.qZA())}function ce(a,n){if(1&a&&(e.TgZ(0,"td",28),e._uU(1),e.qZA()),2&a){const t=n.$implicit;e.xp6(1),e.hij(" ",t.text1," ")}}function ue(a,n){1&a&&(e.TgZ(0,"th",27),e._uU(1,"Text2"),e.qZA())}function me(a,n){if(1&a&&(e.TgZ(0,"td",28),e._uU(1),e.qZA()),2&a){const t=n.$implicit;e.xp6(1),e.hij(" ",t.text2," ")}}function de(a,n){1&a&&(e.TgZ(0,"th",27),e._uU(1,"Created At"),e.qZA())}function pe(a,n){if(1&a&&(e.TgZ(0,"td",28),e._uU(1),e.ALo(2,"date"),e.qZA()),2&a){const t=n.$implicit;e.xp6(1),e.hij(" ",e.xi3(2,1,t.createdAt,"dd-MM-yyyy")," ")}}function ge(a,n){1&a&&(e.TgZ(0,"th",27),e._uU(1,"Status"),e.qZA())}function he(a,n){if(1&a){const t=e.EpF();e.TgZ(0,"td",31),e.NdJ("click",function(o){return o.stopPropagation()}),e.TgZ(1,"mat-slide-toggle",32),e.NdJ("change",function(){const l=e.CHM(t).$implicit,c=e.oxw();return e.KtG(c.onChangeStatus(l))}),e.qZA()()}if(2&a){const t=n.$implicit;e.xp6(1),e.Q6J("checked","Active"==t.status)}}function fe(a,n){1&a&&e._UZ(0,"th",27)}function Se(a,n){if(1&a){const t=e.EpF();e.TgZ(0,"td",28)(1,"button",33),e.NdJ("click",function(){const l=e.CHM(t).$implicit,c=e.oxw();return e.KtG(c.deleteSourceDetails(l))}),e.TgZ(2,"mat-icon"),e._uU(3,"delete"),e.qZA()(),e.TgZ(4,"button",33),e.NdJ("click",function(){const l=e.CHM(t).$implicit,c=e.oxw();return e.KtG(c.openDetails(l))}),e.TgZ(5,"mat-icon"),e._uU(6,"edit"),e.qZA()()()}}const ve=[{path:"",component:(()=>{class a{constructor(t,i,o,l,c,u,Z){this.utilService=t,this.gameSourceService=i,this.gameTypeService=o,this.fb=l,this.router=c,this.activatedRoute=u,this._dialog=Z,this.displayedColumns=["media","spelling","text1","text2","createdAt","status","action"],this.dataSource=new d.by,this.onDestroy=new H.x,this.pagination={pageSizeOptions:[10,25,50,100],pageSize:10,pageIndex:0},this.gameTypeList=[]}ngOnDestroy(){this.onDestroy.next(),this.onDestroy.complete()}ngOnInit(){this.filterForm=this.fb.group({keyword:new s.NI(null),gameTypeId:new s.NI(null)}),this.activatedRoute.queryParams.subscribe(t=>{const i={};t?.page&&!this.pagination.pageIndex&&(this.pagination.pageIndex=parseInt(t?.page)),t?.size&&(this.pagination.pageSize=t?.size),t?.keyword&&!this.filterForm.value.keyword&&(i.keyword=t?.keyword),t?.gameTypeId&&!this.filterForm.value.gameTypeId&&(i.gameTypeId=parseInt(t?.gameTypeId)),this.filterForm.patchValue(i)}),this.filterForm.controls.keyword.valueChanges.pipe((0,$.R)(this.onDestroy),(0,j.b)(500),(0,V.x)()).subscribe(t=>{this.paginator.pageIndex=0,this.getGameSourceList()}),this.loadData()}onGameTypeChanged(){var t=this;return(0,m.Z)(function*(){yield t.getGameSourceList()})()}loadData(){var t=this;return(0,m.Z)(function*(){try{t.utilService.showLoader();let i=yield t.gameTypeService.getGameTypeDropdownList();t.gameTypeList=i.payload.data,yield t.getGameSourceList(!1)}catch(i){t.utilService.showError(i)}finally{t.utilService.hideLoader()}})()}getGameSourceList(t=!0){var i=this;return(0,m.Z)(function*(){try{t&&i.utilService.showLoader();let o=yield i.gameSourceService.getGameSourceList(i.filterParams());i.dataSource.data=o.payload.data,setTimeout(()=>{i.paginator.pageIndex=i.pagination.pageIndex,i.paginator.length=o.payload.totalItems})}catch(o){i.utilService.showError(o)}finally{t&&i.utilService.hideLoader()}})()}pageChanged(t){this.pagination.pageSize=t.pageSize,this.pagination.pageIndex=t.pageIndex,this.getGameSourceList()}filterParams(){let t=new v.LE;return t=t.append("skip",this.pagination.pageIndex*this.pagination.pageSize),t=t.append("limit",this.pagination.pageSize),this.filterForm.value.keyword&&(t=t.append("keyword",this.filterForm.value.keyword)),this.filterForm.value.gameTypeId&&(t=t.append("gameTypeId",this.filterForm.value.gameTypeId)),this.updateRoute(),t}updateRoute(){this.router.navigate([],{replaceUrl:!0,relativeTo:this.activatedRoute,queryParams:{page:this.pagination.pageIndex,size:this.pagination.pageSize,keyword:this.filterForm.value.keyword,gameTypeId:this.filterForm.value.gameTypeId},queryParamsHandling:"merge"})}openDetails(t){this.router.navigate(["source-form",t.id],{relativeTo:this.activatedRoute})}onChangeStatus(t){var i=this;return(0,m.Z)(function*(){try{i.utilService.showLoader(),t.status="Active"==t.status?"Inactive":"Active";let o=yield i.gameSourceService.updateGameSource(t);i.utilService.showSuccessSnack(o.message),yield i.getGameSourceList(!1)}catch(o){i.utilService.showError(o)}finally{i.utilService.hideLoader()}})()}deleteSourceDetails(t){var i=this;return(0,m.Z)(function*(){if(!0===confirm("Are you sure? Do you want to delete source item?"))try{i.utilService.showLoader(),yield i.gameSourceService.deleteGameSourceById(t.id),i.utilService.showSuccessSnack("Game source item deleted successfully"),yield i.getGameSourceList(!1)}catch(o){i.utilService.showError(o)}finally{i.utilService.hideLoader()}})()}showImageDialog(t){this._dialog.open(P,{autoFocus:!1,data:{media:t}})}static#e=this.\u0275fac=function(i){return new(i||a)(e.Y36(_.f),e.Y36(G),e.Y36(W.u),e.Y36(s.qu),e.Y36(S.F0),e.Y36(S.gz),e.Y36(N.uw))};static#t=this.\u0275cmp=e.Xpm({type:a,selectors:[["app-game-source-list"]],viewQuery:function(i,o){if(1&i&&e.Gf(U.NW,5),2&i){let l;e.iGM(l=e.CRH())&&(o.paginator=l.first)}},decls:39,vars:8,consts:[[1,"heading"],[1,"d-flex"],[3,"formGroup"],[1,"row"],[1,"col-lg-4"],["matPrefix",""],["matInput","","placeholder","Search game source...","formControlName","keyword"],["formControlName","gameTypeId","placeholder","Select game type",3,"selectionChange"],[3,"value",4,"ngFor","ngForOf"],["mat-table","",3,"dataSource"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["matColumnDef","media"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","spelling"],["matColumnDef","text1"],["matColumnDef","text2"],["matColumnDef","createdAt"],["matColumnDef","status"],["mat-cell","",3,"click",4,"matCellDef"],["matColumnDef","action"],["showFirstLastButtons","",1,"mt-3",3,"pageSize","pageIndex","pageSizeOptions","page"],["paginator",""],[3,"value"],["mat-header-row",""],["mat-row",""],["mat-header-cell",""],["mat-cell",""],[4,"ngFor","ngForOf"],["height","60",1,"m-2",3,"matTooltipPosition","matTooltip","click"],["mat-cell","",3,"click"],[3,"checked","change"],["mat-icon-button","",3,"click"]],template:function(i,o){1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h4"),e._uU(3,"Game Source"),e.qZA()()(),e.TgZ(4,"form",2)(5,"div",3)(6,"mat-form-field",4)(7,"mat-icon",5),e._uU(8,"search"),e.qZA(),e._UZ(9,"input",6),e.qZA(),e.TgZ(10,"mat-form-field",4)(11,"mat-select",7),e.NdJ("selectionChange",function(){return o.onGameTypeChanged()}),e.YNc(12,ee,2,2,"mat-option",8),e.qZA()()()(),e.TgZ(13,"table",9),e.YNc(14,te,1,0,"tr",10),e.YNc(15,ie,1,0,"tr",11),e.ynx(16,12),e.YNc(17,ae,2,0,"th",13),e.YNc(18,ne,2,1,"td",14),e.BQk(),e.ynx(19,15),e.YNc(20,re,2,0,"th",13),e.YNc(21,le,2,1,"td",14),e.BQk(),e.ynx(22,16),e.YNc(23,se,2,0,"th",13),e.YNc(24,ce,2,1,"td",14),e.BQk(),e.ynx(25,17),e.YNc(26,ue,2,0,"th",13),e.YNc(27,me,2,1,"td",14),e.BQk(),e.ynx(28,18),e.YNc(29,de,2,0,"th",13),e.YNc(30,pe,3,4,"td",14),e.BQk(),e.ynx(31,19),e.YNc(32,ge,2,0,"th",13),e.YNc(33,he,2,1,"td",20),e.BQk(),e.ynx(34,21),e.YNc(35,fe,1,0,"th",13),e.YNc(36,Se,7,0,"td",14),e.BQk(),e.qZA(),e.TgZ(37,"mat-paginator",22,23),e.NdJ("page",function(c){return o.pageChanged(c)}),e.qZA()),2&i&&(e.xp6(4),e.Q6J("formGroup",o.filterForm),e.xp6(8),e.Q6J("ngForOf",o.gameTypeList),e.xp6(1),e.Q6J("dataSource",o.dataSource),e.xp6(1),e.Q6J("matHeaderRowDef",o.displayedColumns),e.xp6(1),e.Q6J("matRowDefColumns",o.displayedColumns),e.xp6(22),e.Q6J("pageSize",o.pagination.pageSize)("pageIndex",o.pagination.pageIndex)("pageSizeOptions",o.pagination.pageSizeOptions))},dependencies:[p.sg,I.Hw,y.RK,U.NW,d.BZ,d.fO,d.as,d.w1,d.Dz,d.nj,d.ge,d.ev,d.XQ,d.Gk,f.KE,f.qo,L.Nt,X.gM,A.gD,w.ey,D.Rr,s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u,p.Ov,p.uU,T]})}return a})()},{path:"source-form/:id",component:R}];let _e=(()=>{class a{static#e=this.\u0275fac=function(i){return new(i||a)};static#t=this.\u0275mod=e.oAB({type:a});static#i=this.\u0275inj=e.cJS({imports:[p.ez,F.q,s.UX,S.Bz.forChild(ve)]})}return a})()}}]);