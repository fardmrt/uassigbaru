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
var format_Transportasi_Kecamatan_Kaligesing_LN_1 = new ol.format.GeoJSON();
var features_Transportasi_Kecamatan_Kaligesing_LN_1 = format_Transportasi_Kecamatan_Kaligesing_LN_1.readFeatures(json_Transportasi_Kecamatan_Kaligesing_LN_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Transportasi_Kecamatan_Kaligesing_LN_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Transportasi_Kecamatan_Kaligesing_LN_1.addFeatures(features_Transportasi_Kecamatan_Kaligesing_LN_1);
var lyr_Transportasi_Kecamatan_Kaligesing_LN_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Transportasi_Kecamatan_Kaligesing_LN_1, 
                style: style_Transportasi_Kecamatan_Kaligesing_LN_1,
                interactive: true,
                title: '<img src="styles/legend/Transportasi_Kecamatan_Kaligesing_LN_1.png" /> Transportasi_Kecamatan_Kaligesing_LN'
            });
var format_Transportasi_Kecamatan_Kaligesing_LN_2 = new ol.format.GeoJSON();
var features_Transportasi_Kecamatan_Kaligesing_LN_2 = format_Transportasi_Kecamatan_Kaligesing_LN_2.readFeatures(json_Transportasi_Kecamatan_Kaligesing_LN_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Transportasi_Kecamatan_Kaligesing_LN_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Transportasi_Kecamatan_Kaligesing_LN_2.addFeatures(features_Transportasi_Kecamatan_Kaligesing_LN_2);
var lyr_Transportasi_Kecamatan_Kaligesing_LN_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Transportasi_Kecamatan_Kaligesing_LN_2, 
                style: style_Transportasi_Kecamatan_Kaligesing_LN_2,
                interactive: true,
                title: '<img src="styles/legend/Transportasi_Kecamatan_Kaligesing_LN_2.png" /> Transportasi_Kecamatan_Kaligesing_LN'
            });
var format_railway_3 = new ol.format.GeoJSON();
var features_railway_3 = format_railway_3.readFeatures(json_railway_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_railway_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_railway_3.addFeatures(features_railway_3);
var lyr_railway_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_railway_3, 
                style: style_railway_3,
                interactive: true,
                title: '<img src="styles/legend/railway_3.png" /> railway'
            });
var format_railway_4 = new ol.format.GeoJSON();
var features_railway_4 = format_railway_4.readFeatures(json_railway_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_railway_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_railway_4.addFeatures(features_railway_4);
var lyr_railway_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_railway_4, 
                style: style_railway_4,
                interactive: true,
                title: '<img src="styles/legend/railway_4.png" /> railway'
            });
var format_railway_5 = new ol.format.GeoJSON();
var features_railway_5 = format_railway_5.readFeatures(json_railway_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_railway_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_railway_5.addFeatures(features_railway_5);
var lyr_railway_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_railway_5, 
                style: style_railway_5,
                interactive: true,
                title: '<img src="styles/legend/railway_5.png" /> railway'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Transportasi_Kecamatan_Kaligesing_LN_1.setVisible(true);lyr_Transportasi_Kecamatan_Kaligesing_LN_2.setVisible(true);lyr_railway_3.setVisible(true);lyr_railway_4.setVisible(true);lyr_railway_5.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Transportasi_Kecamatan_Kaligesing_LN_1,lyr_Transportasi_Kecamatan_Kaligesing_LN_2,lyr_railway_3,lyr_railway_4,lyr_railway_5];
lyr_Transportasi_Kecamatan_Kaligesing_LN_1.set('fieldAliases', {'Lebar': 'Lebar', 'Fungsi_Jln': 'Fungsi_Jln', 'Nama_Jln_1': 'Nama_Jln_1', });
lyr_Transportasi_Kecamatan_Kaligesing_LN_2.set('fieldAliases', {'Lebar': 'Lebar', 'Fungsi_Jln': 'Fungsi_Jln', 'Nama_Jln_1': 'Nama_Jln_1', });
lyr_railway_3.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'railway': 'railway', 'wikipedia': 'wikipedia', 'train': 'train', 'public_transport': 'public_transport', 'operator': 'operator', 'name': 'name', 'ele': 'ele', });
lyr_railway_4.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'railway': 'railway', 'tracks': 'tracks', 'fee': 'fee', 'construction': 'construction', 'layer': 'layer', 'bridge': 'bridge', 'wikipedia': 'wikipedia', 'usage': 'usage', 'passenger_lines': 'passenger_lines', 'name': 'name', 'gauge': 'gauge', 'electrified': 'electrified', });
lyr_railway_5.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'railway': 'railway', 'train': 'train', 'public_transport': 'public_transport', 'name': 'name', 'building': 'building', });
lyr_Transportasi_Kecamatan_Kaligesing_LN_1.set('fieldImages', {'Lebar': '', 'Fungsi_Jln': '', 'Nama_Jln_1': '', });
lyr_Transportasi_Kecamatan_Kaligesing_LN_2.set('fieldImages', {'Lebar': '', 'Fungsi_Jln': '', 'Nama_Jln_1': '', });
lyr_railway_3.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'railway': '', 'wikipedia': '', 'train': '', 'public_transport': '', 'operator': '', 'name': '', 'ele': '', });
lyr_railway_4.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'railway': '', 'tracks': '', 'fee': '', 'construction': '', 'layer': '', 'bridge': '', 'wikipedia': '', 'usage': '', 'passenger_lines': '', 'name': '', 'gauge': '', 'electrified': '', });
lyr_railway_5.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'railway': '', 'train': '', 'public_transport': '', 'name': '', 'building': '', });
lyr_Transportasi_Kecamatan_Kaligesing_LN_1.set('fieldLabels', {'Lebar': 'no label', 'Fungsi_Jln': 'no label', 'Nama_Jln_1': 'no label', });
lyr_Transportasi_Kecamatan_Kaligesing_LN_2.set('fieldLabels', {'Lebar': 'no label', 'Fungsi_Jln': 'no label', 'Nama_Jln_1': 'no label', });
lyr_railway_3.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'railway': 'no label', 'wikipedia': 'no label', 'train': 'no label', 'public_transport': 'no label', 'operator': 'no label', 'name': 'no label', 'ele': 'no label', });
lyr_railway_4.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'railway': 'no label', 'tracks': 'no label', 'fee': 'no label', 'construction': 'no label', 'layer': 'no label', 'bridge': 'no label', 'wikipedia': 'no label', 'usage': 'no label', 'passenger_lines': 'no label', 'name': 'no label', 'gauge': 'no label', 'electrified': 'no label', });
lyr_railway_5.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'railway': 'no label', 'train': 'no label', 'public_transport': 'no label', 'name': 'no label', 'building': 'no label', });
lyr_railway_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});