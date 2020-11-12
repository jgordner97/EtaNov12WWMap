var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_FloodWarningsandWatchesNov12_1 = new ol.format.GeoJSON();
var features_FloodWarningsandWatchesNov12_1 = format_FloodWarningsandWatchesNov12_1.readFeatures(json_FloodWarningsandWatchesNov12_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FloodWarningsandWatchesNov12_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FloodWarningsandWatchesNov12_1.addFeatures(features_FloodWarningsandWatchesNov12_1);
var lyr_FloodWarningsandWatchesNov12_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FloodWarningsandWatchesNov12_1, 
                style: style_FloodWarningsandWatchesNov12_1,
                interactive: false,
    title: 'Flood Warnings and Watches Nov. 12<br />\
    <img src="styles/legend/FloodWarningsandWatchesNov12_1_0.png" /> Flood<br />\
    <img src="styles/legend/FloodWarningsandWatchesNov12_1_1.png" /> Flash Flood<br />'
        });
var format_SuperfundNationalPrioritiesListNPLSites_2 = new ol.format.GeoJSON();
var features_SuperfundNationalPrioritiesListNPLSites_2 = format_SuperfundNationalPrioritiesListNPLSites_2.readFeatures(json_SuperfundNationalPrioritiesListNPLSites_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SuperfundNationalPrioritiesListNPLSites_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SuperfundNationalPrioritiesListNPLSites_2.addFeatures(features_SuperfundNationalPrioritiesListNPLSites_2);
var lyr_SuperfundNationalPrioritiesListNPLSites_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SuperfundNationalPrioritiesListNPLSites_2, 
                style: style_SuperfundNationalPrioritiesListNPLSites_2,
                interactive: true,
                title: '<img src="styles/legend/SuperfundNationalPrioritiesListNPLSites_2.png" /> Superfund National Priorities List (NPL) Sites'
            });
var format_NPLSitesinAreaswithFloodWatchesorWarnings_3 = new ol.format.GeoJSON();
var features_NPLSitesinAreaswithFloodWatchesorWarnings_3 = format_NPLSitesinAreaswithFloodWatchesorWarnings_3.readFeatures(json_NPLSitesinAreaswithFloodWatchesorWarnings_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NPLSitesinAreaswithFloodWatchesorWarnings_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NPLSitesinAreaswithFloodWatchesorWarnings_3.addFeatures(features_NPLSitesinAreaswithFloodWatchesorWarnings_3);
var lyr_NPLSitesinAreaswithFloodWatchesorWarnings_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NPLSitesinAreaswithFloodWatchesorWarnings_3, 
                style: style_NPLSitesinAreaswithFloodWatchesorWarnings_3,
                interactive: true,
                title: '<img src="styles/legend/NPLSitesinAreaswithFloodWatchesorWarnings_3.png" /> NPL Sites in Areas with Flood Watches or Warnings'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_FloodWarningsandWatchesNov12_1.setVisible(true);lyr_SuperfundNationalPrioritiesListNPLSites_2.setVisible(true);lyr_NPLSitesinAreaswithFloodWatchesorWarnings_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_FloodWarningsandWatchesNov12_1,lyr_SuperfundNationalPrioritiesListNPLSites_2,lyr_NPLSitesinAreaswithFloodWatchesorWarnings_3];
