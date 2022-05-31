sap.ui.define([
	"sap/ui/core/mvc/Controller",
			"sap/ui/core/routing/History",
			"sap/ui/model/json/JSONModel"
], function(Controller,History, JSONModel) {
	"use strict";

	return Controller.extend("test.routing-sample.controller.RiskAssess", {

		onInit: function() {
				
					
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
					oRouter.getRoute("TargetViewResParameter").attachPatternMatched(this._onRouteMatched, this);
					var ooModel = new JSONModel();
					var noOfListItems;
					var that = this;
					var surl = "/sap/opu/odata/sap/ZBK_EHSM_ODATA_SRV/";
					var oModel = new sap.ui.model.odata.ODataModel(surl, true);
					var uri = "?$filter=Mandt eq '100' &$format=json";
					window.console.log(uri);
					oModel.read("/Zod_EHSM_RISK_BKSet" + uri,{
						context: null,
						urlParameter: null,
						async: false,
						success: function(oData, oResponse){
							window.console.log(oData);
							ooModel.setData(oData);
						}
					});
					this.getView().setModel(ooModel,"notificationList");
				
					
					
				},
			
 			
 			
						_onRouteMatched: function(oEvent) {

								alert(oEvent.getParameter("arguments").parameter.split(';'));

							},
							onNavBack: function(oEvent) {
								var oHistory = History.getInstance();
								var sPreviousHash = oHistory.getPreviousHash();

								if (sPreviousHash !== undefined) {
									window.history.go(-1);
								} else {
									var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
									oRouter.navTo("TargetViewFrom", true);
								}
							}

	});

});