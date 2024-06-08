"use strict";(self.webpackChunkmatch_it_web=self.webpackChunkmatch_it_web||[]).push([[823],{2823:(Y,a,o)=>{o.r(a),o.d(a,{LoginModule:()=>F});var m=o(6814),i=o(6223),c=o(8109),d=o(8562),g=o(5861),f=o(9825),t=o(5879),h=o(8282),p=o(9140),y=o(2695),S=o(5195),U=o(2296),l=o(9157),Z=o(2032);function L(e,u){1&e&&(t.TgZ(0,"div"),t._uU(1,"Server url is required"),t.qZA())}function C(e,u){1&e&&(t.TgZ(0,"div"),t._uU(1,"White space not allowed"),t.qZA())}function T(e,u){if(1&e&&(t.TgZ(0,"mat-error"),t.YNc(1,L,2,0,"div",8),t.YNc(2,C,2,0,"div",8),t.qZA()),2&e){const r=t.oxw();t.xp6(1),t.Q6J("ngIf",null==r.form.srvUrl.errors?null:r.form.srvUrl.errors.required),t.xp6(1),t.Q6J("ngIf",null==r.form.srvUrl.errors?null:r.form.srvUrl.errors.whiteSpace)}}const x=[{path:"",component:(()=>{class e{constructor(r,n,s,v,J){this.formBuilder=r,this.utilService=n,this.storageService=s,this.systemService=v,this.router=J,this.showValidation=!1}ngOnInit(){this.initializeForm()}initializeForm(){this.loginForm=this.formBuilder.group({srvUrl:new i.NI(null,[i.kI.required,f._.containSpace])})}get form(){return this.loginForm.controls}onSubmitLoginDetails(){var r=this;return(0,g.Z)(function*(){if(r.loginForm.invalid)r.showValidation=!0;else{r.showValidation=!1;try{r.utilService.showLoader();let n=r.loginForm.controls.srvUrl.value.trim();yield r.systemService.validateRequest(n),r.storageService.setSrvUrl(n),r.utilService.srvUrlObx.next(n),r.router.navigate(["game-type"])}catch(n){console.error(n),r.utilService.showError("Please enter correct server url for authentication!")}finally{r.utilService.hideLoader()}}})()}static#t=this.\u0275fac=function(n){return new(n||e)(t.Y36(i.qu),t.Y36(h.f),t.Y36(p.V),t.Y36(y.o),t.Y36(c.F0))};static#r=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-login"]],decls:15,vars:2,consts:[[1,"login-container","p-3"],[1,"p-3"],[1,"center"],["src","assets/images/match_it_logo.png"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"col-lg-12","mt-3"],["matInput","","formControlName","srvUrl","placeholder","Enter Server URL"],[4,"ngIf"],[1,"mt-3","mb-2","d-flex","justify-content-end","w-100"],["mat-raised-button","","color","primary","type","submit"]],template:function(n,s){1&n&&(t.TgZ(0,"div",0)(1,"mat-card")(2,"div",1)(3,"div",2),t._UZ(4,"img",3),t.qZA(),t.TgZ(5,"form",4),t.NdJ("ngSubmit",function(){return s.onSubmitLoginDetails()}),t.TgZ(6,"div",5)(7,"mat-form-field",6)(8,"mat-label"),t._uU(9,"Enter Server URL"),t.qZA(),t._UZ(10,"input",7),t.YNc(11,T,3,2,"mat-error",8),t.qZA(),t.TgZ(12,"div",9)(13,"button",10),t._uU(14," Validate "),t.qZA()()()()()()()),2&n&&(t.xp6(5),t.Q6J("formGroup",s.loginForm),t.xp6(6),t.Q6J("ngIf",s.form.srvUrl.invalid&&(s.form.srvUrl.dirty||s.form.srvUrl.touched||s.showValidation)))},dependencies:[m.O5,S.a8,U.lW,l.KE,l.hX,l.TO,Z.Nt,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u],styles:[".login-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:100vh}mat-card[_ngcontent-%COMP%]{width:400px}img[_ngcontent-%COMP%]{width:350px;padding:28px}.center[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}"]})}return e})()}];let F=(()=>{class e{static#t=this.\u0275fac=function(n){return new(n||e)};static#r=this.\u0275mod=t.oAB({type:e});static#o=this.\u0275inj=t.cJS({imports:[m.ez,d.q,i.UX,c.Bz.forChild(x)]})}return e})()}}]);