lyr_FloodWarningsandWatchesNov12_1.set('fieldAliases', {'EXPIRATION': 'EXPIRATION', 'SIG': 'SIG', 'WFO': 'WFO', 'MSG_TYPE': 'MSG_TYPE', 'PHENOM': 'PHENOM', 'URL': 'URL', 'PROD_TYPE': 'PROD_TYPE', 'ISSUANCE': 'ISSUANCE', 'WARNID': 'WARNID', 'EVENT': 'EVENT', });
lyr_SuperfundNationalPrioritiesListNPLSites_2.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'Site_Name': 'Site Name', 'Site_Score': 'Site Score', 'Site_EPA_I': 'Site_EPA_I', 'SEMS_ID': 'SEMS ID', 'SITS_ID': 'SITS_ID', 'Region_ID': 'Region_ID', 'State': 'State', 'City': 'City', 'County': 'County', 'Status': 'Status', 'Longitude': 'Longitude', 'Latitude': 'Latitude', 'Proposed_D': 'Proposed_D', 'Listing_Da': 'Listing_Da', 'Constructi': 'Constructi', 'Construc_1': 'Construc_1', 'NOID_Date': 'NOID_Date', 'Deletion_D': 'Deletion_D', 'Site_Listi': 'Site_Listi', 'Site_Progr': 'Site_Progr', 'Notice_of_': 'Notice_of_', 'Proposed_F': 'Proposed_F', 'Deletion_F': 'Deletion_F', 'Final_FR_N': 'Final_FR_N', 'NOID_FR_No': 'NOID_FR_No', 'Restoratio': 'Restoratio', 'Site_has_h': 'Site_has_h', 'CreationDa': 'CreationDa', 'Creator': 'Creator', 'EditDate': 'EditDate', 'Editor': 'Editor', });
lyr_NPLSitesinAreaswithFloodWatchesorWarnings_3.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'Site_Name': 'Site Name', 'Site_Score': 'Site Score', 'Site_EPA_I': 'Site_EPA_I', 'SEMS_ID': 'SEMS ID', 'SITS_ID': 'SITS_ID', 'Region_ID': 'Region_ID', 'State': 'State', 'City': 'City', 'County': 'County', 'Status': 'Status', 'Longitude': 'Longitude', 'Latitude': 'Latitude', 'Proposed_D': 'Proposed_D', 'Listing_Da': 'Listing_Da', 'Constructi': 'Constructi', 'Construc_1': 'Construc_1', 'NOID_Date': 'NOID_Date', 'Deletion_D': 'Deletion_D', 'Site_Listi': 'Site_Listi', 'Site_Progr': 'Site_Progr', 'Notice_of_': 'Notice_of_', 'Proposed_F': 'Proposed_F', 'Deletion_F': 'Deletion_F', 'Final_FR_N': 'Final_FR_N', 'NOID_FR_No': 'NOID_FR_No', 'Restoratio': 'Restoratio', 'Site_has_h': 'Site_has_h', 'CreationDa': 'CreationDa', 'Creator': 'Creator', 'EditDate': 'EditDate', 'Editor': 'Editor', 'EXPIRATION': 'EXPIRATION', 'SIG': 'SIG', 'WFO': 'WFO', 'MSG_TYPE': 'MSG_TYPE', 'PHENOM': 'Phenomenon', 'URL': 'URL', 'PROD_TYPE': 'PROD_TYPE', 'ISSUANCE': 'ISSUANCE', 'WARNID': 'WARNID', 'EVENT': 'EVENT', });
lyr_FloodWarningsandWatchesNov12_1.set('fieldImages', {'EXPIRATION': 'TextEdit', 'SIG': 'TextEdit', 'WFO': 'TextEdit', 'MSG_TYPE': 'TextEdit', 'PHENOM': 'TextEdit', 'URL': 'TextEdit', 'PROD_TYPE': 'TextEdit', 'ISSUANCE': 'TextEdit', 'WARNID': 'TextEdit', 'EVENT': 'TextEdit', });
lyr_SuperfundNationalPrioritiesListNPLSites_2.set('fieldImages', {'OBJECTID_1': 'Hidden', 'Site_Name': 'TextEdit', 'Site_Score': 'TextEdit', 'Site_EPA_I': 'Hidden', 'SEMS_ID': 'TextEdit', 'SITS_ID': 'Hidden', 'Region_ID': 'Hidden', 'State': 'TextEdit', 'City': 'TextEdit', 'County': 'TextEdit', 'Status': 'TextEdit', 'Longitude': 'Hidden', 'Latitude': 'Hidden', 'Proposed_D': 'Hidden', 'Listing_Da': 'Hidden', 'Constructi': 'Hidden', 'Construc_1': 'Hidden', 'NOID_Date': 'Hidden', 'Deletion_D': 'Hidden', 'Site_Listi': 'Hidden', 'Site_Progr': 'Hidden', 'Notice_of_': 'Hidden', 'Proposed_F': 'Hidden', 'Deletion_F': 'Hidden', 'Final_FR_N': 'Hidden', 'NOID_FR_No': 'Hidden', 'Restoratio': 'Hidden', 'Site_has_h': 'Hidden', 'CreationDa': 'Hidden', 'Creator': 'Hidden', 'EditDate': 'Hidden', 'Editor': 'Hidden', });
lyr_NPLSitesinAreaswithFloodWatchesorWarnings_3.set('fieldImages', {'OBJECTID_1': 'Hidden', 'Site_Name': 'TextEdit', 'Site_Score': 'TextEdit', 'Site_EPA_I': 'Hidden', 'SEMS_ID': 'TextEdit', 'SITS_ID': 'Hidden', 'Region_ID': 'Hidden', 'State': 'TextEdit', 'City': 'TextEdit', 'County': 'TextEdit', 'Status': 'TextEdit', 'Longitude': 'Hidden', 'Latitude': 'Hidden', 'Proposed_D': 'Hidden', 'Listing_Da': 'Hidden', 'Constructi': 'Hidden', 'Construc_1': 'Hidden', 'NOID_Date': 'Hidden', 'Deletion_D': 'Hidden', 'Site_Listi': 'Hidden', 'Site_Progr': 'Hidden', 'Notice_of_': 'Hidden', 'Proposed_F': 'Hidden', 'Deletion_F': 'Hidden', 'Final_FR_N': 'Hidden', 'NOID_FR_No': 'Hidden', 'Restoratio': 'Hidden', 'Site_has_h': 'Hidden', 'CreationDa': 'Hidden', 'Creator': 'Hidden', 'EditDate': 'Hidden', 'Editor': 'Hidden', 'EXPIRATION': 'Hidden', 'SIG': 'Hidden', 'WFO': 'Hidden', 'MSG_TYPE': 'Hidden', 'PHENOM': 'Hidden', 'URL': 'Hidden', 'PROD_TYPE': 'Hidden', 'ISSUANCE': 'Hidden', 'WARNID': 'Hidden', 'EVENT': 'Hidden', });
lyr_FloodWarningsandWatchesNov12_1.set('fieldLabels', {'EXPIRATION': 'no label', 'SIG': 'no label', 'WFO': 'no label', 'MSG_TYPE': 'no label', 'PHENOM': 'no label', 'URL': 'no label', 'PROD_TYPE': 'no label', 'ISSUANCE': 'no label', 'WARNID': 'no label', 'EVENT': 'no label', });
lyr_SuperfundNationalPrioritiesListNPLSites_2.set('fieldLabels', {'OBJECTID_1': 'no label', 'Site_Name': 'header label', 'Site_Score': 'inline label', 'Site_EPA_I': 'no label', 'SEMS_ID': 'inline label', 'SITS_ID': 'no label', 'Region_ID': 'no label', 'State': 'inline label', 'City': 'inline label', 'County': 'inline label', 'Status': 'inline label', 'Longitude': 'no label', 'Latitude': 'no label', 'Proposed_D': 'no label', 'Listing_Da': 'no label', 'Constructi': 'no label', 'Construc_1': 'no label', 'NOID_Date': 'no label', 'Deletion_D': 'no label', 'Site_Listi': 'no label', 'Site_Progr': 'no label', 'Notice_of_': 'no label', 'Proposed_F': 'no label', 'Deletion_F': 'no label', 'Final_FR_N': 'no label', 'NOID_FR_No': 'no label', 'Restoratio': 'no label', 'Site_has_h': 'no label', 'CreationDa': 'no label', 'Creator': 'no label', 'EditDate': 'no label', 'Editor': 'no label', });
lyr_NPLSitesinAreaswithFloodWatchesorWarnings_3.set('fieldLabels', {'OBJECTID_1': 'no label', 'Site_Name': 'header label', 'Site_Score': 'inline label', 'Site_EPA_I': 'no label', 'SEMS_ID': 'inline label', 'SITS_ID': 'no label', 'Region_ID': 'inline label', 'State': 'inline label', 'City': 'inline label', 'County': 'inline label', 'Status': 'no label', 'Longitude': 'no label', 'Latitude': 'no label', 'Proposed_D': 'no label', 'Listing_Da': 'no label', 'Constructi': 'no label', 'Construc_1': 'no label', 'NOID_Date': 'no label', 'Deletion_D': 'no label', 'Site_Listi': 'no label', 'Site_Progr': 'no label', 'Notice_of_': 'no label', 'Proposed_F': 'no label', 'Deletion_F': 'no label', 'Final_FR_N': 'no label', 'NOID_FR_No': 'no label', 'Restoratio': 'no label', 'Site_has_h': 'no label', 'CreationDa': 'no label', 'Creator': 'no label', 'EditDate': 'no label', 'Editor': 'no label', 'EXPIRATION': 'no label', 'SIG': 'no label', 'WFO': 'no label', 'MSG_TYPE': 'no label', 'PHENOM': 'no label', 'URL': 'no label', 'PROD_TYPE': 'no label', 'ISSUANCE': 'no label', 'WARNID': 'no label', 'EVENT': 'no label', });
lyr_NPLSitesinAreaswithFloodWatchesorWarnings_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});