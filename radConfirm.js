            		
            function mostrarMensaje(){	
              		Telerik.Web.UI.RadWindowUtils.Localization =
  					   {
  	   					"OK": "Si",
  	   					"Cancel": "No"
  					   };
  
              		var res = radconfirm('Tiene imágenes seleccionadas sin guardar, ¿desea guardarlas?', cerrarConImagenesCallBack, 300, 150, null);
  
              		Telerik.Web.UI.RadWindowUtils.Localization =
    						{
    							"OK": "Aceptar",
    							"Cancel": "Cancelar"
    						};
						}
