"use strict";(self.webpackChunkmatch_it_web=self.webpackChunkmatch_it_web||[]).push([[722],{1722:(Ae,Z,r)=>{r.r(Z),r.d(Z,{GameLevelModule:()=>Ze});var g=r(6814),l=r(6223),I=r(8109),G=r(8562),u=r(5861),q=r(9862),y=r(1476),d=r(5313),w=r(8645),x=r(9773),N=r(3620),U=r(3997),c=r(7700),v=r(9825),e=r(5879),h=r(8282),C=r(4726),_=r(5155),Y=r(2695),L=r(617),f=r(2296),p=r(9157),T=r(2032),A=r(8525),S=r(3680);function J(a,o){if(1&a&&(e.TgZ(0,"mat-option",18),e._uU(1),e.qZA()),2&a){const t=o.$implicit;e.Q6J("value",t.id),e.xp6(1),e.Oqu(t.gameType)}}function Q(a,o){1&a&&(e.TgZ(0,"span"),e._uU(1,"Game type is required"),e.qZA())}function b(a,o){if(1&a&&(e.TgZ(0,"mat-error"),e.YNc(1,Q,2,0,"span",8),e.qZA()),2&a){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",null==t.f.gameTypeId.errors?null:t.f.gameTypeId.errors.required)}}function D(a,o){if(1&a&&(e.TgZ(0,"mat-option",18),e._uU(1),e.qZA()),2&a){const t=o.$implicit;e.Q6J("value",t),e.xp6(1),e.Oqu(t)}}function k(a,o){1&a&&(e.TgZ(0,"span"),e._uU(1,"Game level is required"),e.qZA())}function F(a,o){1&a&&(e.TgZ(0,"span"),e._uU(1,"White space not allowed"),e.qZA())}function V(a,o){if(1&a&&(e.TgZ(0,"mat-error"),e.YNc(1,k,2,0,"span",8),e.YNc(2,F,2,0,"span",8),e.qZA()),2&a){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",null==t.f.gameLevel.errors?null:t.f.gameLevel.errors.required),e.xp6(1),e.Q6J("ngIf",null==t.f.gameLevel.errors?null:t.f.gameLevel.errors.whiteSpace)}}function O(a,o){1&a&&(e.TgZ(0,"span"),e._uU(1,"AssetImagePath is required"),e.qZA())}function B(a,o){if(1&a&&(e.TgZ(0,"mat-error"),e.YNc(1,O,2,0,"span",8),e.qZA()),2&a){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",null==t.f.assetImagePath.errors?null:t.f.assetImagePath.errors.required)}}function E(a,o){1&a&&(e.TgZ(0,"span"),e._uU(1,"Coin value is required"),e.qZA())}function P(a,o){if(1&a&&(e.TgZ(0,"mat-error"),e.YNc(1,E,2,0,"span",8),e.qZA()),2&a){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",null==t.f.coinValue.errors?null:t.f.coinValue.errors.required)}}function R(a,o){1&a&&(e.TgZ(0,"span"),e._uU(1,"Sequence is required"),e.qZA())}function j(a,o){1&a&&(e.TgZ(0,"span"),e._uU(1,"White space not allowed"),e.qZA())}function z(a,o){if(1&a&&(e.TgZ(0,"mat-error"),e.YNc(1,R,2,0,"span",8),e.YNc(2,j,2,0,"span",8),e.qZA()),2&a){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",null==t.f.sequence.errors?null:t.f.sequence.errors.required),e.xp6(1),e.Q6J("ngIf",null==t.f.sequence.errors?null:t.f.sequence.errors.whiteSpace)}}function $(a,o){1&a&&(e.TgZ(0,"span"),e._uU(1,"Status is required"),e.qZA())}function H(a,o){if(1&a&&(e.TgZ(0,"mat-error"),e.YNc(1,$,2,0,"span",8),e.qZA()),2&a){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",null==t.f.status.errors?null:t.f.status.errors.required)}}let W=(()=>{class a{constructor(t,n,i,s,m,ye,Ce){this.formBuilder=t,this.utilService=n,this.gameTypeService=i,this.gameLevelService=s,this.systemService=m,this.dialogRef=ye,this.data=Ce,this.showValidation=!1,this.gameTypeList=[]}ngOnInit(){this.initForm(),this.loadData()}initForm(){this.form=this.formBuilder.group({gameTypeId:new l.NI(this.data?.gameType?.id,[l.kI.required]),gameLevel:new l.NI(this.data?.gameLevel??"",[l.kI.required,v._.containSpace]),assetImagePath:new l.NI(this.data?.assetImagePath??"",[l.kI.required]),coinValue:new l.NI(this.data?.coinValue??"",[l.kI.required,v._.containSpace]),sequence:new l.NI(this.data?.sequence??"",[l.kI.required,v._.containSpace]),status:new l.NI(this.data?.status??"",[l.kI.required])}),this.data?.id&&this.form.addControl("id",new l.NI(this.data?.id,[l.kI.required]))}loadData(){var t=this;return(0,u.Z)(function*(){try{t.utilService.showLoader();let n=yield t.gameTypeService.getGameTypeDropdownList();t.gameTypeList=n.payload.data,n=yield t.systemService.getSystemConstValues(),t.systemConstValues=n}catch(n){t.utilService.showError(n)}finally{t.utilService.hideLoader()}})()}get f(){return this.form.controls}onSubmit(){var t=this;return(0,u.Z)(function*(){if(t.form.invalid)t.showValidation=!0;else{t.showValidation=!1;try{let n;t.utilService.showLoader(),n=t.data?.id?yield t.gameLevelService.updateGameLevel(t.form.value):yield t.gameLevelService.addGameLevel(t.form.value),t.utilService.showSuccessSnack(n.message),t.dialogRef.close(!0)}catch(n){t.utilService.showError(n)}finally{t.utilService.hideLoader()}}})()}static#e=this.\u0275fac=function(n){return new(n||a)(e.Y36(l.qu),e.Y36(h.f),e.Y36(C.u),e.Y36(_.A),e.Y36(Y.o),e.Y36(c.so),e.Y36(c.WI))};static#t=this.\u0275cmp=e.Xpm({type:a,selectors:[["app-add-game-level"]],decls:48,vars:11,consts:[[1,"p-3"],[1,"dialog-heading"],["mat-icon-button","","mat-dialog-close",""],[3,"formGroup","ngSubmit"],[1,"row"],[1,"col-lg-6","mt-3"],["formControlName","gameTypeId","placeholder","Select game type"],[3,"value",4,"ngFor","ngForOf"],[4,"ngIf"],["placeholder","Select game level","formControlName","gameLevel"],["matInput","","formControlName","assetImagePath","placeholder","Enter AssetImagePath"],["matInput","","formControlName","coinValue","placeholder","Enter coin value"],["matInput","","formControlName","sequence","placeholder","Enter Sequence"],["placeholder","Status","formControlName","status"],["value","Active"],["value","Inactive"],[1,"mt-2","mb-2","d-flex","justify-content-end","w-100"],["mat-raised-button","","color","primary"],[3,"value"]],template:function(n,i){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h4"),e._uU(3),e.qZA(),e.TgZ(4,"button",2)(5,"mat-icon"),e._uU(6,"close"),e.qZA()()(),e.TgZ(7,"form",3),e.NdJ("ngSubmit",function(){return i.onSubmit()}),e.TgZ(8,"div",4)(9,"mat-form-field",5)(10,"mat-label"),e._uU(11,"Game Type"),e.qZA(),e.TgZ(12,"mat-select",6),e.YNc(13,J,2,2,"mat-option",7),e.qZA(),e.YNc(14,b,2,1,"mat-error",8),e.qZA(),e.TgZ(15,"mat-form-field",5)(16,"mat-label"),e._uU(17,"Game Level"),e.qZA(),e.TgZ(18,"mat-select",9),e.YNc(19,D,2,2,"mat-option",7),e.qZA(),e.YNc(20,V,3,2,"mat-error",8),e.qZA(),e.TgZ(21,"mat-form-field",5)(22,"mat-label"),e._uU(23,"AssetImagePath"),e.qZA(),e._UZ(24,"input",10),e.YNc(25,B,2,1,"mat-error",8),e.qZA(),e.TgZ(26,"mat-form-field",5)(27,"mat-label"),e._uU(28,"Coin Value"),e.qZA(),e._UZ(29,"input",11),e.YNc(30,P,2,1,"mat-error",8),e.qZA(),e.TgZ(31,"mat-form-field",5)(32,"mat-label"),e._uU(33,"Sequence"),e.qZA(),e._UZ(34,"input",12),e.YNc(35,z,3,2,"mat-error",8),e.qZA(),e.TgZ(36,"mat-form-field",5)(37,"mat-label"),e._uU(38,"Status"),e.qZA(),e.TgZ(39,"mat-select",13)(40,"mat-option",14),e._uU(41,"Active"),e.qZA(),e.TgZ(42,"mat-option",15),e._uU(43,"Inactive"),e.qZA()(),e.YNc(44,H,2,1,"mat-error",8),e.qZA()(),e.TgZ(45,"div",16)(46,"button",17),e._uU(47),e.qZA()()()()),2&n&&(e.xp6(3),e.hij("",null!=i.data&&i.data.id?"Update":"Add"," Game Level"),e.xp6(4),e.Q6J("formGroup",i.form),e.xp6(6),e.Q6J("ngForOf",i.gameTypeList),e.xp6(1),e.Q6J("ngIf",i.f.gameTypeId.invalid&&(i.f.gameTypeId.dirty||i.f.gameTypeId.touched||i.showValidation)),e.xp6(5),e.Q6J("ngForOf",null==i.systemConstValues?null:i.systemConstValues.levelTypes),e.xp6(1),e.Q6J("ngIf",i.f.gameLevel.invalid&&(i.f.gameLevel.dirty||i.f.gameLevel.touched||i.showValidation)),e.xp6(5),e.Q6J("ngIf",i.f.assetImagePath.invalid&&(i.f.assetImagePath.dirty||i.f.assetImagePath.touched||i.showValidation)),e.xp6(5),e.Q6J("ngIf",i.f.coinValue.invalid&&(i.f.coinValue.dirty||i.f.coinValue.touched||i.showValidation)),e.xp6(5),e.Q6J("ngIf",i.f.sequence.invalid&&(i.f.sequence.dirty||i.f.sequence.touched||i.showValidation)),e.xp6(9),e.Q6J("ngIf",i.f.status.invalid&&(i.f.status.dirty||i.f.status.touched||i.showValidation)),e.xp6(3),e.hij("",null!=i.data&&i.data.id?"Update":"Add "," Game Level"))},dependencies:[g.sg,g.O5,L.Hw,f.lW,f.RK,c.ZT,p.KE,p.hX,p.TO,T.Nt,A.gD,S.ey,l._Y,l.Fj,l.JJ,l.JL,l.sg,l.u]})}return a})();function K(a,o){1&a&&(e.TgZ(0,"div"),e._uU(1,"Data is required"),e.qZA())}function M(a,o){1&a&&(e.TgZ(0,"div"),e._uU(1,"White space not allowed"),e.qZA())}function X(a,o){if(1&a&&(e.TgZ(0,"mat-error"),e.YNc(1,K,2,0,"div",6),e.YNc(2,M,2,0,"div",6),e.qZA()),2&a){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",null==t.f.data.errors?null:t.f.data.errors.required),e.xp6(1),e.Q6J("ngIf",null==t.f.data.errors?null:t.f.data.errors.whiteSpace)}}let ee=(()=>{class a{constructor(t,n,i,s,m){this.formBuilder=t,this.utilService=n,this.gameLevelService=i,this.dialogRef=s,this.data=m,this.showValidation=!1}ngOnInit(){this.initForm()}initForm(){this.form=this.formBuilder.group({data:new l.NI(null,[l.kI.required,v._.containSpace])})}get f(){return this.form.controls}onSubmit(){var t=this;return(0,u.Z)(function*(){if(t.form.invalid)t.showValidation=!0;else{t.showValidation=!1;try{t.utilService.showLoader();let n=t.buildArrayData(JSON.parse(t.f.data.value),t.data?.id),i=yield t.gameLevelService.saveGameLevelDetails(n);t.utilService.showSuccessSnack(i.message),t.dialogRef.close()}catch(n){t.utilService.showError(n)}finally{t.utilService.hideLoader()}}})()}buildArrayData(t,n){return t.map(i=>{const s=Object.assign({},i);return s.gameLevelId=n,s})}static#e=this.\u0275fac=function(n){return new(n||a)(e.Y36(l.qu),e.Y36(h.f),e.Y36(_.A),e.Y36(c.so),e.Y36(c.WI))};static#t=this.\u0275cmp=e.Xpm({type:a,selectors:[["app-bulk-insert"]],decls:14,vars:2,consts:[[1,"p-3"],[1,"dialog-heading"],["mat-icon-button","","mat-dialog-close",""],[3,"formGroup","ngSubmit"],[1,"w-100"],["matInput","","formControlName","data","rows","16","placeholder","Enter Json Data"],[4,"ngIf"],[1,"mt-3","mb-2","d-flex","justify-content-end","w-100"],["mat-raised-button","","color","primary"]],template:function(n,i){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h4"),e._uU(3,"Bulk Insert"),e.qZA(),e.TgZ(4,"button",2)(5,"mat-icon"),e._uU(6,"close"),e.qZA()()(),e.TgZ(7,"form",3),e.NdJ("ngSubmit",function(){return i.onSubmit()}),e.TgZ(8,"mat-form-field",4),e._UZ(9,"textarea",5),e.YNc(10,X,3,2,"mat-error",6),e.qZA(),e.TgZ(11,"div",7)(12,"button",8),e._uU(13,"Insert"),e.qZA()()()()),2&n&&(e.xp6(7),e.Q6J("formGroup",i.form),e.xp6(3),e.Q6J("ngIf",i.f.data.invalid&&(i.f.data.dirty||i.f.data.touched||i.showValidation)))},dependencies:[g.O5,L.Hw,f.lW,f.RK,c.ZT,p.KE,p.TO,T.Nt,l._Y,l.Fj,l.JJ,l.JL,l.sg,l.u]})}return a})();var te=r(2599);const ae=["paginator"];function ie(a,o){if(1&a&&(e.TgZ(0,"mat-option",25),e._uU(1),e.qZA()),2&a){const t=o.$implicit;e.Q6J("value",t.id),e.xp6(1),e.Oqu(t.gameType)}}function ne(a,o){1&a&&e._UZ(0,"tr",26)}function oe(a,o){1&a&&e._UZ(0,"tr",27)}function le(a,o){1&a&&(e.TgZ(0,"th",28),e._uU(1,"Game Type"),e.qZA())}function re(a,o){if(1&a&&(e.TgZ(0,"td",29),e._uU(1),e.qZA()),2&a){const t=o.$implicit;e.xp6(1),e.hij(" ",t.gameType.gameType," ")}}function se(a,o){1&a&&(e.TgZ(0,"th",28),e._uU(1,"Game Level"),e.qZA())}function me(a,o){if(1&a&&(e.TgZ(0,"td",29),e._uU(1),e.qZA()),2&a){const t=o.$implicit;e.xp6(1),e.hij(" ",t.gameLevel," ")}}function de(a,o){1&a&&(e.TgZ(0,"th",28),e._uU(1,"Coin Value"),e.qZA())}function ue(a,o){if(1&a&&(e.TgZ(0,"td",29),e._uU(1),e.qZA()),2&a){const t=o.$implicit;e.xp6(1),e.hij(" ",t.coinValue," ")}}function ce(a,o){1&a&&(e.TgZ(0,"th",28),e._uU(1,"Sequence"),e.qZA())}function pe(a,o){if(1&a&&(e.TgZ(0,"td",29),e._uU(1),e.qZA()),2&a){const t=o.$implicit;e.xp6(1),e.hij(" ",t.sequence," ")}}function fe(a,o){1&a&&(e.TgZ(0,"th",28),e._uU(1,"Status"),e.qZA())}function ge(a,o){if(1&a){const t=e.EpF();e.TgZ(0,"td",30),e.NdJ("click",function(i){return i.stopPropagation()}),e.TgZ(1,"mat-slide-toggle",31),e.NdJ("change",function(){const s=e.CHM(t).$implicit,m=e.oxw();return e.KtG(m.onChangeStatus(s))}),e.qZA()()}if(2&a){const t=o.$implicit;e.xp6(1),e.Q6J("checked","Active"==t.status)}}function ve(a,o){1&a&&(e.TgZ(0,"th",28),e._uU(1,"AssetImagePath"),e.qZA())}function he(a,o){if(1&a&&(e.TgZ(0,"td",29),e._uU(1),e.qZA()),2&a){const t=o.$implicit;e.xp6(1),e.hij(" ",t.assetImagePath," ")}}function _e(a,o){1&a&&e._UZ(0,"th",28)}function Le(a,o){if(1&a){const t=e.EpF();e.TgZ(0,"td",29)(1,"button",32),e.NdJ("click",function(){const s=e.CHM(t).$implicit,m=e.oxw();return e.KtG(m.bulkInsert(s))}),e.TgZ(2,"mat-icon"),e._uU(3,"view_array"),e.qZA()(),e.TgZ(4,"button",32),e.NdJ("click",function(){const s=e.CHM(t).$implicit,m=e.oxw();return e.KtG(m.addOrEdit(s))}),e.TgZ(5,"mat-icon"),e._uU(6,"edit"),e.qZA()(),e.TgZ(7,"button",32),e.NdJ("click",function(){const s=e.CHM(t).$implicit,m=e.oxw();return e.KtG(m.deleteGameLevel(s))}),e.TgZ(8,"mat-icon"),e._uU(9,"delete"),e.qZA()()()}}const Te=[{path:"",component:(()=>{class a{constructor(t,n,i,s,m){this.dialog=t,this.utilService=n,this.gameLevelService=i,this.gameTypeService=s,this.fb=m,this.displayedColumns=["gameType","gameLevel","coinValue","sequence","status","assetImagePath","action"],this.dataSource=new d.by,this.onDestroy=new w.x,this.pagination={pageSizeOptions:[10,25,50,100],pageSize:10,pageIndex:0},this.gameTypeList=[]}ngOnDestroy(){this.onDestroy.next(),this.onDestroy.complete()}ngOnInit(){this.filterForm=this.fb.group({keyword:new l.NI(null),gameTypeId:new l.NI(null)}),this.filterForm.controls.keyword.valueChanges.pipe((0,x.R)(this.onDestroy),(0,N.b)(500),(0,U.x)()).subscribe(t=>{this.paginator.pageIndex=0,this.getGameLevelList()}),this.loadData()}onGameTypeChanged(){var t=this;return(0,u.Z)(function*(){yield t.getGameLevelList()})()}filterParams(){let t=new q.LE;return t=t.append("skip",this.pagination.pageIndex*this.pagination.pageSize),t=t.append("limit",this.pagination.pageSize),this.filterForm.value.keyword&&(t=t.append("keyword",this.filterForm.value.keyword)),this.filterForm.value.gameTypeId&&(t=t.append("gameTypeId",this.filterForm.value.gameTypeId)),t}loadData(){var t=this;return(0,u.Z)(function*(){try{t.utilService.showLoader();let n=yield t.gameTypeService.getGameTypeDropdownList();t.gameTypeList=n.payload.data,yield t.getGameLevelList(!1)}catch(n){t.utilService.showError(n)}finally{t.utilService.hideLoader()}})()}getGameLevelList(t=!0){var n=this;return(0,u.Z)(function*(){try{t&&n.utilService.showLoader();let i=yield n.gameLevelService.getGameLevelList(n.filterParams());n.dataSource.data=i.payload.data,setTimeout(()=>{n.paginator.pageIndex=n.pagination.pageIndex,n.paginator.length=i.payload.totalItems})}catch(i){n.utilService.showError(i)}finally{t&&n.utilService.hideLoader()}})()}pageChanged(t){this.pagination.pageSize=t.pageSize,this.pagination.pageIndex=t.pageIndex,this.getGameLevelList()}addOrEdit(t){this.dialog.open(W,{width:"50%",autoFocus:!1,disableClose:!1,data:t}).afterClosed().subscribe(i=>{i&&this.getGameLevelList()})}onChangeStatus(t){var n=this;return(0,u.Z)(function*(){try{n.utilService.showLoader(),t.status="Active"==t.status?"Inactive":"Active";let i=yield n.gameLevelService.updateGameLevel(t);n.utilService.showSuccessSnack(i.message),yield n.getGameLevelList(!1)}catch(i){n.utilService.showError(i)}finally{n.utilService.hideLoader()}})()}deleteGameLevel(t){var n=this;return(0,u.Z)(function*(){if(!0===confirm("Are you sure? Do you want to delete game level?"))try{n.utilService.showLoader();let i=yield n.gameLevelService.deleteGameLevelById(t.id);n.utilService.showSuccessSnack(i.message),yield n.getGameLevelList(!1)}catch(i){n.utilService.showError(i)}finally{n.utilService.hideLoader()}})()}bulkInsert(t){this.dialog.open(ee,{minWidth:"45%",autoFocus:!1,disableClose:!1,data:t})}static#e=this.\u0275fac=function(n){return new(n||a)(e.Y36(c.uw),e.Y36(h.f),e.Y36(_.A),e.Y36(C.u),e.Y36(l.qu))};static#t=this.\u0275cmp=e.Xpm({type:a,selectors:[["app-game-level-list"]],viewQuery:function(n,i){if(1&n&&e.Gf(ae,5,y.NW),2&n){let s;e.iGM(s=e.CRH())&&(i.paginator=s.first)}},decls:43,vars:8,consts:[[1,"heading"],[1,"d-flex"],["mat-button","",3,"click"],[3,"formGroup"],[1,"row"],[1,"col-lg-4"],["matPrefix",""],["matInput","","placeholder","Search game level...","formControlName","keyword"],["formControlName","gameTypeId","placeholder","Select game type",3,"selectionChange"],[3,"value",4,"ngFor","ngForOf"],["mat-table","",3,"dataSource"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["matColumnDef","gameType"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","gameLevel"],["matColumnDef","coinValue"],["matColumnDef","sequence"],["matColumnDef","status"],["mat-cell","",3,"click",4,"matCellDef"],["matColumnDef","assetImagePath"],["matColumnDef","action"],["showFirstLastButtons","",1,"mt-3",3,"pageSize","pageIndex","pageSizeOptions","page"],["paginator",""],[3,"value"],["mat-header-row",""],["mat-row",""],["mat-header-cell",""],["mat-cell",""],["mat-cell","",3,"click"],[3,"checked","change"],["mat-icon-button","",3,"click"]],template:function(n,i){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h4"),e._uU(3,"Game Levels"),e.qZA()(),e.TgZ(4,"button",2),e.NdJ("click",function(){return i.addOrEdit(null)}),e.TgZ(5,"mat-icon"),e._uU(6,"add"),e.qZA(),e._uU(7," Add Game Level"),e.qZA()(),e.TgZ(8,"form",3)(9,"div",4)(10,"mat-form-field",5)(11,"mat-icon",6),e._uU(12,"search"),e.qZA(),e._UZ(13,"input",7),e.qZA(),e.TgZ(14,"mat-form-field",5)(15,"mat-select",8),e.NdJ("selectionChange",function(){return i.onGameTypeChanged()}),e.YNc(16,ie,2,2,"mat-option",9),e.qZA()()()(),e.TgZ(17,"table",10),e.YNc(18,ne,1,0,"tr",11),e.YNc(19,oe,1,0,"tr",12),e.ynx(20,13),e.YNc(21,le,2,0,"th",14),e.YNc(22,re,2,1,"td",15),e.BQk(),e.ynx(23,16),e.YNc(24,se,2,0,"th",14),e.YNc(25,me,2,1,"td",15),e.BQk(),e.ynx(26,17),e.YNc(27,de,2,0,"th",14),e.YNc(28,ue,2,1,"td",15),e.BQk(),e.ynx(29,18),e.YNc(30,ce,2,0,"th",14),e.YNc(31,pe,2,1,"td",15),e.BQk(),e.ynx(32,19),e.YNc(33,fe,2,0,"th",14),e.YNc(34,ge,2,1,"td",20),e.BQk(),e.ynx(35,21),e.YNc(36,ve,2,0,"th",14),e.YNc(37,he,2,1,"td",15),e.BQk(),e.ynx(38,22),e.YNc(39,_e,1,0,"th",14),e.YNc(40,Le,10,0,"td",15),e.BQk(),e.qZA(),e.TgZ(41,"mat-paginator",23,24),e.NdJ("page",function(m){return i.pageChanged(m)}),e.qZA()),2&n&&(e.xp6(8),e.Q6J("formGroup",i.filterForm),e.xp6(8),e.Q6J("ngForOf",i.gameTypeList),e.xp6(1),e.Q6J("dataSource",i.dataSource),e.xp6(1),e.Q6J("matHeaderRowDef",i.displayedColumns),e.xp6(1),e.Q6J("matRowDefColumns",i.displayedColumns),e.xp6(22),e.Q6J("pageSize",i.pagination.pageSize)("pageIndex",i.pagination.pageIndex)("pageSizeOptions",i.pagination.pageSizeOptions))},dependencies:[g.sg,L.Hw,f.lW,f.RK,y.NW,d.BZ,d.fO,d.as,d.w1,d.Dz,d.nj,d.ge,d.ev,d.XQ,d.Gk,p.KE,p.qo,T.Nt,A.gD,S.ey,te.Rr,l._Y,l.Fj,l.JJ,l.JL,l.sg,l.u]})}return a})()}];let Ze=(()=>{class a{static#e=this.\u0275fac=function(n){return new(n||a)};static#t=this.\u0275mod=e.oAB({type:a});static#a=this.\u0275inj=e.cJS({imports:[g.ez,G.q,l.UX,I.Bz.forChild(Te)]})}return a})()}}]);