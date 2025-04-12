var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 0.700000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Thika_river_catchment1_1 = new ol.format.GeoJSON();
var features_Thika_river_catchment1_1 = format_Thika_river_catchment1_1.readFeatures(json_Thika_river_catchment1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Thika_river_catchment1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Thika_river_catchment1_1.addFeatures(features_Thika_river_catchment1_1);
var lyr_Thika_river_catchment1_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Thika_river_catchment1_1, 
                style: style_Thika_river_catchment1_1,
                popuplayertitle: 'Thika_river_catchment1',
                interactive: true,
    title: 'Thika_river_catchment1<br />\
    <img src="styles/legend/Thika_river_catchment1_1_0.png" /> Catchment10<br />\
    <img src="styles/legend/Thika_river_catchment1_1_1.png" /> Catchment12<br />\
    <img src="styles/legend/Thika_river_catchment1_1_2.png" /> Catchment15<br />\
    <img src="styles/legend/Thika_river_catchment1_1_3.png" /> Catchment17<br />\
    <img src="styles/legend/Thika_river_catchment1_1_4.png" /> Catchment18<br />\
    <img src="styles/legend/Thika_river_catchment1_1_5.png" /> Catchment7<br />\
    <img src="styles/legend/Thika_river_catchment1_1_6.png" /> Catchment9<br />\
    <img src="styles/legend/Thika_river_catchment1_1_7.png" /> <br />' });
var format_Thika_river_catchment1_Channels_2 = new ol.format.GeoJSON();
var features_Thika_river_catchment1_Channels_2 = format_Thika_river_catchment1_Channels_2.readFeatures(json_Thika_river_catchment1_Channels_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Thika_river_catchment1_Channels_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Thika_river_catchment1_Channels_2.addFeatures(features_Thika_river_catchment1_Channels_2);
var lyr_Thika_river_catchment1_Channels_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Thika_river_catchment1_Channels_2, 
                style: style_Thika_river_catchment1_Channels_2,
                popuplayertitle: 'Thika_river_catchment1_Channels',
                interactive: true,
                title: '<img src="styles/legend/Thika_river_catchment1_Channels_2.png" /> Thika_river_catchment1_Channels'
            });
var format_Thika_river_catchment1_towns_3 = new ol.format.GeoJSON();
var features_Thika_river_catchment1_towns_3 = format_Thika_river_catchment1_towns_3.readFeatures(json_Thika_river_catchment1_towns_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Thika_river_catchment1_towns_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Thika_river_catchment1_towns_3.addFeatures(features_Thika_river_catchment1_towns_3);
var lyr_Thika_river_catchment1_towns_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Thika_river_catchment1_towns_3, 
                style: style_Thika_river_catchment1_towns_3,
                popuplayertitle: 'Thika_river_catchment1_towns',
                interactive: true,
                title: '<img src="styles/legend/Thika_river_catchment1_towns_3.png" /> Thika_river_catchment1_towns'
            });
var format_Reprojected_4 = new ol.format.GeoJSON();
var features_Reprojected_4 = format_Reprojected_4.readFeatures(json_Reprojected_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Reprojected_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Reprojected_4.addFeatures(features_Reprojected_4);
var lyr_Reprojected_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Reprojected_4, 
                style: style_Reprojected_4,
                popuplayertitle: 'Reprojected',
                interactive: true,
                title: '<img src="styles/legend/Reprojected_4.png" /> Reprojected'
            });
var format_Masinga_reservoir_5 = new ol.format.GeoJSON();
var features_Masinga_reservoir_5 = format_Masinga_reservoir_5.readFeatures(json_Masinga_reservoir_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Masinga_reservoir_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Masinga_reservoir_5.addFeatures(features_Masinga_reservoir_5);
var lyr_Masinga_reservoir_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Masinga_reservoir_5, 
                style: style_Masinga_reservoir_5,
                popuplayertitle: 'Masinga_reservoir',
                interactive: true,
                title: '<img src="styles/legend/Masinga_reservoir_5.png" /> Masinga_reservoir'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Thika_river_catchment1_1.setVisible(true);lyr_Thika_river_catchment1_Channels_2.setVisible(true);lyr_Thika_river_catchment1_towns_3.setVisible(true);lyr_Reprojected_4.setVisible(true);lyr_Masinga_reservoir_5.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Thika_river_catchment1_1,lyr_Thika_river_catchment1_Channels_2,lyr_Thika_river_catchment1_towns_3,lyr_Reprojected_4,lyr_Masinga_reservoir_5];
lyr_Thika_river_catchment1_1.set('fieldAliases', {'Source': 'Source', 'DN': 'DN', });
lyr_Thika_river_catchment1_Channels_2.set('fieldAliases', {'SEGMENT_ID': 'SEGMENT_ID', 'NODE_A': 'NODE_A', 'NODE_B': 'NODE_B', 'BASIN': 'BASIN', 'ORDER': 'ORDER', 'ORDER_CELL': 'ORDER_CELL', 'LENGTH': 'LENGTH', });
lyr_Thika_river_catchment1_towns_3.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'TOWN_NAME': 'TOWN_NAME', 'TOWN_ID': 'TOWN_ID', 'TOWN_TYPE': 'TOWN_TYPE', });
lyr_Reprojected_4.set('fieldAliases', {'Code': 'Code', 'Lat': 'Lat', 'Long': 'Long', 'Desc_': 'Desc_', });
lyr_Masinga_reservoir_5.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_Thika_river_catchment1_1.set('fieldImages', {'Source': 'TextEdit', 'DN': 'TextEdit', });
lyr_Thika_river_catchment1_Channels_2.set('fieldImages', {'SEGMENT_ID': 'TextEdit', 'NODE_A': 'TextEdit', 'NODE_B': 'TextEdit', 'BASIN': 'TextEdit', 'ORDER': 'TextEdit', 'ORDER_CELL': 'TextEdit', 'LENGTH': 'TextEdit', });
lyr_Thika_river_catchment1_towns_3.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'TOWN_NAME': 'TextEdit', 'TOWN_ID': 'TextEdit', 'TOWN_TYPE': 'TextEdit', });
lyr_Reprojected_4.set('fieldImages', {'Code': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', 'Desc_': 'TextEdit', });
lyr_Masinga_reservoir_5.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', });
lyr_Thika_river_catchment1_1.set('fieldLabels', {'Source': 'no label', 'DN': 'no label', });
lyr_Thika_river_catchment1_Channels_2.set('fieldLabels', {'SEGMENT_ID': 'no label', 'NODE_A': 'no label', 'NODE_B': 'no label', 'BASIN': 'no label', 'ORDER': 'no label', 'ORDER_CELL': 'no label', 'LENGTH': 'no label', });
lyr_Thika_river_catchment1_towns_3.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'TOWN_NAME': 'no label', 'TOWN_ID': 'no label', 'TOWN_TYPE': 'no label', });
lyr_Reprojected_4.set('fieldLabels', {'Code': 'no label', 'Lat': 'no label', 'Long': 'no label', 'Desc_': 'no label', });
lyr_Masinga_reservoir_5.set('fieldLabels', {'id': 'no label', 'Name': 'inline label - visible with data', });
lyr_Masinga_reservoir_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});