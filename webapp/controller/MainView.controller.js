sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], (Controller,MessageToast) => {
    "use strict";

    return Controller.extend("exer1agbing.controller.MainView", {
        
        onInit() {
        },
        onAddItem: function (){
               // this.fnDisplayMsg("Add button pressed");
               var oTextBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
                var sMsg = oTextBundle.getText("addButtonMsg");
                this.fnDisplayMsg(sMsg);

            },
        onChangeMOP: function (oEvent) {
                var sSelectedKey = oEvent.getParameter("selectedItem").getProperty("key");
                var oMobileLabel = this.getView().byId("idLblPhone");
                var oMobileInput = this.getView().byId("idInputPhone");
                var oCCLabel = this.getView().byId("idLblCC");
                var oCCInput = this.getView().byId("idInputCC");
                var oSelect = oEvent.getSource(); 
                var sSelectedText =   oSelect.getSelectedItem().getText();

                // set to default value
                    oMobileLabel.setVisible(false);
                    oMobileInput.setVisible(false);
                     oCCLabel.setVisible(false);
                    oCCInput.setVisible(false);

                if (sSelectedKey === "GCASH"){
                    // show the mobile field
                    oMobileLabel.setVisible(true);
                    oMobileInput.setVisible(true);
                }
                else if(sSelectedKey === "CC"){
                    oCCLabel.setVisible(true);
                    oCCInput.setVisible(true);
                } else {
                    oMobileLabel.setVisible(false);
                    oMobileInput.setVisible(false);
                     oCCLabel.setVisible(false);
                    oCCInput.setVisible(false);
                }
              
                this.fnDisplayMsg(sSelectedText);
            },
        onPressCheckout: function (){
                var oInputFNameValue = this.getView().byId("idInptFName").getValue();

                // Check if first name is blank
                if (oInputFNameValue === ""){
                    sap.m.MessageToast.show("Required Field is blank"); 
                }
            },
        fnDisplayMsg: function (sMsg){
            MessageToast.show(sMsg);
        }
    });
});