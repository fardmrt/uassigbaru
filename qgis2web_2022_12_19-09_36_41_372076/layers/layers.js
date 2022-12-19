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
var format_Ibu_Kota_Kecamatan_Kaligesing_PT_1 = new ol.format.GeoJSON();
var features_Ibu_Kota_Kecamatan_Kaligesing_PT_1 = format_Ibu_Kota_Kecamatan_Kaligesing_PT_1.readFeatures(json_Ibu_Kota_Kecamatan_Kaligesing_PT_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ibu_Kota_Kecamatan_Kaligesing_PT_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ibu_Kota_Kecamatan_Kaligesing_PT_1.addFeatures(features_Ibu_Kota_Kecamatan_Kaligesing_PT_1);
var lyr_Ibu_Kota_Kecamatan_Kaligesing_PT_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ibu_Kota_Kecamatan_Kaligesing_PT_1, 
                style: style_Ibu_Kota_Kecamatan_Kaligesing_PT_1,
                interactive: true,
                title: '<img src="styles/legend/Ibu_Kota_Kecamatan_Kaligesing_PT_1.png" /> Ibu_Kota_Kecamatan_Kaligesing_PT'
            });
var format_Ibu_Kota_Kecamatan_Kaligesing_PT_2 = new ol.format.GeoJSON();
var features_Ibu_Kota_Kecamatan_Kaligesing_PT_2 = format_Ibu_Kota_Kecamatan_Kaligesing_PT_2.readFeatures(json_Ibu_Kota_Kecamatan_Kaligesing_PT_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ibu_Kota_Kecamatan_Kaligesing_PT_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ibu_Kota_Kecamatan_Kaligesing_PT_2.addFeatures(features_Ibu_Kota_Kecamatan_Kaligesing_PT_2);
var lyr_Ibu_Kota_Kecamatan_Kaligesing_PT_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ibu_Kota_Kecamatan_Kaligesing_PT_2, 
                style: style_Ibu_Kota_Kecamatan_Kaligesing_PT_2,
                interactive: true,
                title: '<img src="styles/legend/Ibu_Kota_Kecamatan_Kaligesing_PT_2.png" /> Ibu_Kota_Kecamatan_Kaligesing_PT'
            });
