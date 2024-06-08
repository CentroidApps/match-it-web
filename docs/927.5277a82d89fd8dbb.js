"use strict";(self.webpackChunkmatch_it_web=self.webpackChunkmatch_it_web||[]).push([[927],{927:(ye,T,m)=>{m.r(T),m.d(T,{GameTypeModule:()=>_e});var h=m(6814),r=m(6223),v=m(8109),G=m(8562),u=m(5861),x=m(9862),_=m(1476),l=m(5313),I=m(8645),q=m(9773),S=m(3620),N=m(3997),f=m(7700),d=m(9825),e=m(5879),y=m(8282),Z=m(4726),C=m(617),g=m(2296),c=m(9157),A=m(2032),w=m(8525),U=m(3680);function b(t,i){1&t&&(e.TgZ(0,"span"),e._uU(1,"Game Type is required"),e.qZA())}function Y(t,i){1&t&&(e.TgZ(0,"span"),e._uU(1,"White space not allowed"),e.qZA())}function L(t,i){if(1&t&&(e.TgZ(0,"mat-error"),e.YNc(1,b,2,0,"span",7),e.YNc(2,Y,2,0,"span",7),e.qZA()),2&t){const a=e.oxw();e.xp6(1),e.Q6J("ngIf",null==a.f.gameType.errors?null:a.f.gameType.errors.required),e.xp6(1),e.Q6J("ngIf",null==a.f.gameType.errors?null:a.f.gameType.errors.whiteSpace)}}function J(t,i){1&t&&(e.TgZ(0,"span"),e._uU(1,"Asset Image Path is required"),e.qZA())}function Q(t,i){1&t&&(e.TgZ(0,"span"),e._uU(1,"White space not allowed"),e.qZA())}function k(t,i){if(1&t&&(e.TgZ(0,"mat-error"),e.YNc(1,J,2,0,"span",7),e.YNc(2,Q,2,0,"span",7),e.qZA()),2&t){const a=e.oxw();e.xp6(1),e.Q6J("ngIf",null==a.f.assetImagePath.errors?null:a.f.assetImagePath.errors.required),e.xp6(1),e.Q6J("ngIf",null==a.f.assetImagePath.errors?null:a.f.assetImagePath.errors.whiteSpace)}}function D(t,i){1&t&&(e.TgZ(0,"span"),e._uU(1,"Image Type is required"),e.qZA())}function B(t,i){if(1&t&&(e.TgZ(0,"mat-error"),e.YNc(1,D,2,0,"span",7),e.qZA()),2&t){const a=e.oxw();e.xp6(1),e.Q6J("ngIf",null==a.f.imgType.errors?null:a.f.imgType.errors.required)}}function P(t,i){1&t&&(e.TgZ(0,"span"),e._uU(1,"Background Color is required"),e.qZA())}function E(t,i){1&t&&(e.TgZ(0,"span"),e._uU(1,"White space not allowed"),e.qZA())}function F(t,i){if(1&t&&(e.TgZ(0,"mat-error"),e.YNc(1,P,2,0,"span",7),e.YNc(2,E,2,0,"span",7),e.qZA()),2&t){const a=e.oxw();e.xp6(1),e.Q6J("ngIf",null==a.f.bgColor.errors?null:a.f.bgColor.errors.required),e.xp6(1),e.Q6J("ngIf",null==a.f.bgColor.errors?null:a.f.bgColor.errors.whiteSpace)}}function z(t,i){1&t&&(e.TgZ(0,"span"),e._uU(1,"Button Color is required"),e.qZA())}function j(t,i){1&t&&(e.TgZ(0,"span"),e._uU(1,"White space not allowed"),e.qZA())}function R(t,i){if(1&t&&(e.TgZ(0,"mat-error"),e.YNc(1,z,2,0,"span",7),e.YNc(2,j,2,0,"span",7),e.qZA()),2&t){const a=e.oxw();e.xp6(1),e.Q6J("ngIf",null==a.f.btnColor.errors?null:a.f.btnColor.errors.required),e.xp6(1),e.Q6J("ngIf",null==a.f.btnColor.errors?null:a.f.btnColor.errors.whiteSpace)}}function O(t,i){1&t&&(e.TgZ(0,"span"),e._uU(1,"Sequence is required"),e.qZA())}function V(t,i){1&t&&(e.TgZ(0,"span"),e._uU(1,"White space not allowed"),e.qZA())}function W(t,i){if(1&t&&(e.TgZ(0,"mat-error"),e.YNc(1,O,2,0,"span",7),e.YNc(2,V,2,0,"span",7),e.qZA()),2&t){const a=e.oxw();e.xp6(1),e.Q6J("ngIf",null==a.f.sequence.errors?null:a.f.sequence.errors.required),e.xp6(1),e.Q6J("ngIf",null==a.f.sequence.errors?null:a.f.sequence.errors.whiteSpace)}}function $(t,i){1&t&&(e.TgZ(0,"span"),e._uU(1,"Status is required"),e.qZA())}function H(t,i){if(1&t&&(e.TgZ(0,"mat-error"),e.YNc(1,$,2,0,"span",7),e.qZA()),2&t){const a=e.oxw();e.xp6(1),e.Q6J("ngIf",null==a.f.status.errors?null:a.f.status.errors.required)}}let K=(()=>{class t{constructor(a,n,o,s,p){this.formBuilder=a,this.utilService=n,this.gameTypeService=o,this.dialogRef=s,this.data=p,this.showValidation=!1}ngOnInit(){this.initForm()}initForm(){this.form=this.formBuilder.group({gameType:new r.NI(this.data?.gameType??"",[r.kI.required,d._.containSpace]),assetImagePath:new r.NI(this.data?.assetImagePath??"",[r.kI.required,d._.containSpace]),imgType:new r.NI(this.data?.imgType??"",[r.kI.required]),bgColor:new r.NI(this.data?.bgColor??"",[r.kI.required,d._.containSpace]),btnColor:new r.NI(this.data?.btnColor??"",[r.kI.required,d._.containSpace]),sequence:new r.NI(this.data?.sequence??"",[r.kI.required,d._.containSpace]),status:new r.NI(this.data?.status??"",[r.kI.required])}),this.data?.id&&this.form.addControl("id",new r.NI(this.data?.id,[r.kI.required]))}get f(){return this.form.controls}onSubmit(){var a=this;return(0,u.Z)(function*(){if(a.form.invalid)a.showValidation=!0;else{a.showValidation=!1;try{let n;a.utilService.showLoader(),n=a.data?.id?yield a.gameTypeService.updateGameType(a.form.value):yield a.gameTypeService.addGameType(a.form.value),a.utilService.showSuccessSnack(n.message),a.dialogRef.close(!0)}catch(n){a.utilService.showError(n)}finally{a.utilService.hideLoader()}}})()}static#e=this.\u0275fac=function(n){return new(n||t)(e.Y36(r.qu),e.Y36(y.f),e.Y36(Z.u),e.Y36(f.so),e.Y36(f.WI))};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-add-game-type"]],decls:55,vars:10,consts:[[1,"p-3"],[1,"dialog-heading"],["mat-icon-button","","mat-dialog-close",""],[3,"formGroup","ngSubmit"],[1,"row"],[1,"col-lg-12","mt-3"],["matInput","","formControlName","gameType","placeholder","Enter Game Type"],[4,"ngIf"],[1,"col-lg-6","mt-3"],["matInput","","formControlName","assetImagePath","placeholder","Enter Asset Image Path"],["placeholder","Enter Image Type","formControlName","imgType"],["value","png"],["value","svg"],["matInput","","formControlName","bgColor","placeholder","Enter Background Color"],["matInput","","formControlName","btnColor","placeholder","Enter Button Color"],["matInput","","formControlName","sequence","placeholder","Enter Sequence"],["placeholder","Status","formControlName","status"],["value","Active"],["value","Inactive"],[1,"mt-3","mb-2","d-flex","justify-content-end","w-100"],["mat-raised-button","","color","primary"]],template:function(n,o){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h4"),e._uU(3),e.qZA(),e.TgZ(4,"button",2)(5,"mat-icon"),e._uU(6,"close"),e.qZA()()(),e.TgZ(7,"form",3),e.NdJ("ngSubmit",function(){return o.onSubmit()}),e.TgZ(8,"div",4)(9,"mat-form-field",5)(10,"mat-label"),e._uU(11,"Game Type"),e.qZA(),e._UZ(12,"input",6),e.YNc(13,L,3,2,"mat-error",7),e.qZA(),e.TgZ(14,"mat-form-field",8)(15,"mat-label"),e._uU(16,"Asset Image Path"),e.qZA(),e._UZ(17,"input",9),e.YNc(18,k,3,2,"mat-error",7),e.qZA(),e.TgZ(19,"mat-form-field",8)(20,"mat-label"),e._uU(21,"Image Type"),e.qZA(),e.TgZ(22,"mat-select",10)(23,"mat-option",11),e._uU(24,"PNG"),e.qZA(),e.TgZ(25,"mat-option",12),e._uU(26,"SVG"),e.qZA()(),e.YNc(27,B,2,1,"mat-error",7),e.qZA(),e.TgZ(28,"mat-form-field",8)(29,"mat-label"),e._uU(30,"Background Color"),e.qZA(),e._UZ(31,"input",13),e.YNc(32,F,3,2,"mat-error",7),e.qZA(),e.TgZ(33,"mat-form-field",8)(34,"mat-label"),e._uU(35,"Button Color"),e.qZA(),e._UZ(36,"input",14),e.YNc(37,R,3,2,"mat-error",7),e.qZA(),e.TgZ(38,"mat-form-field",8)(39,"mat-label"),e._uU(40,"Sequence"),e.qZA(),e._UZ(41,"input",15),e.YNc(42,W,3,2,"mat-error",7),e.qZA(),e.TgZ(43,"mat-form-field",8)(44,"mat-label"),e._uU(45,"Status"),e.qZA(),e.TgZ(46,"mat-select",16)(47,"mat-option",17),e._uU(48,"Active"),e.qZA(),e.TgZ(49,"mat-option",18),e._uU(50,"Inactive"),e.qZA()(),e.YNc(51,H,2,1,"mat-error",7),e.qZA()(),e.TgZ(52,"div",19)(53,"button",20),e._uU(54),e.qZA()()()()),2&n&&(e.xp6(3),e.hij("",null!=o.data&&o.data.id?"Update":"Add"," Game Type"),e.xp6(4),e.Q6J("formGroup",o.form),e.xp6(6),e.Q6J("ngIf",o.f.gameType.invalid&&(o.f.gameType.dirty||o.f.gameType.touched||o.showValidation)),e.xp6(5),e.Q6J("ngIf",o.f.assetImagePath.invalid&&(o.f.assetImagePath.dirty||o.f.assetImagePath.touched||o.showValidation)),e.xp6(9),e.Q6J("ngIf",o.f.imgType.invalid&&(o.f.imgType.dirty||o.f.imgType.touched||o.showValidation)),e.xp6(5),e.Q6J("ngIf",o.f.bgColor.invalid&&(o.f.bgColor.dirty||o.f.bgColor.touched||o.showValidation)),e.xp6(5),e.Q6J("ngIf",o.f.btnColor.invalid&&(o.f.btnColor.dirty||o.f.btnColor.touched||o.showValidation)),e.xp6(5),e.Q6J("ngIf",o.f.sequence.invalid&&(o.f.sequence.dirty||o.f.sequence.touched||o.showValidation)),e.xp6(9),e.Q6J("ngIf",o.f.status.invalid&&(o.f.status.dirty||o.f.status.touched||o.showValidation)),e.xp6(3),e.hij("",null!=o.data&&o.data.id?"Update":"Add "," Game Type"))},dependencies:[h.O5,C.Hw,g.lW,g.RK,f.ZT,c.KE,c.hX,c.TO,A.Nt,w.gD,U.ey,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u]})}return t})();var M=m(2599);function X(t,i){1&t&&e._UZ(0,"tr",24)}function ee(t,i){1&t&&e._UZ(0,"tr",25)}function te(t,i){1&t&&(e.TgZ(0,"th",26),e._uU(1,"Game Type"),e.qZA())}function ae(t,i){if(1&t&&(e.TgZ(0,"td",27),e._uU(1),e.qZA()),2&t){const a=i.$implicit;e.xp6(1),e.hij(" ",a.gameType," ")}}function oe(t,i){1&t&&(e.TgZ(0,"th",26),e._uU(1,"Asset Image Path"),e.qZA())}function ne(t,i){if(1&t&&(e.TgZ(0,"td",27),e._uU(1),e.qZA()),2&t){const a=i.$implicit;e.xp6(1),e.hij(" ",a.assetImagePath," ")}}function ie(t,i){1&t&&(e.TgZ(0,"th",26),e._uU(1,"Image Type"),e.qZA())}function re(t,i){if(1&t&&(e.TgZ(0,"td",27),e._uU(1),e.qZA()),2&t){const a=i.$implicit;e.xp6(1),e.hij(" ",a.imgType," ")}}function me(t,i){1&t&&(e.TgZ(0,"th",26),e._uU(1,"Sequence"),e.qZA())}function se(t,i){if(1&t&&(e.TgZ(0,"td",27),e._uU(1),e.qZA()),2&t){const a=i.$implicit;e.xp6(1),e.hij(" ",a.sequence," ")}}function le(t,i){1&t&&(e.TgZ(0,"th",26),e._uU(1,"Background Color"),e.qZA())}function pe(t,i){if(1&t&&(e.TgZ(0,"td",27)(1,"div",28),e._UZ(2,"div"),e._uU(3),e.qZA()()),2&t){const a=i.$implicit,n=e.oxw();e.xp6(2),e.Akn("height:20px; width:20px; background-color:"+n.utilService.toColor(a.bgColor)),e.xp6(1),e.hij(" \xa0",a.bgColor," ")}}function de(t,i){1&t&&(e.TgZ(0,"th",26),e._uU(1,"Button Color"),e.qZA())}function ce(t,i){if(1&t&&(e.TgZ(0,"td",27)(1,"div",28),e._UZ(2,"div"),e._uU(3),e.qZA()()),2&t){const a=i.$implicit,n=e.oxw();e.xp6(2),e.Akn("height:20px; width:20px; background-color:"+n.utilService.toColor(a.btnColor)),e.xp6(1),e.hij(" \xa0",a.btnColor," ")}}function ue(t,i){1&t&&(e.TgZ(0,"th",26),e._uU(1,"Status"),e.qZA())}function fe(t,i){if(1&t){const a=e.EpF();e.TgZ(0,"td",29),e.NdJ("click",function(o){return o.stopPropagation()}),e.TgZ(1,"mat-slide-toggle",30),e.NdJ("change",function(){const s=e.CHM(a).$implicit,p=e.oxw();return e.KtG(p.onChangeStatus(s))}),e.qZA()()}if(2&t){const a=i.$implicit;e.xp6(1),e.Q6J("checked","Active"==a.status)}}function ge(t,i){1&t&&e._UZ(0,"th",26)}function Te(t,i){if(1&t){const a=e.EpF();e.TgZ(0,"td",27)(1,"button",31),e.NdJ("click",function(){const s=e.CHM(a).$implicit,p=e.oxw();return e.KtG(p.addOrEdit(s))}),e.TgZ(2,"mat-icon"),e._uU(3,"edit"),e.qZA()(),e.TgZ(4,"button",31),e.NdJ("click",function(){const s=e.CHM(a).$implicit,p=e.oxw();return e.KtG(p.deleteGameType(s))}),e.TgZ(5,"mat-icon"),e._uU(6,"delete"),e.qZA()()()}}const he=[{path:"",component:(()=>{class t{constructor(a,n,o,s){this.dialog=a,this.gameTypeService=n,this.fb=o,this.utilService=s,this.displayedColumns=["gameType","assetImagePath","imgType","sequence","bgColor","btnColor","status","action"],this.dataSource=new l.by,this.onDestroy=new I.x,this.pagination={pageSizeOptions:[10,25,50,100],pageSize:10,pageIndex:0}}ngOnDestroy(){this.onDestroy.next(),this.onDestroy.complete()}ngOnInit(){this.filterForm=this.fb.group({keyword:new r.NI(null)}),this.filterForm.controls.keyword.valueChanges.pipe((0,q.R)(this.onDestroy),(0,S.b)(500),(0,N.x)()).subscribe(a=>{this.paginator.pageIndex=0,this.getGameTypeList()}),this.getGameTypeList()}getGameTypeList(a=!0){var n=this;return(0,u.Z)(function*(){try{a&&n.utilService.showLoader();let o=yield n.gameTypeService.getGameTypeList(n.filterParams());n.dataSource.data=o.payload.data,setTimeout(()=>{n.paginator.pageIndex=n.pagination.pageIndex,n.paginator.length=o.payload.totalItems})}catch(o){n.utilService.showError(o)}finally{a&&n.utilService.hideLoader()}})()}filterParams(){let a=new x.LE;return a=a.append("skip",this.pagination.pageIndex*this.pagination.pageSize),a=a.append("limit",this.pagination.pageSize),this.filterForm.value.keyword&&(a=a.append("keyword",this.filterForm.value.keyword)),a}pageChanged(a){this.pagination.pageSize=a.pageSize,this.pagination.pageIndex=a.pageIndex,this.getGameTypeList()}addOrEdit(a){this.dialog.open(K,{width:"50%",autoFocus:!1,disableClose:!1,data:a}).afterClosed().subscribe(o=>{o&&this.getGameTypeList()})}onChangeStatus(a){var n=this;return(0,u.Z)(function*(){try{n.utilService.showLoader(),a.status="Active"==a.status?"Inactive":"Active";let o=yield n.gameTypeService.updateGameType(a);n.utilService.showSuccessSnack(o.message),yield n.getGameTypeList(!1)}catch(o){n.utilService.showError(o)}finally{n.utilService.hideLoader()}})()}deleteGameType(a){var n=this;return(0,u.Z)(function*(){if(!0===confirm("Are you sure? Do you want to delete game?"))try{n.utilService.showLoader();let o=yield n.gameTypeService.deleteGameTypeById(a.id);n.utilService.showSuccessSnack(o.message),yield n.getGameTypeList(!1)}catch(o){n.utilService.showError(o)}finally{n.utilService.hideLoader()}})()}static#e=this.\u0275fac=function(n){return new(n||t)(e.Y36(f.uw),e.Y36(Z.u),e.Y36(r.qu),e.Y36(y.f))};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-game-type-list"]],viewQuery:function(n,o){if(1&n&&e.Gf(_.NW,5),2&n){let s;e.iGM(s=e.CRH())&&(o.paginator=s.first)}},decls:43,vars:7,consts:[[1,"heading"],[1,"d-flex"],["mat-button","",3,"click"],[3,"formGroup"],[1,"row"],[1,"col-lg-4"],["matInput","","placeholder","Search game type...","formControlName","keyword"],["matPrefix",""],["mat-table","",3,"dataSource"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["matColumnDef","gameType"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","assetImagePath"],["matColumnDef","imgType"],["matColumnDef","sequence"],["matColumnDef","bgColor"],["matColumnDef","btnColor"],["matColumnDef","status"],["mat-cell","",3,"click",4,"matCellDef"],["matColumnDef","action"],["showFirstLastButtons","",1,"mt-3",3,"pageSize","pageIndex","pageSizeOptions","page"],["paginator",""],["mat-header-row",""],["mat-row",""],["mat-header-cell",""],["mat-cell",""],[2,"display","flex"],["mat-cell","",3,"click"],[3,"checked","change"],["mat-icon-button","",3,"click"]],template:function(n,o){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h4"),e._uU(3,"Game Types"),e.qZA()(),e.TgZ(4,"button",2),e.NdJ("click",function(){return o.addOrEdit(null)}),e.TgZ(5,"mat-icon"),e._uU(6,"add"),e.qZA(),e._uU(7," Add Game Type"),e.qZA()(),e.TgZ(8,"form",3)(9,"div",4)(10,"mat-form-field",5),e._UZ(11,"input",6),e.TgZ(12,"mat-icon",7),e._uU(13,"search"),e.qZA()()()(),e.TgZ(14,"table",8),e.YNc(15,X,1,0,"tr",9),e.YNc(16,ee,1,0,"tr",10),e.ynx(17,11),e.YNc(18,te,2,0,"th",12),e.YNc(19,ae,2,1,"td",13),e.BQk(),e.ynx(20,14),e.YNc(21,oe,2,0,"th",12),e.YNc(22,ne,2,1,"td",13),e.BQk(),e.ynx(23,15),e.YNc(24,ie,2,0,"th",12),e.YNc(25,re,2,1,"td",13),e.BQk(),e.ynx(26,16),e.YNc(27,me,2,0,"th",12),e.YNc(28,se,2,1,"td",13),e.BQk(),e.ynx(29,17),e.YNc(30,le,2,0,"th",12),e.YNc(31,pe,4,3,"td",13),e.BQk(),e.ynx(32,18),e.YNc(33,de,2,0,"th",12),e.YNc(34,ce,4,3,"td",13),e.BQk(),e.ynx(35,19),e.YNc(36,ue,2,0,"th",12),e.YNc(37,fe,2,1,"td",20),e.BQk(),e.ynx(38,21),e.YNc(39,ge,1,0,"th",12),e.YNc(40,Te,7,0,"td",13),e.BQk(),e.qZA(),e.TgZ(41,"mat-paginator",22,23),e.NdJ("page",function(p){return o.pageChanged(p)}),e.qZA()),2&n&&(e.xp6(8),e.Q6J("formGroup",o.filterForm),e.xp6(6),e.Q6J("dataSource",o.dataSource),e.xp6(1),e.Q6J("matHeaderRowDef",o.displayedColumns),e.xp6(1),e.Q6J("matRowDefColumns",o.displayedColumns),e.xp6(25),e.Q6J("pageSize",o.pagination.pageSize)("pageIndex",o.pagination.pageIndex)("pageSizeOptions",o.pagination.pageSizeOptions))},dependencies:[C.Hw,g.lW,g.RK,_.NW,l.BZ,l.fO,l.as,l.w1,l.Dz,l.nj,l.ge,l.ev,l.XQ,l.Gk,c.KE,c.qo,A.Nt,M.Rr,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u]})}return t})()}];let _e=(()=>{class t{static#e=this.\u0275fac=function(n){return new(n||t)};static#t=this.\u0275mod=e.oAB({type:t});static#a=this.\u0275inj=e.cJS({imports:[h.ez,G.q,r.UX,v.Bz.forChild(he)]})}return t})()}}]);