var format_Ibu_Kota_Kecamatan_Kaligesing_PT_3 = new ol.format.GeoJSON();
var features_Ibu_Kota_Kecamatan_Kaligesing_PT_3 = format_Ibu_Kota_Kecamatan_Kaligesing_PT_3.readFeatures(json_Ibu_Kota_Kecamatan_Kaligesing_PT_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ibu_Kota_Kecamatan_Kaligesing_PT_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ibu_Kota_Kecamatan_Kaligesing_PT_3.addFeatures(features_Ibu_Kota_Kecamatan_Kaligesing_PT_3);
var lyr_Ibu_Kota_Kecamatan_Kaligesing_PT_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ibu_Kota_Kecamatan_Kaligesing_PT_3, 
                style: style_Ibu_Kota_Kecamatan_Kaligesing_PT_3,
                interactive: true,
                title: '<img src="styles/legend/Ibu_Kota_Kecamatan_Kaligesing_PT_3.png" /> Ibu_Kota_Kecamatan_Kaligesing_PT'
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
var format_railway_6 = new ol.format.GeoJSON();
var features_railway_6 = format_railway_6.readFeatures(json_railway_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_railway_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_railway_6.addFeatures(features_railway_6);
var lyr_railway_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_railway_6, 
                style: style_railway_6,
                interactive: true,
                title: '<img src="styles/legend/railway_6.png" /> railway'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Ibu_Kota_Kecamatan_Kaligesing_PT_1.setVisible(true);lyr_Ibu_Kota_Kecamatan_Kaligesing_PT_2.setVisible(true);lyr_Ibu_Kota_Kecamatan_Kaligesing_PT_3.setVisible(true);lyr_railway_4.setVisible(true);lyr_railway_5.setVisible(true);lyr_railway_6.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Ibu_Kota_Kecamatan_Kaligesing_PT_1,lyr_Ibu_Kota_Kecamatan_Kaligesing_PT_2,lyr_Ibu_Kota_Kecamatan_Kaligesing_PT_3,lyr_railway_4,lyr_railway_5,lyr_railway_6];
lyr_Ibu_Kota_Kecamatan_Kaligesing_PT_1.set('fieldAliases', {'Klasifikas': 'Klasifikas', 'Jenis_Utam': 'Jenis_Utam', 'Jenis': 'Jenis', 'Kegiatan_O': 'Kegiatan_O', 'Nama_Objek': 'Nama_Objek', 'Pemerintah': 'Pemerintah', });
lyr_Ibu_Kota_Kecamatan_Kaligesing_PT_2.set('fieldAliases', {'Klasifikas': 'Klasifikas', 'Jenis_Utam': 'Jenis_Utam', 'Jenis': 'Jenis', 'Kegiatan_O': 'Kegiatan_O', 'Nama_Objek': 'Nama_Objek', 'Pemerintah': 'Pemerintah', });
lyr_Ibu_Kota_Kecamatan_Kaligesing_PT_3.set('fieldAliases', {'Klasifikas': 'Klasifikas', 'Jenis_Utam': 'Jenis_Utam', 'Jenis': 'Jenis', 'Kegiatan_O': 'Kegiatan_O', 'Nama_Objek': 'Nama_Objek', 'Pemerintah': 'Pemerintah', });
lyr_railway_4.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'railway': 'railway', 'wikipedia': 'wikipedia', 'train': 'train', 'public_transport': 'public_transport', 'operator': 'operator', 'name': 'name', 'ele': 'ele', });
lyr_railway_5.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'railway': 'railway', 'tracks': 'tracks', 'fee': 'fee', 'construction': 'construction', 'layer': 'layer', 'bridge': 'bridge', 'wikipedia': 'wikipedia', 'usage': 'usage', 'passenger_lines': 'passenger_lines', 'name': 'name', 'gauge': 'gauge', 'electrified': 'electrified', });
lyr_railway_6.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'railway': 'railway', 'train': 'train', 'public_transport': 'public_transport', 'name': 'name', 'building': 'building', });
lyr_Ibu_Kota_Kecamatan_Kaligesing_PT_1.set('fieldImages', {'Klasifikas': '', 'Jenis_Utam': '', 'Jenis': '', 'Kegiatan_O': '', 'Nama_Objek': '', 'Pemerintah': '', });
lyr_Ibu_Kota_Kecamatan_Kaligesing_PT_2.set('fieldImages', {'Klasifikas': '', 'Jenis_Utam': '', 'Jenis': '', 'Kegiatan_O': '', 'Nama_Objek': '', 'Pemerintah': '', });
lyr_Ibu_Kota_Kecamatan_Kaligesing_PT_3.set('fieldImages', {'Klasifikas': '', 'Jenis_Utam': '', 'Jenis': '', 'Kegiatan_O': '', 'Nama_Objek': '', 'Pemerintah': '', });
lyr_railway_4.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'railway': '', 'wikipedia': '', 'train': '', 'public_transport': '', 'operator': '', 'name': '', 'ele': '', });
lyr_railway_5.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'railway': '', 'tracks': '', 'fee': '', 'construction': '', 'layer': '', 'bridge': '', 'wikipedia': '', 'usage': '', 'passenger_lines': '', 'name': '', 'gauge': '', 'electrified': '', });
lyr_railway_6.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'railway': '', 'train': '', 'public_transport': '', 'name': '', 'building': '', });
lyr_Ibu_Kota_Kecamatan_Kaligesing_PT_1.set('fieldLabels', {'Klasifikas': 'no label', 'Jenis_Utam': 'no label', 'Jenis': 'no label', 'Kegiatan_O': 'no label', 'Nama_Objek': 'no label', 'Pemerintah': 'no label', });
lyr_Ibu_Kota_Kecamatan_Kaligesing_PT_2.set('fieldLabels', {'Klasifikas': 'no label', 'Jenis_Utam': 'no label', 'Jenis': 'no label', 'Kegiatan_O': 'no label', 'Nama_Objek': 'no label', 'Pemerintah': 'no label', });
lyr_Ibu_Kota_Kecamatan_Kaligesing_PT_3.set('fieldLabels', {'Klasifikas': 'no label', 'Jenis_Utam': 'no label', 'Jenis': 'no label', 'Kegiatan_O': 'no label', 'Nama_Objek': 'no label', 'Pemerintah': 'no label', });
lyr_railway_4.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'railway': 'no label', 'wikipedia': 'no label', 'train': 'no label', 'public_transport': 'no label', 'operator': 'no label', 'name': 'no label', 'ele': 'no label', });
lyr_railway_5.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'railway': 'no label', 'tracks': 'no label', 'fee': 'no label', 'construction': 'no label', 'layer': 'no label', 'bridge': 'no label', 'wikipedia': 'no label', 'usage': 'no label', 'passenger_lines': 'no label', 'name': 'no label', 'gauge': 'no label', 'electrified': 'no label', });
lyr_railway_6.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'railway': 'no label', 'train': 'no label', 'public_transport': 'no label', 'name': 'no label', 'building': 'no label', });
lyr_railway_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});